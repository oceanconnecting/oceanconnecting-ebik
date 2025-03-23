import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "http://logistocean.de";
  const locales = ["en", "fr", "de", "zh"];

  const urls = locales.flatMap(
    (locale) => `<url><loc>${baseUrl}/${locale}</loc></url>`
  );

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
