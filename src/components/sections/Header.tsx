"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { content } from "@/lib/content";
import { useState } from "react";
import { SkepsisLogo } from "../SkepsisLogo";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8 lg:px-12">
      {/* Logo Section */}
      <div className="flex items-center gap-4">
        <SkepsisLogo />
      </div>

      {/* Navigation Section */}
      <nav
        className={`${
          isMenuOpen ? "flex bg-white" : "hidden"
        } absolute top-20 left-0 w-full md:static md:flex md:w-auto md:gap-8 items-center flex-col md:flex-row transition-all duration-300 ease-in-out shadow-md md:shadow-none z-50`}
      >
        {content.header.navItems.map((item) => (
          <Link
            key={item}
            href={"#"}
            className="text-sm font-medium capitalize text-gray-900 hover:text-gray-600 transition-colors duration-200 ease-in-out py-2 md:py-0 px-4 md:px-0"
          >
            {item}
          </Link>
        ))}
      </nav>

      {/* Call-to-Action Button */}
      <div className="hidden md:block">
        <Button
          variant="secondary"
          className="text-black border-black border-[1px] hover:bg-black/90 rounded-3xl hover:text-white hover:scale-105 hover:opacity-90 transition-transform duration-400 ease-in-out"
        >
          {content.header.cta}
        </Button>
      </div>

      {/* Hamburger Menu for Mobile */}
      <button
        className="md:hidden flex flex-col gap-1 justify-center items-center w-6 h-6"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle Menu"
      >
        <span
          className={`h-1 w-full bg-black transition-all duration-300 ease-in-out ${
            isMenuOpen ? "rotate-45 translate-y-[6px]" : ""
          }`}
        ></span>
        <span
          className={`h-1 w-full bg-black transition-all duration-300 ease-in-out ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`h-1 w-full bg-black transition-all duration-300 ease-in-out ${
            isMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""
          }`}
        ></span>
      </button>
    </header>
  );
}
