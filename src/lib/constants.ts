export const siteConfig = {
  name: 'Silicone Gel Film',
  description: 'Professional manufacturer of double-sided silicone gel perforated film for medical and industrial applications.',
  url: 'https://shlchem.com',
  ogImage: '/images/og/default.jpg',
  links: {
    email: '1261457858@qq.com',
    phone: '+86-XXX-XXXXXXX',
    whatsapp: '+86-XXX-XXXXXXX',
    linkedin: '#',
    youtube: '#',
    alibaba: '#',
  },
  address: {
    street: 'XXX Industrial Park',
    city: 'Shenzhen',
    state: 'Guangdong',
    country: 'China',
    zip: '518000',
  },
};

export const navLinks = [
  { label: 'nav.home', href: '/' },
  { label: 'nav.products', href: '/products' },
  { label: 'nav.applications', href: '/applications' },
  { label: 'nav.about', href: '/about' },
  { label: 'nav.faq', href: '/faq' },
  { label: 'nav.blog', href: '/blog' },
  { label: 'nav.contact', href: '/contact' },
] as const;

export const locales = ['en', 'zh', 'es', 'de'] as const;
export type Locale = (typeof locales)[number];
