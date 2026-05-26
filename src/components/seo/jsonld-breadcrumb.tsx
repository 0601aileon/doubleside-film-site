import { siteConfig } from '@/lib/constants';

type BreadcrumbItem = {
  name: string;
  path: string;
};

export default function JsonLdBreadcrumb({
  items,
  locale,
}: {
  items: BreadcrumbItem[];
  locale: string;
}) {
  const baseUrl = siteConfig.url.replace(/\/$/, '');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${baseUrl}/${locale}${item.path}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
