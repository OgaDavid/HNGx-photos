import Container from "@/components/ui/container";
import cloudinary from "cloudinary";
import MasnoryGrid from "../components/masnory-grid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Favorites | Photos",
  description: "Check out your favourites.",
};

export default async function FavoritesPage() {
  // get images from Cloudinary
  const favoritesResult = (await cloudinary.v2.search
    .expression("resource_type:image AND folder=photos AND tags=favorite")
    .sort_by("public_id", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: ImageResult[] }


  return (
    <main>
      <Container>
        <span>
          <h1 className="text-base py-5 md:text-xl font-semibold">
            Showing {favoritesResult.resources.length} images.
          </h1>
        </span>
        <MasnoryGrid imagesResult={favoritesResult.resources} />
      </Container>
    </main>
  );
}
