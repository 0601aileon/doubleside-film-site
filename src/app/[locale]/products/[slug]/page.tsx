import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import { localizeProduct } from '@/lib/localize';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { CheckCircle, ArrowRight, Download, FileText, Ruler, Thermometer, Calendar, Droplets } from 'lucide-react';
import InquiryForm from '@/components/shared/inquiry-form';

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return { title: 'Product Not Found' };
  const localized = localizeProduct(product, locale);
  return {
    title: localized.name,
    description: localized.subtitle || localized.description?.slice(0, 160),
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  const t = await getTranslations({ locale, namespace: 'products' });
  const ct = await getTranslations({ locale, namespace: 'common' });
  const localized = localizeProduct(product, locale);
  const relatedProducts = (await getRelatedProducts(product.id)).map((rp) => localizeProduct(rp, locale));

  const specIcons: Record<string, React.ReactNode> = {
    'products.specs.thickness': <Ruler className="h-4 w-4" />,
    'products.specs.width': <Ruler className="h-4 w-4" />,
    'products.specs.adhesiveStrength': <Droplets className="h-4 w-4" />,
    'products.specs.temperatureResistance': <Thermometer className="h-4 w-4" />,
    'products.specs.shelfLife': <Calendar className="h-4 w-4" />,
    'products.specs.poreSize': <Droplets className="h-4 w-4" />,
    'products.specs.breathability': <Droplets className="h-4 w-4" />,
  };

  const specLabel = (key: string) => {
    const parts = key.split('.');
    if (parts.length >= 3) {
      const ns = parts.slice(0, -1).join('.');
      const k = parts[parts.length - 1];
      // Use the translation system - try to get from messages
      return t(`specs.${k}` as any);
    }
    return parts.pop();
  };

  return (
    <div className="container-custom py-12 md:py-16">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">{ct('backToHome')}</Link>
        <span>/</span>
        <Link href="/products" className="hover:text-foreground">{t('title')}</Link>
        <span>/</span>
        <span className="text-foreground">{localized.name}</span>
      </nav>

      <div className="grid lg:grid-cols-5 gap-10">
        {/* Main Content - 3 columns */}
        <div className="lg:col-span-3 space-y-10">
          {/* Image Gallery */}
          <div className="aspect-video bg-muted rounded-xl flex items-center justify-center">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary/20">
              <rect x="2" y="2" width="20" height="20" rx="2" />
              <line x1="2" y1="8" x2="22" y2="8" />
              <line x1="8" y1="2" x2="8" y2="22" />
            </svg>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{localized.name}</h1>
            {localized.subtitle && (
              <p className="mt-2 text-lg text-muted-foreground">{localized.subtitle}</p>
            )}
            <div className="flex flex-wrap gap-2 mt-4">
              <Badge variant="secondary">{product.categoryNameZh || product.category.replace('-', ' ')}</Badge>
              {product.applications.map((app) => (
                <Badge key={app} variant="outline" className="capitalize">{app.replace('-', ' ')}</Badge>
              ))}
            </div>
          </div>

          {/* Description */}
          {localized.description && (
            <div className="prose prose-sm max-w-none text-muted-foreground">
              {localized.description.split('\n\n').map((para, i) => (
                <p key={i} className="mb-4 leading-relaxed">{para}</p>
              ))}
            </div>
          )}

          {/* Key Specs Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {product.specifications.slice(0, 6).map((spec) => (
              <div key={spec.key} className="bg-muted/50 rounded-lg p-4 text-center">
                <div className="flex justify-center mb-2 text-primary">
                  {specIcons[spec.key] || <Ruler className="h-4 w-4" />}
                </div>
                <p className="text-xs text-muted-foreground mb-1">{specLabel(spec.key)}</p>
                <p className="text-sm font-semibold">{spec.value}</p>
              </div>
            ))}
          </div>

          {/* Full Spec Table */}
          <div>
            <h2 className="text-xl font-semibold mb-4">{t('specifications')}</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{t('specs.thickness') ? 'Property' : 'Property'}</TableHead>
                  <TableHead>Value</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {product.specifications.map((spec) => (
                  <TableRow key={spec.key}>
                    <TableCell className="font-medium">{specLabel(spec.key)}</TableCell>
                    <TableCell>{spec.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-xl font-semibold mb-4">{t('features')}</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {localized.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Download */}
          {product.datasheetPdf && (
            <div className="bg-muted/30 rounded-lg p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileText className="h-8 w-8 text-primary" />
                <div>
                  <p className="font-semibold text-sm">{t('details')}</p>
                  <p className="text-xs text-muted-foreground">PDF</p>
                </div>
              </div>
              <a
                href={product.datasheetPdf}
                download
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-input bg-background h-7 px-2.5 text-sm font-medium whitespace-nowrap transition-all hover:bg-muted hover:text-foreground"
              >
                <Download className="h-4 w-4" /> {ct('viewDetails')}
              </a>
            </div>
          )}

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">{t('relatedProducts')}</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {relatedProducts.map((rp) => (
                  <Link key={rp.id} href={`/products/${rp.slug}`}>
                    <Card className="hover:shadow-md transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-sm">{rp.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-xs text-muted-foreground line-clamp-2">{rp.subtitle}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar - 2 columns */}
        <div className="lg:col-span-2">
          <div className="lg:sticky lg:top-24 space-y-6">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-lg">{ct('requestQuote')}</CardTitle>
                <CardDescription>Fill in your details and we&apos;ll get back to you within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent>
                <InquiryForm productName={localized.name} productId={product.id} />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Quick Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t('filter.title')}</span>
                  <span className="font-medium">{product.categoryNameZh || product.category.replace('-', ' ')}</span>
                </div>
                {product.shelfLife && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('specs.shelfLife')}</span>
                    <span className="font-medium">{product.shelfLife}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Samples</span>
                  <span className="font-medium text-emerald-600">Available</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
