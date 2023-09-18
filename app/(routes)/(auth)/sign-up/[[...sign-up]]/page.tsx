import { SignUp } from "@clerk/nextjs";
import type { Metadata } from "next";

export const metadata:Metadata = {
  title: "Sign up | Photos",
  description: "Create an account"
}

export default function Page() {
  return (
    <SignUp
      appearance={{
        elements: {
          rootBox: "mx-auto pt-[70px]",
        },
      }}
    />
  );
}
