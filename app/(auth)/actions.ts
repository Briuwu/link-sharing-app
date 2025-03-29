"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    redirect("/error");
  }

  revalidatePath("/");
  redirect("/");
}

export async function signup({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const supabase = await createClient();

  const { error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    redirect("/error");
  }

  revalidatePath("/");
  redirect("/");
}
