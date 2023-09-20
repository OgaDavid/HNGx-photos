"use client";

import Container from "@/components/ui/container";
import MasnoryGrid from "../components/masnory-grid";
import { useEffect, useState } from "react";

export default function FavoritesList({
  initialImagesData,
}: {
  initialImagesData: ImageResult[];
}) {
  const [images, setImages] = useState(initialImagesData);
  useEffect(() => {
    setImages(initialImagesData);
  }, [initialImagesData]);

  return (
    <main>
      <Container>
        <MasnoryGrid imagesResult={initialImagesData} />
      </Container>
    </main>
  );
}
