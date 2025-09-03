export const loader = () => {
  const sitemap: { loc: string; lastmod: string; priority: number }[] = [];
  const content = `
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemap.map(objectToSitemap).join('\n')}
</urlset>`;
  // Return the response with the content, a status 200 message, and the appropriate headers for an XML page
  return new Response(content, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'xml-version': '1.0',
      encoding: 'UTF-8',
    },
  });
};

const objectToSitemap = (object: {
  loc: string;
  lastmod: string;
  priority: number;
}) => {
  return `
    <url>
        <loc>${object.loc}</loc>
        <lastmod>${object.lastmod}</lastmod>
        <priority>${object.priority}</priority>
    </url>
  `;
};
