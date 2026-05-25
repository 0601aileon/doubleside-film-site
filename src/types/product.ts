export interface ProductImage {
  url: string;
  alt: string;
  caption?: string;
}

export interface ProductSpec {
  key: string;
  value: string;
  unit?: string;
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  subtitle?: string;
  description?: string;
  category: string;
  thickness?: string;
  width?: string;
  length?: string;
  adhesiveStrength?: string;
  temperatureResistance?: string;
  shelfLife?: string;
  poreSize?: string;
  breathability?: string;
  specifications: ProductSpec[];
  images: ProductImage[];
  datasheetPdf?: string;
  videoUrl?: string;
  features: string[];
  applications: string[];
  isFeatured: boolean;
  sortOrder: number;
}

export interface ProductCategory {
  id: number;
  slug: string;
  name: string;
  description?: string;
  image?: string;
}
