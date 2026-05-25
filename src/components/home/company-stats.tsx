'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

const stats = [
  { key: 'years', value: 12, suffix: '+' },
  { key: 'countries', value: 50, suffix: '+' },
  { key: 'clients', value: 500, suffix: '+' },
  { key: 'capacity', value: 100000, suffix: '+ sqm/mo', format: true },
];

function AnimatedCounter({ target, suffix, format }: { target: number; suffix: string; format?: boolean }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref}>
      <span className="text-4xl font-bold text-primary tabular-nums">
        {format ? `${(count / 1000).toFixed(0)}k` : count}
      </span>
      <span className="text-4xl font-bold text-primary">{suffix}</span>
    </div>
  );
}

export default function CompanyStats() {
  const t = useTranslations('home.stats');

  return (
    <section className="bg-muted/30 border-y">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.key}>
              <AnimatedCounter target={stat.value} suffix={stat.suffix} format={stat.format} />
              <p className="mt-2 text-sm text-muted-foreground">{t(stat.key as any)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
