'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { useTransition } from 'react';

const localeNames: Record<string, string> = {
  en: 'EN',
  zh: '中文',
  es: 'ES',
  de: 'DE',
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

  const availableLocales = Object.keys(localeNames).filter((l) => l !== locale);

  return (
    <div className="flex items-center gap-1">
      <Globe className="h-4 w-4 text-muted-foreground" />
      <span className="text-sm font-medium text-muted-foreground mr-1">
        {localeNames[locale]}
      </span>
      {availableLocales.slice(0, 2).map((l) => (
        <Button
          key={l}
          variant="ghost"
          size="xs"
          disabled={isPending}
          onClick={() => switchLocale(l)}
          className="text-xs text-muted-foreground hover:text-foreground h-6 px-1.5"
        >
          {localeNames[l]}
        </Button>
      ))}
    </div>
  );
}
