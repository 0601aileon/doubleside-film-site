export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    email: string;
    phone: string;
    whatsapp?: string;
    linkedin?: string;
    youtube?: string;
    alibaba?: string;
  };
  address: {
    street: string;
    city: string;
    state: string;
    country: string;
    zip: string;
  };
}
