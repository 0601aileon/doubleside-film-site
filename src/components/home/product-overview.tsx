import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Product } from '@/types/product';
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

export default function ProductOverview({ products }: { products: Product[] }) {
  const t = useTranslations('home.overview');

  return (
    <section className="bg-white">
      <div className="container-custom py-16 md:py-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight">{t('title')}</h2>
          <p className="mt-4 text-muted-foreground">{t('subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group flex flex-col border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="aspect-video bg-muted rounded-lg mb-3 flex items-center justify-center overflow-hidden">
                  <div className="text-4xl text-muted-foreground/30">
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary/20">
                      <rect x="2" y="2" width="20" height="20" rx="2" />
                      <line x1="2" y1="8" x2="22" y2="8" />
                      <line x1="8" y1="2" x2="8" y2="22" />
                      <line x1="16" y1="2" x2="16" y2="22" />
                    </svg>
                  </div>
                </div>
                <CardTitle className="text-lg">{product.name}</CardTitle>
                {product.subtitle && (
                  <CardDescription className="text-sm">{product.subtitle}</CardDescription>
                )}
              </CardHeader>
              <CardContent className="flex-1 space-y-3">
                <div className="flex flex-wrap gap-2">
                  {product.thickness && (
                    <Badge variant="secondary" className="text-xs">
                      <Ruler className="h-3 w-3 mr-1" />
                      {product.thickness}
                    </Badge>
                  )}
                  {product.temperatureResistance && (
                    <Badge variant="secondary" className="text-xs">
                      <Thermometer className="h-3 w-3 mr-1" />
                      {product.temperatureResistance}
                    </Badge>
                  )}
                  {product.shelfLife && (
                    <Badge variant="secondary" className="text-xs">
                      <Calendar className="h-3 w-3 mr-1" />
                      {product.shelfLife}
                    </Badge>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex gap-3">
                <Link href={`/products/${product.slug}`}>
                  <Button variant="outline" size="sm">
                    {t('common.viewDetails', {}) || 'View Details'}
                  </Button>
                </Link>
                <Link href={`/contact?product=${product.slug}`}>
                  <Button size="sm" className="gap-1">
                    {t('common.inquireNow', {}) || 'Inquire Now'}
                    <ArrowRight className="h-3 w-3" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/products">
            <Button variant="outline" className="gap-2">
              View All Products <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
