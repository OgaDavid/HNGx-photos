"use client";
import { CldImage } from "next-cloudinary";

export default function CloudinaryImage({ publicId }: { publicId: string }) {
  return (
    <CldImage
      width={250}
      height={200}
      className="rounded-md"
      src={publicId}
      alt="image"
    />
  );
}
