import Container from "@/components/ui/container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Favorites | Photos",
  description: "Check out your favorites.",
};

export default function FavoritesPage() {
  return (
    <main>
      <Container>
        <span className="flex items-center justify-center py-20">
          <h1 className="text-2xl py-5 font-semibold">
            🙌 Feature coming Soon!
          </h1>
        </span>
      </Container>
    </main>
  );
}
