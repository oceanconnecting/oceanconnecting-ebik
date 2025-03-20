import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'http://logistocean.de';
  const locales = ['en', 'fr', 'de', 'zh'];
  const paths = ['', '#features', '#services', '#about', '#career', '#contact'];

  const urls = locales.flatMap(locale =>
    paths.map(
      path =>
        `<url><loc>${baseUrl}/${locale}${path ? `/${path}` : ''}</loc></url>`
    )
  );

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
