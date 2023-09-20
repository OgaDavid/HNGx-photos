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

const MAX_COLUMNS = 5;

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

  function getColumns(colIndex: number) {
    return imagesResult.resources.filter(
      (resource, idx) => idx % MAX_COLUMNS === colIndex
    );
  }

  return (
    <main>
      <Container>
        <SearchBar initialSearch={search} />
        <span>
          <h1 className="text-base py-5 md:text-xl font-semibold">
            Showing {imagesResult.resources.length} images.
          </h1>
        </span>

        <div className="grid grid-cols-5 gap-3">
          {[
            getColumns(0),
            getColumns(1),
            getColumns(2),
            getColumns(3),
            getColumns(4),
          ].map((column, idx) => (
            <section key={idx} className="flex flex-col gap-3">
              {column.map((image, idx) => (
                <span key={idx}>
                <CloudinaryImage
                  imageData={image}
                  tags={image.tags}
                  publicId={image.public_id}
                />
                </span>
              ))}
            </section>
          ))}
        </div>

        {/* <MasnoryGrid imagesResult={imagesResult.resources} /> */}
        {/* <section className="grid md:grid-cols-5 gap-3">
          {imagesResult.resources.map((image, idx) => (
            <article
              key={idx}
              className="flex relative group pb-[15px] transition duration-300 flex-col items-center"
            >
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
          ))}
        </section> */}
      </Container>
    </main>
  );
}
