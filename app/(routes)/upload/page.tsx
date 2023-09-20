import Container from "@/components/ui/container";
import React from "react";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Wahala Wahala 😂",
  description: "Page in progress!",
};

export default function UploadPage() {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center py-28">
        <h1 className="text-2xl text-center font-bold pb-10 md:text-4xl">
          I never enter stage 4 i dey do upload feature, dey play 😂
        </h1>
        <Image
          src="/images/side-eye.jpg"
          className=""
          alt="side eye"
          width={200}
          height={300}
        />
      </div>
    </Container>
  );
}
