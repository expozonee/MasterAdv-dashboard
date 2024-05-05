import * as z from "zod";
import validator from "validator";

const passwordLength = 20;

const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email" })
    .refine(
      (email) =>
        validator.isEmail(email, {
          host_whitelist: ["masteradv.vip"],
        }),
      {
        message: "Email must end with @masteradv.vip",
      }
    ),
  password: z
    .string()
    .min(1, { message: "Password is required" })
    .min(passwordLength, {
      message: "Password must be at least 20 characters long",
    }),
});

export type LoginSchema = z.infer<typeof loginSchema>;
