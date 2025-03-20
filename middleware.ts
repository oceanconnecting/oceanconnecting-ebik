import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware({
  locales: ["de", "fr", "en" , "zh"],
  defaultLocale: "de",
  localeDetection: false,
 });

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(de|fr|en|zh)/:path*"],
};
