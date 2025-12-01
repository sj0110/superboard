const fs = require('fs')
const path = require('path')

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yoursite.com/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`

fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemap)
console.log('Sitemap generated successfully!')

