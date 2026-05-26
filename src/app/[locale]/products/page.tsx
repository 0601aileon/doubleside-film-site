import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { getAllProducts } from '@/data/products';
import { localizeProducts } from '@/lib/localize';
import { getAlternates } from '@/lib/seo';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Ruler, Thermometer, Calendar } from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ category?: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'products' });
  return { title: t('title'), description: t('subtitle'), alternates: getAlternates(locale, '/products') };
}

export default async function ProductsPage({ params, searchParams }: Props) {
  const { locale } = await params;
  const sp = await searchParams;
  const t = await getTranslations({ locale, namespace: 'products' });
  const ct = await getTranslations({ locale, namespace: 'common' });
  const products = localizeProducts(await getAllProducts(), locale);
  const filtered = sp.category
    ? products.filter((p) => p.category === sp.category)
    : products;

  return (
    <div className="container-custom py-12 md:py-16">
      <div className="max-w-2xl mb-10">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{t('title')}</h1>
        <p className="mt-3 text-muted-foreground text-lg">{t('subtitle')}</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((product) => (
          <Card key={product.id} className="group flex flex-col border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="aspect-video bg-muted rounded-lg mb-3 flex items-center justify-center">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary/20">
                  <rect x="2" y="2" width="20" height="20" rx="2" />
                  <line x1="2" y1="8" x2="22" y2="8" />
                </svg>
              </div>
              <CardTitle className="text-lg">{product.name}</CardTitle>
              {product.subtitle && (
                <CardDescription>{product.subtitle}</CardDescription>
              )}
            </CardHeader>
            <CardContent className="flex-1">
              <div className="flex flex-wrap gap-2">
                {product.thickness && (
                  <Badge variant="secondary" className="text-xs">
                    <Ruler className="h-3 w-3 mr-1" /> {product.thickness}
                  </Badge>
                )}
                {product.temperatureResistance && (
                  <Badge variant="secondary" className="text-xs">
                    <Thermometer className="h-3 w-3 mr-1" /> {product.temperatureResistance}
                  </Badge>
                )}
                {product.shelfLife && (
                  <Badge variant="secondary" className="text-xs">
                    <Calendar className="h-3 w-3 mr-1" /> {product.shelfLife}
                  </Badge>
                )}
              </div>
            </CardContent>
            <CardFooter className="flex gap-3">
              <Link href={`/products/${product.slug}`}>
                <Button variant="outline" size="sm">{ct('viewDetails')}</Button>
              </Link>
              <Link href={`/contact?product=${product.slug}`}>
                <Button size="sm" className="gap-1">
                  {ct('inquireNow')} <ArrowRight className="h-3 w-3" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
