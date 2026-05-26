import { siteConfig } from '@/lib/constants';

export default function JsonLdOrganization() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      addressCountry: siteConfig.address.country,
      postalCode: siteConfig.address.zip,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: siteConfig.links.email,
      telephone: siteConfig.links.phone,
      contactType: 'sales',
    },
    sameAs: [
      siteConfig.links.linkedin,
      siteConfig.links.youtube,
    ].filter(Boolean),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
