"use client";

import React, { useState } from "react";
import Container from "../ui/container";
import Logo from "./logo";
import UserAvatar from "./avatar";
import Link from "next/link";
import Hamburger from "./hamburger";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  function openNavigation() {
    setIsOpen(!isOpen);
  }
  function closeNavigation() {
    setIsOpen(false);
  }
  return (
    <>
      <header
        className={cn(
          "fixed w-full md:shadow-md py-3 md:py-4",
          !isOpen && "border-b shadow-sm border-b-gray-200 "
        )}
      >
        <Container>
          <span className="flex items-center justify-between">
            <div className="flex items-center gap-7">
              <Logo />
              <nav className="max-md:hidden">
                <ul className="flex items-center text-sm font-medium gap-4">
                  <li>
                    <Link
                      className="hover:text-[#103FEF] text-[#202124] flex items-start gap-[2px] transition duration-300"
                      href="/gallery"
                    >
                      Gallery
                      <ArrowUpRight className="w-3 h-3"/>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-[#103FEF] text-[#202124] flex items-start gap-[2px] transition duration-300"
                      href="/upload"
                    >
                      Upload
                      <ArrowUpRight className="w-3 h-3"/>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex items-center gap-10">
              <span className="flex gap-2 max-md:hidden items-center">
                <Link
                  className="py-2 transition duration-200 font-medium text-sm px-6 hover:bg-gray-100 rounded-[4px]"
                  href="/sign-in"
                >
                  Login
                </Link>
                <Link
                  className="py-2 transition duration-200 font-medium text-white bg-[#103FEF] text-sm px-6 hover:bg-opacity-60 rounded-[4px]"
                  href="/sign-up"
                >
                  Sign up
                </Link>
              </span>
              <div className="flex gap-5 justify-center items-center">
                <UserAvatar />
                <span onClick={openNavigation} className="md:hidden mb-2">
                  <Hamburger open={isOpen} />
                </span>
              </div>
            </div>
          </span>
        </Container>

        {/* MOBILE NAVIGATION */}
        <Container>
          <div className="bg-white shadow-md rounded-lg transition duration-150">
            <div className={cn(isOpen ? "block" : "hidden", "pl-4")}>
              <nav>
                <ul className="text-sm py-10 flex flex-col items-start gap-5 font-medium">
                  <li>
                    <Link
                      className="text-[#103FEF] border-b flex items-start gap-[2px] transition duration-300"
                      href="/gallery"
                    >
                      Gallery
                      <ArrowUpRight className="w-3 h-3"/>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[#103FEF] flex items-start gap-[2px] transition duration-300"
                      href="/upload"
                    >
                      Upload
                      <ArrowUpRight className="w-3 h-3"/>
                    </Link>
                  </li>
                </ul>
              </nav>
              <span className="flex pb-5 gap-2 justify-center">
                <Link
                  className="py-2 transition duration-200 font-medium text-sm px-6 hover:bg-gray-100 rounded-[4px]"
                  href="/sign-in"
                >
                  Login
                </Link>
                <Link
                  className="py-2 transition duration-200 font-medium text-white bg-[#103FEF] text-sm px-6 hover:bg-opacity-60 rounded-[4px]"
                  href="/sign-up"
                >
                  Sign up
                </Link>
              </span>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
}
