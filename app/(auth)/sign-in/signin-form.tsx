"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AnyFieldApi, useForm } from "@tanstack/react-form";

import emailIcon from "@/public/assets/images/icon-email.svg";
import passwordIcon from "@/public/assets/images/icon-password.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { z } from "zod";

const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

function FieldInfo({ field }: { field: AnyFieldApi }) {
  return (
    <>
      {field.state.meta.isTouched && field.state.meta.errors.length ? (
        <em className="text-red text-xs">
          {field.state.meta.errors.map((error) => error.message).join(", ")}
        </em>
      ) : null}
      {field.state.meta.isValidating ? "Validating..." : null}
    </>
  );
}

export const SignInForm = () => {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: ({ value }) => {
      console.log(value);
    },
    validators: {
      onChange: signInSchema,
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
              placeholder="Enter your password"
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
        onClick={form.handleSubmit}
        className="bg-indigo w-full font-semibold"
      >
        Login
      </Button>
      <p className="text-grey-dark mx-auto w-fit">
        Don&apos;t have an account?{" "}
        <Link href="/sign-up" className="text-indigo">
          Create account
        </Link>
      </p>
    </form>
  );
};
