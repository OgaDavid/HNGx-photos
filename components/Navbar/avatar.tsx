"use client";
import { useUser } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function UserAvatar() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return (
      <span>
        <Image
          alt="user"
          width={35}
          height={35}
          className="rounded-full"
          src="/images/default_avatar.jpg"
        />
      </span>
    );
  }
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
