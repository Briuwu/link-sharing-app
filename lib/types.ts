import { Tables } from "@/utils/supabase/database.types";

export type Links = Tables<"links">;

export type AddLink = Omit<Links, "id" | "created_at" | "user_id">;

export type Details = Tables<"users">;

export type AddDetails = Omit<Details, "id" | "created_at" | "user_id">;
