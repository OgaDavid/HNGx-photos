import { SignIn } from "@clerk/nextjs";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Sign in | Photos",
  description: "Login to your account",
};

export default function Page() {
  return (
    <>
      <SignIn
        appearance={{
          elements: {
            rootBox: "mx-auto pt-[70px]",
          },
        }}
      />
      <span className="flex flex-col text-sm text-[#202124] font-medium items-center mt-10 md:mt-4 justify-center">
        <h2 className="flex pb-1 items-center gap-1">
          Are you a test user? login with <ArrowRight className="w-3 h-3" />
        </h2>
        <div>
          <p>Email: <span className="underline text-[#103FEF]">user@example.com</span></p>
          <p>Password: <span className="underline text-[#103FEF]">1Password</span></p>
        </div>
      </span>
    </>
  );
}
