import { router } from "~/backend/trpc";
import { exampleRouter } from "~/backend/routers/example";

export const appRouter = router({
  example: exampleRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
