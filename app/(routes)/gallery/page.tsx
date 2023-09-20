import Container from "@/components/ui/container";
import cloudinary from "cloudinary";
import MasnoryGrid from "./components/masnory-grid";
import type { Metadata } from "next";
import { SearchBar } from "./components/searchbar";
import CloudinaryImage from "./components/cloudinary-image";

export const metadata: Metadata = {
  title: "Gallery | Photos",
  description: "Check out your Gallery.",
};

export default async function GalleryPage({
  searchParams: { search },
}: {
  searchParams: { search: string };
}) {
  // get images from Cloudinary
  const imagesResult = (await cloudinary.v2.search
    .expression(
      `resource_type:image AND folder=photos${
        search ? ` AND tags=${search}` : ""
      }`
    )
    .sort_by("public_id", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: ImageResult[] };

  return (
    <main>
      <Container>
        <SearchBar initialSearch={search} />
        <span>
          <h1 className="text-base py-5 md:text-xl font-semibold">
            Showing {imagesResult.resources.length} images.
          </h1>
        </span>
        <MasnoryGrid imagesResult={imagesResult.resources} />
        {/* {imagesResult.resources.map((image, idx) => (
          <article key={idx} className="flex relative group pb-[15px] transition duration-300 flex-col items-center">
            <CloudinaryImage
              imageData={image}
              tags={image.tags}
              publicId={image.public_id}
              // onUnheart={(unheartedImage: ImageResult) => {
              //   updateImages((currentResources: ImageResult[]) =>
              //     currentResources.filter(
              //       (resource) =>
              //         resource.public_id !== unheartedImage.public_id
              //     )
              //   );
              // }}
            />
          </article>
        ))} */}
      </Container>
    </main>
  );
}
