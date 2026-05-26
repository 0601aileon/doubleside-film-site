import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/constants';
import { getAllProducts } from '@/data/products';
import { getApplications } from '@/data/applications';

const locales = ['en', 'zh', 'es', 'de'] as const;
const baseUrl = siteConfig.url.replace(/\/$/, '');

const blogSlugs = [
  'understanding-silicone-gel-perforated-film',
  'choosing-the-right-adhesive-film-foam-dressing',
  'silicone-gel-vs-acrylic-adhesive-wound-care',
  'quality-control-standards-silicone-gel-film',
  'custom-perforation-patterns-silicone-film',
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = [];
  const today = new Date();

  const staticPages = [
    { path: '', priority: 1.0, changeFreq: 'monthly' as const },
    { path: '/products', priority: 0.9, changeFreq: 'monthly' as const },
    { path: '/applications', priority: 0.8, changeFreq: 'monthly' as const },
    { path: '/about', priority: 0.7, changeFreq: 'monthly' as const },
    { path: '/faq', priority: 0.7, changeFreq: 'monthly' as const },
    { path: '/blog', priority: 0.8, changeFreq: 'weekly' as const },
    { path: '/contact', priority: 0.6, changeFreq: 'yearly' as const },
  ];

  for (const locale of locales) {
    for (const page of staticPages) {
      entries.push({
        url: `${baseUrl}/${locale}${page.path}`,
        lastModified: today,
        changeFrequency: page.changeFreq,
        priority: page.priority,
      });
    }
  }

  const products = await getAllProducts();
  for (const locale of locales) {
    for (const product of products) {
      entries.push({
        url: `${baseUrl}/${locale}/products/${product.slug}`,
        lastModified: today,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      });
    }
  }

  const applications = await getApplications();
  for (const locale of locales) {
    for (const app of applications) {
      entries.push({
        url: `${baseUrl}/${locale}/applications/${app.slug}`,
        lastModified: today,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      });
    }
  }

  for (const locale of locales) {
    for (const slug of blogSlugs) {
      entries.push({
        url: `${baseUrl}/${locale}/blog/${slug}`,
        lastModified: today,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      });
    }
  }

  return entries;
}
