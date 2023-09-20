import Container from "@/components/ui/container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Favorites | Photos",
  description: "Check out your favourites.",
};

export default function FavoritesPage() {
  return (
    <main>
      <Container>
        <span>
          <h1 className="text-base py-5 md:text-xl font-semibold">
            Showing favorites
          </h1>
        </span>
      </Container>
    </main>
  );
}
