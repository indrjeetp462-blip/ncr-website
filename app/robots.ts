export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://ncr-website.vercel.app/sitemap.xml',
  }
}
