import { siteConfig } from './constants';

export type SupportedLocale = 'en' | 'zh' | 'es' | 'de';

const allLocales: SupportedLocale[] = ['en', 'zh', 'es', 'de'];

export function getAlternates(locale: string, path: string) {
  const normalizedPath = path === '/' ? '/' : `/${path.replace(/^\/?/, '').replace(/\/$/, '')}`;
  const baseUrl = siteConfig.url.replace(/\/$/, '');

  const languages: Record<string, string> = {
    'x-default': `${baseUrl}/en${normalizedPath}`,
  };

  for (const l of allLocales) {
    languages[l] = `${baseUrl}/${l}${normalizedPath}`;
  }

  return {
    canonical: `${baseUrl}/${locale}${normalizedPath}`,
    languages,
  };
}
