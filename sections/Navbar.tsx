"use client";

import Button from "@/components/Button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

function Navbar() {
  const NavbarList = [
    { title: "features", link: "/#features" },
    { title: "services", link: "/#services" },
    { title: "about", link: "/#about" },
    { title: "contact", link: "/#contact" },
  ];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-lg font-inter z-50 fixed w-full border-b border-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex flex-1 md:flex-none md:items-center md:gap-12">
            <Link className="block" href="/#home">
              <span className="sr-only">Home</span>
              <h1 className="text-primary-50 font-sora">
                e<span className="text-primary-500">.</span>Bike Delivery
              </h1>
            </Link>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                {NavbarList.map((item, index) => (
                  <li key={index}>
                    <a
                      className="text-text-100 transition hover:text-text-100/75"
                      href={item.link}
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex items-center gap-4 md:mr-0 mr-4">
            <div className="sm:flex sm:gap-4">
              <Button
                variant="primary"
                className="text-sm bg-background-50 hover:bg-background-100"
                href="#"
              >
                Book now
              </Button>

              <div className="hidden sm:flex">
                <Button
                  variant="secondary"
                  className="text-sm hidden sm:block"
                  href="/#contact"
                >
                  contact
                </Button>
              </div>
            </div>
          </div>

          <div className="block md:hidden">
            <button
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              className="rounded-sm p-2 text-text-100 transition hover:text-gray-600/75"
            >
              {isDropdownOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {isDropdownOpen && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              className="block lg:hidden overflow-hidden w-full h-fit"
            >
              <div className="flex items-center flex-col gap-6 mb-6">
                {NavbarList.map((item, index) => (
                  <div key={index}>
                    <Link
                      className="text-text-100 transition hover:text-text-100/75"
                      href={item.link}
                    >
                      {item.title}
                    </Link>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

export default Navbar;
