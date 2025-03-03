import Button from "@/components/Button";
import React from "react";

function Navbar() {
  const NavbarList = [
    { title: "about", link: "" },
    { title: "features", link: "" },
    { title: "services", link: "" },
    { title: "contact", link: "" },
  ];

  return (
    <header className="bg-white border-b border-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block" href="#">
              <span className="sr-only">Home</span>
              <h1 className="text-primary-50 font-sora">
                e<span className="text-primary-500">.</span>Bike Delivery
              </h1>
            </a>
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

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <Button
                variant="primary"
                className="text-sm bg-background-50 hover:bg-background-100"
                href="#"
              >
                Book now
              </Button>
              <Button variant="secondary" className="text-sm" href="#">
                contact
              </Button>
            </div>
          </div>

          <div className="block md:hidden">
            <button className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
