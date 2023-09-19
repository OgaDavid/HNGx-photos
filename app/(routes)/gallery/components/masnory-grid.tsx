"use client";
import Masonry from "react-masonry-css";

import React from "react";
import CloudinaryImage from "./cloudinary-image";

export default function MasnoryGrid({
  imagesResult,
}: {
  imagesResult: ImageResult[];
}) {
  const breakpointColumns = {
    default: 5,
    1100: 4,
    700: 3,
    500: 2,
  };
  return (
    <Masonry
      breakpointCols={breakpointColumns}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {imagesResult.map((image) => (
        <div key={image.public_id} className="flex flex-col items-center">
          <CloudinaryImage publicId={image.public_id} />
        </div>
      ))}
    </Masonry>
  );
}
