"use server";

import * as z from "zod";

import { SignupSchema } from "@/schemas";

export const signup = async (values: z.infer<typeof SignupSchema>) => {
  const validatedFields = SignupSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  return { success: "Email sent !" };
};
