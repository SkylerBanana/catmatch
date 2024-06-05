import { createClient } from "@/utils/supabase/server";
import { SubmitButton } from "../login/submit-button";

import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  async function Determine() {
    "use server";
    console.log("aaa");
  }

  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2 bg-gradient-to-r ">
      <form className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-black ">
        <div className="flex flex-col bg-white rounded-lg  p-5 justify-between  max-h-[320px] max-w-[320px] flex-1">
          <div className="flex flex-col space-y-2">
            <label className="text-md" htmlFor="firstname">
              First Name
            </label>
            <input
              className="rounded-md px-4 py-2  border border-black"
              name="firstname"
              placeholder="Peanut"
              required
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-md" htmlFor="lastname">
              Last Name
            </label>
            <input
              className="rounded-md px-4 py-2 bg-inherit border border-black"
              name="lastname"
              placeholder="thegreat"
              required
            />
          </div>
          <div className="flex flex-col  gap-2">
            <SubmitButton
              formAction={Determine}
              className="bg-blue-700 rounded-md px-4 py-2 text-foreground border border-black "
              pendingText="Signing In..."
            >
              Submit
            </SubmitButton>
            <input type="file" accept="image/*" />
          </div>
        </div>
      </form>
    </div>
  );
}
