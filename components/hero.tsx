import { HeroClient } from './hero-client'
import { getContent } from '@/app/actions/content'

interface HeroContent {
  heroTitle: string
  heroSubtitle: string
}

const DEFAULT_HERO: HeroContent = {
  heroTitle: 'Izolații cu Spumă',
  heroSubtitle: 'Servicii de Calitate Premium',
}

export async function Hero() {
  // Server-side fetch din Supabase cu fallback
  const heroContent = await getContent<HeroContent>('home_hero', DEFAULT_HERO)

  return <HeroClient data={heroContent} />
}
