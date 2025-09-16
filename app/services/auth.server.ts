import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { createAuthMiddleware } from 'better-auth/api';
import { err, ok } from 'neverthrow';
import { persistUserImage, processInviteSignup } from '~/services/user.server';
import { db } from './db.server';

export const auth = betterAuth({
  database: prismaAdapter(db, {
    provider: 'mysql',
  }),
  account: {
    accountLinking: {
      enabled: true,
      trustedProviders: ['tiktok'],
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
    },
  },
  hooks: {
    after: createAuthMiddleware((ctx) => {
      const newSession = ctx.context.newSession;
      const isCallback = ctx.request?.url?.includes('/callback');

      // Log all callback requests for debugging
      if (isCallback) {
        console.log('OAuth Callback received:', {
          url: ctx.request?.url,
          hasNewSession: !!newSession,
          userId: newSession?.user?.id,
        });
      }

      if (newSession) {
        persistUserImage(newSession.user);

        // Extract inviter ID from the callback URL query parameters
        const url = ctx.request?.url;
        if (url) {
          try {
            const urlObj = new URL(url);
            const inviterId = urlObj.searchParams.get('inviter');

            console.log('Processing new user session:', {
              newUserId: newSession.user.id,
              inviterId,
              callbackUrl: url,
            });

            if (inviterId) {
              console.log(
                `Processing invite signup for user ${newSession.user.id} with inviter ${inviterId}`
              );
              processInviteSignup(newSession.user.id, inviterId);
            } else {
              console.log('No inviter ID found in callback URL');
            }
          } catch (error) {
            console.error('Error parsing callback URL for inviter:', error);
          }
        } else {
          console.log('No URL found in auth context');
        }
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
