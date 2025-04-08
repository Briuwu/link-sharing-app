"use server";

import { AddLink } from "@/lib/types";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { cache } from "react";

export const fetchLinks = cache(async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Must be authenticated.");
  }
  const { data: links } = await supabase
    .from("links")
    .select()
    .eq("user_id", user.id);

  return links;
});

export const fetchLinksById = cache(async (id: string) => {
  const supabase = await createClient();

  const { data } = await supabase.from("links").select().eq("user_id", id);

  return data;
});

export const insertLinks = async (data: AddLink[]) => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Must be authenticated.");
  }

  const { error } = await supabase.from("links").upsert(
    data.map((link) => ({
      ...link,
      user_id: user.id,
    })),
    { onConflict: "id" },
  );

  if (error) {
    throw new Error("Error inserting links: " + error.message);
  }

  revalidatePath("/");
};

export const deleteLink = async (id: string) => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Must be authenticated.");
  }
  await supabase.from("links").delete().eq("id", id).eq("user_id", user.id);

  revalidatePath("/");
};
