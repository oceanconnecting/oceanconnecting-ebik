"use client";

import Button from "@/components/Button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/language-switcher";

function Navbar() {
  const t = useTranslations("navbar");
  const locale = useLocale();

  const NavbarList = [
    { title: t("features"), link: `/${locale}#features` },
    { title: t("services"), link: `/${locale}#services` },
    { title: t("career"), link: `/${locale}#career` },
    { title: t("about"), link: `/${locale}#about` },
    { title: t("goals"), link: `/${locale}#goals` },
    { title: t("opinion"), link: `/${locale}#opinion` },
  ];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-lg font-inter z-50 fixed w-full border-b border-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center gap-0 md:gap-12">
          <div className="md:flex flex-1 md:flex-none md:items-center md:gap-12">
            <Link className="block" href="/#home">
              <Image
                src={"/LOGISTOCEAN-logo.svg"}
                alt={""}
                width={85}
                height={85}
                className="w-18"
              />
            </Link>
          </div>

          <div className="hidden md:block flex-1">
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
          <div className="flex items-center gap-2">
            <Button
              variant="primary"
              className="text-sm bg-background-50 hover:bg-background-100"
              href="/#contact"
            >
              {t("contact")}
            </Button>
            <LanguageSwitcher />
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
