import Container from "@/components/ui/container";
import React from "react";
import cloudinary from "cloudinary";
import CloudinaryImage from "./components/cloudinary-image";

export default async function GalleryPage() {
  // get images from Cloudinary
  const imagesResult = (await cloudinary.v2.search
    .expression("resource_type:image AND folder=photos")
    .sort_by("public_id", "desc")
    .max_results(30)
    .execute()) as { resources: ImageResult[] };

  // console.log(imagesResult)
  return (
    <main>
      <Container>
        <span>
          <h1 className="text-base py-5 md:text-xl font-semibold">
            Showing {imagesResult.resources.length} images
          </h1>
        </span>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-4">
          {imagesResult.resources.map((image) => (
            <div key={image.public_id} className="flex flex-col items-center">
              <CloudinaryImage publicId={image.public_id} />
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}
