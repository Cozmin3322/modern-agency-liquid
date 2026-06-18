import { Header } from "@/components/header"
import { Philosophy } from "@/components/philosophy"
import { Footer } from "@/components/footer"
import { CallToAction } from "@/components/call-to-action"
import Image from "next/image"
import { Zap, Home, ShieldCheck, TrendingDown, Leaf, BarChart3 } from "lucide-react"

export const metadata = {
  title: "Beneficiile Termoizolării | IsoThermLux",
  description: "Descoperă beneficiile termoizolării: economie de 40-50% la energie, garanție 25 ani, materiale premium certificate ISO 9001 și 12 ani de experiență.",
}

export default function BeneficiiPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-muted-foreground text-xs md:text-sm tracking-[0.3em] uppercase mb-4">De Ce Noi?</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6">Beneficiile Termoizolării</h1>
            <p className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto">
              Investiția în termoizolare se recuperează în 2-3 ani prin economiile la facturile de energie.
              Noi oferim garanție 25 ani și echipă profesionistă din Moldova.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid with Images */}
        <section className="py-20 md:py-28 bg-[#2C3E50]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Beneficiu 1: Economie */}
            <div className="rounded-xl overflow-hidden shadow-lg" style={{backgroundColor: '#9B5F12'}}>
              <div className="relative h-64 md:h-72 w-full overflow-hidden">
                <Image
                  src="/images/project-finisaj-01.jpg"
                  alt="Economie la energia"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <TrendingDown className="w-6 h-6 text-white" />
                  <h3 className="text-2xl font-serif font-bold text-white">Economie de 40-50%</h3>
                </div>
                <p className="text-white/90 leading-relaxed">
                  Reduce factura de încălzire cu pâna la 40-50%. Investiția se recuperează în doar 2-3 ani prin economiile anuale la facturile de energie.
                </p>
              </div>
            </div>

            {/* Beneficiu 2: Confort */}
            <div className="rounded-xl overflow-hidden shadow-lg" style={{backgroundColor: '#9B5F12'}}>
              <div className="relative h-64 md:h-72 w-full overflow-hidden">
                <Image
                  src="/images/project-casa-termoizolare-01.jpg"
                  alt="Confort termic"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <Home className="w-6 h-6 text-white" />
                  <h3 className="text-2xl font-serif font-bold text-white">Confort Termic</h3>
                </div>
                <p className="text-white/90 leading-relaxed">
                  Temperatura constantă în interiorul casei. Eliminarea curenților de aer rece și a punctelor reci pe pereți.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Beneficiu 3: Garanție */}
            <div className="rounded-xl overflow-hidden shadow-lg" style={{backgroundColor: '#9B5F12'}}>
              <div className="relative h-64 md:h-72 w-full overflow-hidden">
                <Image
                  src="/images/project-protectie-margini-01.jpg"
                  alt="Garanție 25 ani"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <ShieldCheck className="w-6 h-6 text-white" />
                  <h3 className="text-2xl font-serif font-bold text-white">Garanție 25 Ani</h3>
                </div>
                <p className="text-white/90 leading-relaxed">
                  Garanție completă pe materialele și pe munca prestată. Spuma poliuretanică cu celulă închisă durează 25+ ani.
                </p>
              </div>
            </div>

            {/* Beneficiu 4: Durabilitate */}
            <div className="rounded-xl overflow-hidden shadow-lg" style={{backgroundColor: '#9B5F12'}}>
              <div className="relative h-64 md:h-72 w-full overflow-hidden">
                <Image
                  src="/images/project-detaliu-izolare-01.jpg"
                  alt="Durabilitate extremă"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <BarChart3 className="w-6 h-6 text-white" />
                  <h3 className="text-2xl font-serif font-bold text-white">Durabilitate</h3>
                </div>
                <p className="text-white/90 leading-relaxed">
                  Rezistă la umiditate, mold și deteriorare. Nu se degradează ușor și menține proprietățile izolante timp de decenii.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Beneficiu 5: Mediu */}
            <div className="rounded-xl overflow-hidden shadow-lg" style={{backgroundColor: '#9B5F12'}}>
              <div className="relative h-64 md:h-72 w-full overflow-hidden">
                <Image
                  src="/images/project-hala-industrial-01.jpg"
                  alt="Beneficiu pentru mediu"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <Leaf className="w-6 h-6 text-white" />
                  <h3 className="text-2xl font-serif font-bold text-white">Sustenabil</h3>
                </div>
                <p className="text-white/90 leading-relaxed">
                  Reduce emisiile de CO2 prin scăderea consumului de energie. Contribui la protejarea mediului înconjurător.
                </p>
              </div>
            </div>

            {/* Beneficiu 6: Profesionalism */}
            <div className="rounded-xl overflow-hidden shadow-lg" style={{backgroundColor: '#9B5F12'}}>
              <div className="relative h-64 md:h-72 w-full overflow-hidden">
                <Image
                  src="/images/project-casa-detail-01.jpg"
                  alt="Echipă profesională"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-6 h-6 text-white" />
                  <h3 className="text-2xl font-serif font-bold text-white">Echipă Expertă</h3>
                </div>
                <p className="text-white/90 leading-relaxed">
                  12 ani de experiență și lucrări în toată Moldova. Tehnologie modernă și materiale premium certificate ISO 9001 de înaltă calitate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Philosophy />

      {/* Learn More Section */}
      <section className="py-16 md:py-24 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground text-xs md:text-sm tracking-[0.3em] uppercase mb-4">Material Educativ</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Vrei să afli mai mult?</h2>
          <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
            Citește ghidul nostru complet despre spuma poliuretanică: ce este, cum funcționează, tipuri și aplicații.
          </p>
          <a href="/ce-este-spuma-poliuretanica" className="inline-flex items-center gap-2 bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition">
            Citește Ghidul Complet →
          </a>
        </div>
      </section>

      <CallToAction />
      <Footer />
    </main>
  )
}
