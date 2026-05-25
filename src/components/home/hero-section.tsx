'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield } from 'lucide-react';

export default function HeroSection() {
  const t = useTranslations('home.hero');

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />

      <div className="container-custom relative py-20 md:py-28 lg:py-36">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-1.5 text-sm text-blue-200 mb-6">
            <Shield className="h-4 w-4" />
            <span>ISO 13485 Certified Manufacturer</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white text-balance leading-[1.1]">
            {t('title')}
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-blue-100/80 max-w-2xl leading-relaxed">
            {t('subtitle')}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link href="/products">
              <Button size="lg" className="w-full sm:w-auto text-base gap-2 bg-white text-blue-900 hover:bg-blue-50">
                {t('cta_products')}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base border-blue-400/30 text-white hover:bg-blue-400/10">
                {t('cta_quote')}
              </Button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-blue-200/70">
            <span>✓ Medical Grade Silicone</span>
            <span>✓ Customizable Specs</span>
            <span>✓ Global Shipping</span>
            <span>✓ Free Samples</span>
          </div>
        </div>
      </div>
    </section>
  );
}
