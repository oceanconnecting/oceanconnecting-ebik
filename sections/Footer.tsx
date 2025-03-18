"use client";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { useTranslations } from "next-intl"; // Import useTranslations

function Footer() {
  const t = useTranslations(); // Initialize the translation function

  const footerLinks = [
    {
      title: t("footer.companyTitle"),
      links: [
        { name: t("footer.about"), href: "/#about" },
        { name: t("footer.services"), href: "/#services" },
        { name: t("footer.features"), href: "/#features" },
        { name: t("footer.career"), href: "/#career" },
        { name: t("footer.opinion"), href: "/#opinion" },
        { name: t("footer.contact"), href: "/#contact" },
      ],
    },
    {
      title: t("footer.supportTitle"),
      links: [
        { name: t("footer.contact"), href: "/#contact" },
        { name: t("footer.faq"), href: "/faq" },
        { name: t("footer.privacyPolicy"), href: "/privacy" },
        { name: t("footer.termsOfService"), href: "/terms" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, href: "#", label: t("footer.facebook") },
    { icon: <Instagram size={20} />, href: "#", label: t("footer.instagram") },
    { icon: <Twitter size={20} />, href: "#", label: t("footer.twitter") },
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
              {t("footer.description")}
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
              <p className="font-medium text-text-100">
                {t("footer.contactTitle")}
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <MapPin
                    size={18}
                    className="text-primary-500 shrink-0 mt-0.5"
                  />
                  <span className="text-text-100/75">
                    {t("footer.address")}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Phone
                    size={18}
                    className="text-primary-500 shrink-0 mt-0.5"
                  />
                  <span className="text-text-100/75">{t("footer.phone")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mail
                    size={18}
                    className="text-primary-500 shrink-0 mt-0.5"
                  />
                  <span className="text-text-100/75">{t("footer.email")}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-100 pt-6">
          <div className="flex flex-col-reverse gap-4 sm:flex-row sm:justify-between">
            <p className="text-xs text-text-100/70">
              &copy; {new Date().getFullYear()} e.Bike Delivery.{" "}
              {t("footer.allRightsReserved")}
            </p>
            <nav className="flex gap-4 text-xs">
              <a
                href="/privacy"
                className="text-text-100/70 hover:text-primary-500 transition-colors"
              >
                {t("footer.privacyPolicy")}
              </a>
              <a
                href="/terms"
                className="text-text-100/70 hover:text-primary-500 transition-colors"
              >
                {t("footer.termsConditions")}
              </a>
              <a
                href="/cookies"
                className="text-text-100/70 hover:text-primary-500 transition-colors"
              >
                {t("footer.cookies")}
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
