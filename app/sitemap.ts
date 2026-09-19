export default function sitemap() {
  const base = 'https://ncr-website.vercel.app';
  const areas = [
    'indirapuram','vaishali','kaushambi','vasundhara','raj-nagar',
    'noida-sector-62','noida-sector-50','noida-sector-18',
    'laxmi-nagar','patel-nagar','shahdara','mayur-vihar',
    'preet-vihar','ip-extension','ghaziabad','noida'
  ];
  return [
    { url: base, lastModified: new Date() },
    ...areas.map((a) => ({ url: `${base}/${a}`, lastModified: new Date() }))
  ];
}
