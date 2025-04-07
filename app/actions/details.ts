"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { cache } from "react";

export const fetchDetails = cache(async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Must be authenticated.");
  }

  const { data } = await supabase
    .from("users")
    .select()
    .eq("user_id", user.id)
    .single();

  return data;
});

export const fetchDetailsById = cache(async (id: string) => {
  const supabase = await createClient();

  const { data } = await supabase
    .from("users")
    .select()
    .eq("user_id", id)
    .single();

  return data;
});

export const insertDetails = async (data: FormData) => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Must be authenticated.");
  }

  const file = data.get("avatar") as File;
  const firstName = data.get("firstName") as string;
  const lastName = data.get("lastName") as string;
  const email = data.get("email") as string;

  if (!file) {
    throw new Error("File is required.");
  }

  if (!firstName || !lastName || !email) {
    throw new Error("All fields are required.");
  }

  const { data: uploadData, error: uploadError } = await supabase.storage
    .from("avatars")
    .upload(`${user.id}/${file.name}`, file, {
      cacheControl: "3600",
      upsert: true,
    });

  if (uploadError) {
    throw new Error(uploadError.message);
  }

  const { data: avatarUrl } = supabase.storage
    .from("avatars")
    .getPublicUrl(uploadData.path);

  const { error } = await supabase.from("users").upsert({
    first_name: firstName,
    last_name: lastName,
    email,
    avatar_url: avatarUrl.publicUrl,
    user_id: user.id,
  });

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/");
  revalidatePath("/details");
};
