import Container from "@/components/ui/container";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <main className="waves relative pt-[61px]">
      <Container>
        <div className="mt-20 flex flex-col justify-center items-center text-center">
          <h1 className="text-[#202124] max-w-[600px] text-3xl md:text-6xl font-medium">
            The home for your memories.
          </h1>
          <span>
            <Link
              className="py-3 transition duration-200 mt-5 flex items-center gap-2 font-medium text-white bg-[#103FEF] text-sm px-6 hover:bg-opacity-60 rounded-[4px]"
              href="/sign-up"
            >
              Go to Gallery
              <ArrowRight className="w-4 h-4" />
            </Link>
          </span>
        </div>
      </Container>
    </main>
  );
}
