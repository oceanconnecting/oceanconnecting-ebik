"use client";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

function Footer() {
  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About", href: "/#about" },
        { name: "Services", href: "/#services" },
        { name: "Features", href: "/#features" },
        { name: "Career", href: "/#career" },
        { name: "Opinion", href: "/#opinion" },
        {name: "Contact", href: "/#contact"},
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Contact", href: "/#contact" },
        { name: "FAQ", href: "/faq" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
    { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="bg-white border-t border-gray-100 font-inter">
      <div className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex items-center">
              <h2 className="text-primary-50 font-sora text-2xl">
                e<span className="text-primary-500">.</span>Bike Delivery
              </h2>
            </div>
            <p className="mt-4 max-w-xs text-sm text-text-100/80">
              Fast, eco-friendly delivery solutions for your business. Reliable
              service with zero emissions.
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-text-100/70 hover:text-primary-500 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            {footerLinks.map((category, index) => (
              <div key={index}>
                <p className="font-medium text-text-100">{category.title}</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {category.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-text-100/75 hover:text-primary-500 transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <p className="font-medium text-text-100">Contact</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <MapPin
                    size={18}
                    className="text-primary-500 shrink-0 mt-0.5"
                  />
                  <span className="text-text-100/75">
                    123 Delivery Street, Eco City, 10001
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Phone
                    size={18}
                    className="text-primary-500 shrink-0 mt-0.5"
                  />
                  <span className="text-text-100/75">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mail
                    size={18}
                    className="text-primary-500 shrink-0 mt-0.5"
                  />
                  <span className="text-text-100/75">
                    info@ebikedelivery.com
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-100 pt-6">
          <div className="flex flex-col-reverse gap-4 sm:flex-row sm:justify-between">
            <p className="text-xs text-text-100/70">
              &copy; {new Date().getFullYear()} e.Bike Delivery. All rights
              reserved.
            </p>
            <nav className="flex gap-4 text-xs">
              <a
                href="/privacy"
                className="text-text-100/70 hover:text-primary-500 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-text-100/70 hover:text-primary-500 transition-colors"
              >
                Terms & Conditions
              </a>
              <a
                href="/cookies"
                className="text-text-100/70 hover:text-primary-500 transition-colors"
              >
                Cookies
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
