import GalleryHeader from "@/components/header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <GalleryHeader />
      {children}
    </div>
  );
}
