import type { BetterAuthPlugin } from "better-auth";
import { APIError, createAuthEndpoint } from "better-auth/api";
import { setSessionCookie } from "better-auth/cookies";
import { z } from "zod";
import { db } from "~/services/db.server";

export const walletPlugin = () =>
  ({
    id: "wallet",
    endpoints: {
      walletLogin: createAuthEndpoint(
        "/sign-in/wallet",
        {
          method: "POST",
          body: z.object({
            walletAddress: z.string().min(1),
          }),
          metadata: {
            openapi: {
              summary: "Sign in with wallet",
              description: "Sign in with wallet",
              responses: {
                200: {
                  description: "Success",
                  content: {
                    "application/json": {
                      schema: {
                        type: "object",
                        properties: {
                          user: {
                            $ref: "#/components/schemas/User",
                          },
                          session: {
                            $ref: "#/components/schemas/Session",
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
        async (ctx) => {
          const { walletAddress: _walletAddress } = await ctx.body;
          if (!_walletAddress || typeof _walletAddress !== "string") {
            return ctx.json(
              { error: "Wallet address is required" },
              { status: 400 }
            );
          }
          const walletAddress = _walletAddress.toLowerCase();

          // Check if user exists
          let user = await db.user.findUnique({
            where: { email: walletAddress },
          });

          // Create user with custom fields directly in Prisma
          if (!user) {
            const id = ctx.context.generateId({ model: "user" });
            if (!id) {
              throw new APIError("INTERNAL_SERVER_ERROR", {
                message: "Internal Server Error",
                status: 500,
              });
            }
            user = await db.user.create({
              data: {
                id,
                email: walletAddress,
                name: walletAddress,
                walletAddress,
                isBusiness: true,
                emailVerified: true, // Auto-verify wallet users
              },
            });
          }

          const session = await ctx.context.internalAdapter.createSession(
            user.id,
            ctx
          );

          if (!session) {
            throw new APIError("INTERNAL_SERVER_ERROR", {
              message: "Internal Server Error",
              status: 500,
            });
          }

          await setSessionCookie(ctx, { session, user });

          return ctx.json({
            token: session.token,
            success: true,
            user: {
              id: user.id,
              walletAddress: user.walletAddress,
              isBusiness: user.isBusiness,
            },
          });
        }
      ),
    },
  }) satisfies BetterAuthPlugin;
