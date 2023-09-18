import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href="/">
      <span className="flex items-center gap-1">
        <Image src="/images/logo.svg" alt="Logo" width={32} height={32} />
        <p className="text-xl font-bold">Photos</p>
      </span>
    </Link>
  );
}
