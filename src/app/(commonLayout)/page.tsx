import { Button } from "@/components/ui/button";
import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = await cookies();

  console.log(cookieStore.get("better-auth.session_token"));

  const res = await fetch("http://localhost:5001/api/auth/get-session", {
    headers: {
      Cookie: cookieStore.toString(),
    },
    cache: "no-store",
  });
  const session = await res.json();
  console.log(session);
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Button variant={"outline"}>Click Here</Button>
    </div>
  );
}
