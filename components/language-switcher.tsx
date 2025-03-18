"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useRef, useEffect, startTransition } from "react";
import { ChevronDown, Check, Globe } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { useLocale } from "next-intl";
import "flag-icons/css/flag-icons.min.css";
import { AnimatePresence, motion } from "motion/react";

type Language = {
  code: string;
  name: string;
  flagCode: string;
};

const languages: Language[] = [
  { code: "en", name: "English", flagCode: "gb" },
  { code: "fr", name: "Français", flagCode: "fr" },
  { code: "zh", name: "Chinese", flagCode: "cn" },
  { code: "de", name: "Deutsch", flagCode: "de" },
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const currentRoute = usePathname();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Extract the current language from the pathname
  const currentLangCode = pathname.split("/")[1] || "en";

  // Handle language change and redirect
  const changeLanguage = (langCode: string) => {
    const newLocale = langCode;

    if (newLocale !== locale) {
      startTransition(() => {
        const newPath = currentRoute.replace(`/${locale}`, `/${newLocale}`);
        router.replace(newPath);
      });
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex rounded-full font-inter border-background-900 text-button px-3 ring-accent-500 py-2.5 h-fit w-fit transition items-center gap-2 border text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe className="h-4 w-4 text-gray-500" />
        <ChevronDown
          className={cn(
            "h-4 w-4 text-gray-500 transition-transform",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute overflow-hidden right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-background-800 ring-opacity-5 focus:outline-none"
          >
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => changeLanguage(language.code)}
                className={cn(
                  "flex w-full items-center gap-3 px-4 py-2 text-left text-sm hover:bg-gray-100",
                  language.code === currentLangCode
                    ? "bg-gray-50 text-primary"
                    : "text-gray-700"
                )}
              >
                <span
                  className={`fi fi-${language.flagCode} h-4 w-6 rounded-md`}
                ></span>
                <span>{language.name}</span>
                {language.code === currentLangCode && (
                  <Check className="ml-auto h-4 w-4 text-primary-200" />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
