import Container from "@/components/ui/container";
import cloudinary from "cloudinary";
import MasnoryGrid from "./components/masnory-grid";

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
        <MasnoryGrid imagesResult={imagesResult.resources} />
      </Container>
    </main>
  );
}
