import { siteConfig } from '@/lib/constants';

export default function JsonLdArticle({
  title,
  description,
  datePublished,
  author,
  slug,
  locale,
}: {
  title: string;
  description: string;
  datePublished: string;
  author?: string;
  slug: string;
  locale: string;
}) {
  const baseUrl = siteConfig.url.replace(/\/$/, '');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    author: {
      '@type': 'Person',
      name: author || 'SHL Chem Technical Team',
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    datePublished,
    url: `${baseUrl}/${locale}/blog/${slug}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/${locale}/blog/${slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
