import { siteConfig } from '@/lib/constants';
import type { Product } from '@/types/product';

export default function JsonLdProduct({
  product,
  locale,
}: {
  product: Product;
  locale: string;
}) {
  const baseUrl = siteConfig.url.replace(/\/$/, '');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.subtitle || product.description?.slice(0, 200),
    category: product.categoryNameZh || product.category.replace('-', ' '),
    url: `${baseUrl}/${locale}/products/${product.slug}`,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceSpecification: {
        '@type': 'PriceSpecification',
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
