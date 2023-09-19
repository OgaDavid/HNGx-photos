import Container from "@/components/ui/container";
import React from "react";
import cloudinary from "cloudinary";

export default async function GalleryPage() {
  const images = await cloudinary.v2.search
    .expression(
      "resource_type:image"
    )
    .sort_by("public_id", "desc")
    .max_results(30)
    .execute();

    console.log(images)
  return (
    <main>
      <Container>Gallery page</Container>
    </main>
  );
}
