import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { createAuthMiddleware } from 'better-auth/api';
import { err, ok } from 'neverthrow';
import {
  checkUserCampaignAlgo,
  updateUserPoints,
} from '~/services/score-algo-api';
import { persistUserImage } from '~/services/user.server';
import { db } from './db.server';

export const auth = betterAuth({
  database: prismaAdapter(db, {
    provider: 'mysql',
  }),
  account: {
    updateAccountOnSignIn: true,
    accountLinking: {
      enabled: true,
      trustedProviders: ['tiktok'],
      updateUserInfoOnLink: true,
    },
  },
  emailAndPassword: {
    enabled: false,
  },
  socialProviders: {
    tiktok: {
      // @ts-expect-error TikTok does not use clientId
      clientId: process.env.TIKTOK_CLIENT_ID as string,
      clientSecret: process.env.TIKTOK_CLIENT_SECRET as string,
      clientKey: process.env.TIKTOK_CLIENT_KEY as string,
      scope: ['user.info.basic', 'user.info.profile', 'user.info.stats'],
      overrideUserInfoOnSignIn: true,
    },
  },
  hooks: {
    after: createAuthMiddleware((ctx) => {
      const newSession = ctx.context.newSession;
      console.log('New session created:', newSession);
      if (newSession) {
        persistUserImage(newSession.user);
        checkUserCampaignAlgo();
        setTimeout(() => updateUserPoints(), 10_000);
      }
      return Promise.resolve();
    }),
  },
  trustedOrigins: [
    'http://localhost:5173',
    'https://staging.peakboom.ai',
    'https://www.peakboom.ai',
    'https://peakboom.ai',
  ],
});

export const getSessionUser = async ({ headers }: Request) => {
  const session = await auth.api.getSession({
    headers,
  });
  if (!session?.user) {
    return err('Unauthorized');
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
    return err('User not found');
  }
  return ok(dbUser);
};
