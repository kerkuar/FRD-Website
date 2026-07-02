import { ui, defaultLang, type Lang, type UiKey } from './ui';

/** Detect the active language from a URL pathname. */
export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  if (first === 'en') return 'en';
  return defaultLang;
}

/** Returns a translation function bound to a language. */
export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return (ui[lang] as Record<string, string>)[key] ?? (ui[defaultLang] as Record<string, string>)[key] ?? key;
  };
}

/** Map a route segment between IT and EN. Add new pairs as pages are added. */
const routeMap: Record<string, { it: string; en: string }> = {
  home: { it: '/', en: '/en' },
  about: { it: '/chi-sono', en: '/en/about' },
  positions: { it: '/posizioni', en: '/en/positions' },
  articles: { it: '/articoli', en: '/en/articles' },
  speeches: { it: '/interventi', en: '/en/speeches' },
  contact: { it: '/contatti', en: '/en/contact' },
  participate: { it: '/partecipa', en: '/en/participate' },
  privacy: { it: '/privacy', en: '/en/privacy' },
};

export type RouteKey = keyof typeof routeMap;

export function localizedPath(key: RouteKey, lang: Lang): string {
  return routeMap[key][lang];
}

/** Given the current pathname, return the equivalent path in the other language. */
export function alternateLangPath(url: URL, currentLang: Lang): { lang: Lang; path: string } {
  const target: Lang = currentLang === 'it' ? 'en' : 'it';
  const path = url.pathname;

  // Try matching against known routes first.
  for (const key of Object.keys(routeMap) as RouteKey[]) {
    const itPath = routeMap[key].it;
    const enPath = routeMap[key].en;
    if (path === itPath || path === itPath + '/') return { lang: target, path: enPath };
    if (path === enPath || path === enPath + '/') return { lang: target, path: itPath };
  }

  // Dynamic content paths: /articoli/<slug> <-> /en/articles/<slug>
  if (path.startsWith('/articoli/')) {
    return { lang: target, path: '/en/articles/' + path.slice('/articoli/'.length) };
  }
  if (path.startsWith('/en/articles/')) {
    return { lang: target, path: '/articoli/' + path.slice('/en/articles/'.length) };
  }
  if (path.startsWith('/interventi/')) {
    return { lang: target, path: '/en/speeches/' + path.slice('/interventi/'.length) };
  }
  if (path.startsWith('/en/speeches/')) {
    return { lang: target, path: '/interventi/' + path.slice('/en/speeches/'.length) };
  }

  return { lang: target, path: target === 'en' ? '/en' : '/' };
}
