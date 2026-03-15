export default function sitemap() {
  const base = 'https://www.piersday.com';

  return [
    { url: base,                              lastModified: new Date(), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/about`,                   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services`,                lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/services/anxiety`,        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/stop-smoking`,   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/weight-loss`,    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/confidence`,     lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blog`,                    lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${base}/shop`,                    lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${base}/testimonials`,            lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contact`,                 lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
  ];
}
