import { Product, ProductCategory } from '@/types/product';
import { FAQ } from '@/types/faq';
import { Application } from '@/types/application';

export function localizeProduct(product: Product, locale: string): Product {
  if (locale !== 'zh') return product;
  return {
    ...product,
    name: product.nameZh ?? product.name,
    subtitle: product.subtitleZh ?? product.subtitle,
    description: product.descriptionZh ?? product.description,
    features: product.featuresZh ?? product.features,
  };
}

export function localizeProducts(products: Product[], locale: string): Product[] {
  return products.map((p) => localizeProduct(p, locale));
}

export function localizeCategory(cat: ProductCategory, locale: string): ProductCategory {
  if (locale !== 'zh') return cat;
  return {
    ...cat,
    name: cat.nameZh ?? cat.name,
    description: cat.descriptionZh ?? cat.description,
  };
}

export function localizeFAQ(faq: FAQ, locale: string): FAQ {
  if (locale !== 'zh') return faq;
  return {
    ...faq,
    question: faq.questionZh ?? faq.question,
    answer: faq.answerZh ?? faq.answer,
  };
}

export function localizeFAQs(faqs: FAQ[], locale: string): FAQ[] {
  return faqs.map((f) => localizeFAQ(f, locale));
}

export function localizeApplication(app: Application, locale: string): Application {
  if (locale !== 'zh') return app;
  return {
    ...app,
    title: app.titleZh ?? app.title,
    subtitle: app.subtitleZh ?? app.subtitle,
    description: app.descriptionZh ?? app.description,
    processSteps: app.processSteps?.map((step) => ({
      title: step.titleZh ?? step.title,
      description: step.descriptionZh ?? step.description,
    })),
  };
}

export function localizeApplications(apps: Application[], locale: string): Application[] {
  return apps.map((a) => localizeApplication(a, locale));
}
