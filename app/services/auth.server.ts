import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { createAuthMiddleware } from "better-auth/api";
import { err, ok } from "neverthrow";
import { logger } from "~/services/logger.server";
import {
  checkUserCampaignAlgo,
  updateUserPoints,
} from "~/services/score-algo-api";
import { saveTwitterHandle } from "~/services/twitter.server";
import { updateUserInfo } from "~/services/updateUserInfo";
import { persistUserImage } from "~/services/user.server";
import { walletPlugin } from "~/services/walletPlugin.auth.server";
import { db } from "./db.server";

export const auth = betterAuth({
  database: prismaAdapter(db, {
    provider: "mysql",
  }),
  account: {
    updateAccountOnSignIn: true,
    accountLinking: {
      enabled: true,
      trustedProviders: ["tiktok", "twitter"],
      updateUserInfoOnLink: true,
      allowDifferentEmails: true,
    },
  },
  emailAndPassword: {
    enabled: false,
  },
  socialProviders: {
    tiktok: {
      clientSecret: process.env.TIKTOK_CLIENT_SECRET as string,
      clientKey: process.env.TIKTOK_CLIENT_KEY as string,
      scope: ["user.info.basic", "user.info.profile", "user.info.stats"],
      overrideUserInfoOnSignIn: true,
    },
    twitter: {
      clientId: process.env.TWITTER_CLIENT_ID as string,
      clientSecret: process.env.TWITTER_CLIENT_SECRET as string,
      scope: ["tweet.read", "users.read", "follows.read"],
    },
  },
  hooks: {
    after: createAuthMiddleware(async (ctx) => {
      const newSession = ctx.context.newSession;
      logger.debug("New session created:", newSession);
      if (newSession) {
        persistUserImage(newSession.user);
        checkUserCampaignAlgo(newSession.user.email);
        updateUserInfo({ user: newSession.user });
        setTimeout(() => updateUserPoints(), 10_000);
      }

      // Handle Twitter account linking
      const returned = ctx.context.returned;

      if (
        returned &&
        typeof returned === "object" &&
        "data" in returned &&
        returned.data &&
        typeof returned.data === "object" &&
        "data" in returned.data &&
        returned.data.data &&
        typeof returned.data.data === "object" &&
        "username" in returned.data.data &&
        "id" in returned.data.data
      ) {
        await saveTwitterHandle({
          accountId: String(returned.data.data.id),
          twitterHandle: String(returned.data.data.username),
        });
      }

      return Promise.resolve();
    }),
  },
  trustedOrigins: [
    "http://localhost:5100",
    "https://staging.peakboom.ai",
    "https://www.peakboom.ai",
    "https://peakboom.ai",
    "https://www.takeapeak.ai",
    "https://takeapeak.ai",
  ],
  plugins: [walletPlugin()],
});

export const getSessionUser = async ({ headers }: Request) => {
  const session = await auth.api.getSession({
    headers,
  });
  if (!session?.user) {
    return err("Unauthorized");
  }
  return ok(session.user);
};

export const getDbUser = async (request: Request) => {
  const user = await getSessionUser(request);
  if (user.isErr()) {
    return err(user.error);
  }
  const dbUser = await db.user.findUnique({
    where: { id: user.value.id },
    include: {
      campaignUsers: true,
    },
  });
  if (!dbUser) {
    return err("User not found");
  }
  return ok(dbUser);
};
