'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import { useTransition } from 'react';

const localeNames: Record<string, string> = {
  en: 'English',
  zh: '中文',
  es: 'Español',
  de: 'Deutsch',
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function switchLocale(nextLocale: string) {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  const isZh = locale === 'zh';

  return (
    <div className="flex items-center border rounded-lg overflow-hidden">
      <button
        onClick={() => switchLocale('zh')}
        disabled={isPending || isZh}
        className={`px-3 py-1.5 text-xs font-medium transition-colors ${
          isZh
            ? 'bg-primary text-primary-foreground'
            : 'text-muted-foreground hover:text-foreground hover:bg-accent'
        }`}
      >
        中文
      </button>
      <button
        onClick={() => switchLocale('en')}
        disabled={isPending || !isZh}
        className={`px-3 py-1.5 text-xs font-medium transition-colors ${
          !isZh
            ? 'bg-primary text-primary-foreground'
            : 'text-muted-foreground hover:text-foreground hover:bg-accent'
        }`}
      >
        EN
      </button>
    </div>
  );
}
