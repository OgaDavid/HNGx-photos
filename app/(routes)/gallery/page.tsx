import Container from "@/components/ui/container";
import type { Metadata } from "next";
import Gallery from "@/components/Gallery/gallery";

export const metadata: Metadata = {
  title: "Gallery | Photos",
  description: "Check out your Gallery.",
};

export default function GalleryPage() {
  return (
    <main>
      <Container>
        <Gallery />
      </Container>
    </main>
  );
}
