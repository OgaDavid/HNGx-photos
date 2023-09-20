import Container from "@/components/ui/container";
import { Heart, Image } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function GalleryHeader() {
  return (
    <div className="pt-[68px] border-b border-b-gray-100 mb-3 pb-3">
      <Container>
        <div className="flex items-center gap-2 justify-between">
          <span className="flex items-center gap-1">
            <Image className="w-6 h-6" />
            <h1 className="text-xl md:text-2xl font-bold">Gallery</h1>
          </span>
          <span>
          </span>
          <span>
            <Link
              href="/gallery/favorites"
              className="px-4 py-2 text-sm font-semibold bg-gray-100 hover:text-white flex items-center gap-1 rounded-md hover:bg-blue-600"
            >
              <Heart className="w-4 h-4" /> <span>Favorites</span>
            </Link>
          </span>
        </div>
      </Container>
    </div>
  );
}
