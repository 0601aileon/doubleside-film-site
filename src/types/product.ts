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
  nameZh?: string;
  subtitle?: string;
  subtitleZh?: string;
  description?: string;
  descriptionZh?: string;
  category: string;
  categoryNameZh?: string;
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
  featuresZh?: string[];
  applications: string[];
  isFeatured: boolean;
  sortOrder: number;
}

export interface ProductCategory {
  id: number;
  slug: string;
  name: string;
  nameZh?: string;
  description?: string;
  descriptionZh?: string;
  image?: string;
}
