import Container from "@/components/ui/container";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="waves max-md:h-[100vh] relative pt-[61px]">
      <Container>
        <div className="flex justify-end">
          <Image
            className="w-[150px]"
            src="/images/paper-airplane.png"
            alt="paper airplane"
            width={200}
            height={94}
          />
        </div>
        <div className="mt-20 flex flex-col justify-center items-center text-center">
          <h1 className="text-[#202124] max-w-[600px] text-4xl md:text-6xl font-medium">
            The home for your memories.
          </h1>
          <span>
            <Link
              className="py-3 transition duration-200 mt-8 flex items-center gap-2 font-medium text-white bg-[#103FEF] text-sm px-6 hover:bg-opacity-60 rounded-[4px]"
              href="/sign-up"
            >
              Go to Gallery
              <ArrowRight className="w-4 h-4" />
            </Link>
          </span>
        </div>
        <div>
          <Image
            className="flex-start max-md:mt-10 max-md:w-[120px] w-[150px]"
            alt="throw"
            src="/images/throw-airplane.png"
            width={200}
            height={506}
          />
        </div>
      </Container>
    </main>
  );
}
