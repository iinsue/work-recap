"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { useTransition } from "react";
import { Button } from "../ui/button";
import { CardWrapper } from "./card-wrapper";
import { FormError } from "../form-error";

export const LoginForm = () => {
  const form = useForm();
  const [isPending, startTransition] = useTransition();

  return (
    <>
      <CardWrapper
        headerLabel="환영합니다"
        buttonHref="/sign-up"
        buttonLabel="계정이 없으신가요?"
      >
        <Form {...form}>
          <form className="space-y-6">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="Enter your email"
                        disabled={isPending}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        placeholder="**********"
                        disabled={isPending}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <FormError message="error" />
            <Button type="submit" disabled={isPending} className="w-full">
              Login
            </Button>
          </form>
        </Form>
      </CardWrapper>
    </>
  );
};
