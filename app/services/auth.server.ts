import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { db } from './db.server';

export const auth = betterAuth({
  database: prismaAdapter(db, {
    provider: 'mysql',
  }),
  emailAndPassword: {
    enabled: false,
  },
  socialProviders: {
    tiktok: {
      // @ts-expect-error TikTok does not use clientId
      clientId: process.env.TIKTOK_CLIENT_ID as string,
      clientSecret: process.env.TIKTOK_CLIENT_SECRET as string,
      clientKey: process.env.TIKTOK_CLIENT_KEY as string,
    },
  },
});
