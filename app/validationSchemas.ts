import { z } from "zod";

export const postSchema = z.object({
  title: z
    .string()
    .min(1, { message: "عنوان پست نباید خالی بماند." })
    .max(255, { message: "عنوان پست نباید بیش از 255 کاراکتر باشد." }),
  description: z
    .string({ message: "شرح پست نباید خالی بماند." })
    .min(1, { message: "شرح پست نباید خالی بماند." }),
  image: z.string(),
});

export const userSchema = z.object({
  name: z
    .string()
    .min(3, { message: "نام کاربری نباید کمتر از 3 کاراکتر باشد." })
    .max(50, { message: "نام کاربری نباید بیشتر از 50 کاراکتر باشد." }),
  email: z
    .string()
    .min(1, { message: "لطفا ایمیل خود را وارد کنید." })
    .email({ message: "آدرس ایمیل وارد شده معتبر نیست." }),
  password: z
    .string()
    .min(6, { message: "رمز عبور نباید کمتر از 6 کاراکتر باشد." }),
});
