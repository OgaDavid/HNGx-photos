"use client";
import { MarkAsFavorite } from "@/actions/mark-as-favorite";
import { CldImage } from "next-cloudinary";
import { useState, useTransition } from "react";
import HeartFull from "./heart-full";
import Heart from "./heart";

export default function CloudinaryImage({
  publicId,
  tags,
}: {
  publicId: string;
  tags: string[];
}) {
  const [isFavorited, setIsFavorited] = useState<boolean>(
    tags.includes("favorite")
  );

  const [transition, startTransition] = useTransition();

  return (
    <div className="relative">
      {isFavorited ? (
        <span
          onClick={() => {
            setIsFavorited(false);
            startTransition(() => MarkAsFavorite(publicId, false));
          }}
        >
          <HeartFull className="absolute cursor-pointer top-2 p-1 text-red-600 bg-white bg-opacity-20 rounded-full left-2 w-6 h-6" />
        </span>
      ) : (
        <span
          onClick={() => {
            setIsFavorited(true);
            startTransition(() => MarkAsFavorite(publicId, true));
          }}
        >
          <Heart className="absolute cursor-pointer top-2 p-1 bg-white bg-opacity-20 rounded-full left-2 text-gray-50 opacity-50 w-6 h-6" />
        </span>
      )}
      <CldImage
        width={250}
        height={200}
        className="rounded-md"
        src={publicId}
        alt="image"
      />
    </div>
  );
}
