"use server";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
export default async function checkstatus() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }
}
