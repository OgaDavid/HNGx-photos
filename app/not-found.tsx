import Container from "@/components/ui/container";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center pt-36">
        <span>
          <h1 className="text-2xl max-w-[600px] text-center mb-10 font-semibold md:text-4xl">
            Seems you&apos;ve sailed away from the page! head back{" "}
            <Link href="/gallery" className="italic underline">
              here
            </Link>
          </h1>
        </span>
        <Image src="/images/404.png" alt="404" width={600} height={600} />
      </div>
    </Container>
  );
}
