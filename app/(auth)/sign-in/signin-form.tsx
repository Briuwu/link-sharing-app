"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "@tanstack/react-form";

import emailIcon from "@/public/assets/images/icon-email.svg";
import passwordIcon from "@/public/assets/images/icon-password.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const SignInForm = () => {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: ({ value }) => {
      console.log(value);
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
          </div>
        )}
      </form.Field>
      <Button type="submit" className="bg-indigo w-full font-semibold">
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
