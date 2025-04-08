"use client";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { z } from "zod";
import { toast } from "sonner";
import { useForm } from "@tanstack/react-form";

import { signup } from "../actions";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import emailIcon from "@/public/assets/images/icon-email.svg";
import passwordIcon from "@/public/assets/images/icon-password.svg";
import { FieldInfo } from "@/components/field-info";

const signUpSchema = z
  .object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
    confirmPassword: z
      .string()
      .min(8, "Password must be at least 8 characters long"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const SignUpForm = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: ({ value }) => {
      startTransition(async () => {
        try {
          await signup({ email: value.email, password: value.password });
          toast.success(
            "Account created successfully, Please check your email to verify your account.",
          );
          router.push("/sign-in");
        } catch (error) {
          console.error("Error signing in:", error);
          toast.error(`${error}`);
        }
      });
    },
    validators: {
      onChange: signUpSchema,
    },
  });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      className="space-y-6"
    >
      <form.Field name="email">
        {(field) => (
          <div className="relative space-y-1">
            <Label className="text-charcoal text-xs">Email</Label>
            <Input
              id="email"
              type="text"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              className="rounded pl-7.5"
              placeholder="example@email.com"
              disabled={isPending}
            />
            <Image
              src={emailIcon}
              alt=""
              className="absolute top-7.5 left-2.5"
            />
            <FieldInfo field={field} />
          </div>
        )}
      </form.Field>
      <form.Field name="password">
        {(field) => (
          <div className="relative space-y-1">
            <Label className="text-charcoal text-xs">Password</Label>
            <Input
              id="password"
              type="password"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              className="rounded pl-7.5"
              placeholder="At least 8 characters"
              disabled={isPending}
            />
            <Image
              src={passwordIcon}
              alt=""
              className="absolute top-7.5 left-2.5"
            />
            <FieldInfo field={field} />
          </div>
        )}
      </form.Field>
      <form.Field name="confirmPassword">
        {(field) => (
          <div className="relative space-y-1">
            <Label className="text-charcoal text-xs">Confirm Password</Label>
            <Input
              id="confirmPassword"
              type="password"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              className="rounded pl-7.5"
              placeholder="At least 8 characters"
              disabled={isPending}
            />
            <Image
              src={passwordIcon}
              alt=""
              className="absolute top-7.5 left-2.5"
            />
            <FieldInfo field={field} />
          </div>
        )}
      </form.Field>
      <Button
        type="submit"
        className="bg-indigo w-full font-semibold"
        onClick={form.handleSubmit}
        disabled={isPending}
      >
        Sign Up
      </Button>
      <p className="text-grey-dark mx-auto w-fit">
        Already have an account?{" "}
        <Link href="/sign-in" className="text-indigo">
          Login
        </Link>
      </p>
    </form>
  );
};
