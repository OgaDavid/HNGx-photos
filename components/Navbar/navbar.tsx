import React from "react";
import Container from "../ui/container";
import Logo from "./logo";
import UserAvatar from "./avatar";
import Link from "next/link";
import Hamburger from "./hamburger";

export default function Navbar() {
  return (
    <nav className="border-b border-b-gray-200 shadow-sm md:shadow-md py-4">
      <Container>
        <span className="flex items-center justify-between">
          <div className="flex items-center gap-7">
            <Logo />
            <span className="max-md:hidden">
              <ul className="flex items-center text-sm font-medium gap-4">
                <li>
                  <Link
                    className="hover:text-[#103FEF] transition duration-300"
                    href="/gallery"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-[#103FEF] transition duration-300"
                    href="/upload"
                  >
                    Upload
                  </Link>
                </li>
              </ul>
            </span>
          </div>
          <div className="flex items-center gap-10">
            <span className="flex gap-2 max-md:hidden items-center">
              <Link
                className="py-[6px] transition duration-200 font-medium text-sm px-5 hover:bg-gray-100 rounded-full "
                href="/sign-in"
              >
                Login
              </Link>
              <Link
                className="py-[6px] transition duration-200 font-medium text-white bg-[#103FEF] text-sm px-5 hover:bg-opacity-60 rounded-full "
                href="/sign-up"
              >
                Sign up
              </Link>
            </span>
            <div className="flex gap-5 items-center">
              <UserAvatar />
              <span className="md:hidden">
                <Hamburger open={false} />
              </span>
            </div>
          </div>
        </span>
      </Container>
    </nav>
  );
}
