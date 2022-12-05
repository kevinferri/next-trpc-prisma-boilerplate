import { z } from "zod";
import { protectedProcedure, publicProcedure, router } from "~/backend/trpc";

// publicProcedure doesn't run auth middleware
export const exampleRouter = router({
  public: publicProcedure
    .input(
      z.object({
        text: z.string().nullish(),
      })
    )
    .query(({ input }) => {
      return {
        greeting: `Hello ${input?.text ?? "world"}`,
      };
    }),

  // protectedProcedure requires auth
  protected: protectedProcedure
    .input(
      z.object({
        text: z.string().nullish(),
      })
    )
    .query(({ input }) => {
      return {
        greeting: `Hello ${input?.text ?? "world"}`,
      };
    }),
});
