"use client";
import React, { useState, useEffect } from "react";

// components
import Logo from "./Logo";
import ThemeToggler from "./ThemeToggler";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";
import Search from "./Search";

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();
  const [active, setActive] = useState(null);

  useEffect(() => {
    const scrollYPos = window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });

    // remove event
    return () => window.removeEventListener("scroll", scrollYPos);
  });

  return (
    <header
      className={`${
        header
          ? "bg-white py-4 shadow-lg dark:bg-accent"
          : "py-6 dark:bg-transparent"
      } sticky top-0 z-30 transition-all ${pathname === "/" && "bg-[#def0ff]"}`}
    >
      <div className="mx-auto w-full px-4 md:container md:px-0">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <Logo />
          </div>
          <div className="ml-0 mr-4 flex-none md:ml-20 md:mr-0 md:flex-1">
            <Search />
          </div>
          <div className="flex items-center gap-x-6">
            <Nav
              containerStyles="hidden xl:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
              setActive={() => {
                setActive(null);
              }}
            />
            <ThemeToggler />

            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
