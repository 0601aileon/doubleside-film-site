'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function CTABanner() {
  const t = useTranslations('home.cta');

  return (
    <section className="bg-gradient-to-r from-primary to-blue-700">
      <div className="container-custom py-16 md:py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-balance">
          {t('title')}
        </h2>
        <p className="mt-4 text-lg text-blue-100">
          {t('subtitle')}
        </p>
        <div className="mt-8">
          <Link href="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-blue-50 gap-2 text-base">
              {t('button')}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
