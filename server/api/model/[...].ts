import { enhance } from "@zenstackhq/runtime";
import { createEventHandler } from "@zenstackhq/server/nuxt";

export default createEventHandler({
  getPrisma: async (event) => {
    const user = event.context.user;
    return enhance(prisma, {
      user: user
        ? {
            id: user?.id,
          }
        : undefined,
    });
  },
});
