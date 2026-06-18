/**
 * Client-side wrapper - NOT pentru uz direct.
 * Acest file e importat doar din RSC wrappers în components/hero.tsx, components/faq.tsx etc.
 * RSC-urile sunt server components deci pot folosi lib/content.ts direct.
 */
export function getClientContent() {
  throw new Error('Use getContent from lib/content.ts în RSC wrappers, nu în client components')
}
