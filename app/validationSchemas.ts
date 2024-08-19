import { z } from "zod";

export const createPostSchema = z.object({
  title: z
    .string({ message: "عنوان پست نباید خالی بماند." })
    .min(1, { message: "عنوان پست نباید خالی بماند." })
    .max(255, { message: "عنوان پست نباید بیش از 255 کاراکتر باشد." }),
  description: z
    .string({ message: "شرح پست نباید خالی بماند." })
    .min(1, { message: "شرح پست نباید خالی بماند." }),
  image: z.string(),
});
