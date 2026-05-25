'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FlaskConical, Factory, Shield, Truck, FileCheck, Globe } from 'lucide-react';

const reasons = [
  { key: 'materials', icon: FlaskConical },
  { key: 'technology', icon: Factory },
  { key: 'quality', icon: Shield },
  { key: 'logistics', icon: Truck },
  { key: 'oem', icon: FileCheck },
  { key: 'samples', icon: Globe },
];

export default function WhyChooseUs() {
  const t = useTranslations('home.whyUs');

  return (
    <section className="bg-muted/30 border-y">
      <div className="container-custom py-16 md:py-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="secondary" className="mb-4">Why Choose Us</Badge>
          <h2 className="text-3xl font-bold tracking-tight">{t('title')}</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => {
            const item = t.raw(`items.${reason.key}`) as { title: string; desc: string };
            const Icon = reason.icon;
            return (
              <Card key={reason.key} className="border-0 shadow-sm bg-white">
                <CardHeader>
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-base">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
