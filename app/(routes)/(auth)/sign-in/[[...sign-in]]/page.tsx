import { SignIn } from "@clerk/nextjs";
import type { Metadata } from "next";

export const metadata:Metadata = {
  title: "Sign in | Photos",
  description: "Login to your account"
}

export default function Page() {
  return (
    <SignIn
      appearance={{
        elements: {
          rootBox: "mx-auto",
        },
      }}
    />
  );
}
