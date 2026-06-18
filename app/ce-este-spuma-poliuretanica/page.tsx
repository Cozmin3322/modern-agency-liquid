import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CallToAction } from "@/components/call-to-action"
import Link from "next/link"
import { Check, X } from "lucide-react"

export const metadata = {
  title: "Ce Este Spuma Poliuretanică? | IsoThermLux Moldova",
  description: "Ghid complet despre spuma poliuretanică: ce este, cum funcționează, tipuri (celulă deschisă vs închisă), avantaje și aplicații. Expert IsoThermLux.",
  alternates: { canonical: "https://www.isothermlux.md/ce-este-spuma-poliuretanica" }
}

export default function PolyurethaneFormPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-card border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-accent transition">Acasă</Link>
            <span>/</span>
            <span>Ce este spuma poliuretanică</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-6">Ce Este Spuma Poliuretanică?</h1>
          
          <p className="text-lg text-foreground/80 leading-relaxed mb-8">
            Spuma poliuretanică este un material inovator compus din doi componenți chimici (poliol și izocianat) care reacționează pentru a forma o structură celulară plinului de mici camere cu aer. Creat inițial în 1937 și perfecționat de-a lungul deceniilor, acest material revolutionează industria izolației datorită proprietăților sale termice excepționale și aderenței extraordinare. Folosită de companii globale, spuma poliuretanică s-a dovedit a fi o soluție de top pentru izolarea termică, hidroizolare și fonoizolare a clădirilor rezidențiale și comerciale. În Moldova, IsoThermLux oferă servicii profesionale cu materiale premium certificate ISO 9001, garantând performanță și durabilitate pe 25 de ani.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 md:py-32 bg-background border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-12">Cum Funcționează Spuma Poliuretanică?</h2>
          
          <div className="space-y-8">
            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-4 text-accent">1. Reacția Chimică cu 2 Componenți</h3>
              <p className="text-foreground/80 leading-relaxed">
                Spuma poliuretanică se formează prin amestecarea a doi componenți: poliolul și izocianatul. Când aceștia intră în contact, declanșează o reacție exotermă care generează dioxid de carbon. Acest gaz creeaza o structură de celule care împânzesc materialul, dând spumei caracteristicile sale unice.
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-4 text-accent">2. Expansiune Rapidă și Umplere Completă</h3>
              <p className="text-foreground/80 leading-relaxed">
                Spuma se expandează rapid (până la 60 de ori din volumul inițial) în aproximativ 30-45 de secunde, umplând fiecare cavitate și crevasă. Aceasta permite izolarea completă și uniformă a suprafețelor, eliminând golurile care ar permite transmiterea căldurii sau infiltrarea umezelii.
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-4 text-accent">3. Aderență Excelenţională</h3>
              <p className="text-foreground/80 leading-relaxed">
                Spre deosebire de alte materiale izolante, spuma poliuretanică aderă direct la orice suprafață: beton, lemn, tablă, cărămidă, ușor sau greu. Această proprietate elimină necesitatea de ace, cleme sau adezivi suplimentari și asigură o izolație durabilă pe 25 de ani.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types */}
      <section className="py-20 md:py-32 bg-card border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-12">Tipuri de Spumă Poliuretanică</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Celulă Deschisă */}
            <div className="bg-background p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-semibold mb-6 text-accent">Celulă Deschisă (Open Cell)</h3>
              <ul className="space-y-3 text-foreground/80 mb-6">
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                  <span>Densitate mai scăzută (10-15 kg/m³)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                  <span>Flexibilă și ușor de aplicat</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                  <span>Bună pentru fonoizolare</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                  <span>Permeabilă la vapori de apă</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-4 h-4 text-foreground/40 flex-shrink-0 mt-1" />
                  <span>Performanță termică mai scăzută decât celulă închisă</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground italic">Utilizare: Spații interioare, pereți, tavanele ziselor.</p>
            </div>

            {/* Celulă Închisă */}
            <div className="bg-background p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-semibold mb-6 text-accent">Celulă Închisă (Closed Cell)</h3>
              <ul className="space-y-3 text-foreground/80 mb-6">
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                  <span>Densitate mai mare (30-50 kg/m³)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                  <span>Performanță termică superioară (R ≈ 6-7 pe inch)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                  <span>Excelentă rezistență la apă și umiditate</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                  <span>Durabilitate extremă (25+ ani)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                  <span>Rigidă și structurală</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground italic">Utilizare: Exterior, fundații, subsoluri, containere.</p>
              <Link href="/spuma-cu-celula-inchisa" className="inline-block mt-6 text-accent font-semibold hover:text-accent/80 transition">
                Citește mai mult despre celulă închisă →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 md:py-32 bg-background border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-12">Unde Se Aplică?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Case Rezidențiale", desc: "Pereți, acoperiș, porți și ferestre pentru confort termic complet." },
              { title: "Hale Industriale", desc: "Izolație rapidă și eficientă a spațiilor mari cu pierderiu de căldură minimă." },
              { title: "Fundații și Subsoluri", desc: "Protecție impermeabilă a fundațiilor contra infiltrării umezelii și a infiltrației apei." },
              { title: "Mansarde și Poduri", desc: "Maximizarea spațiului cu izolație fin și aderență perfectă pe suprafețe oblice." },
              { title: "Containere și Depot", desc: "Protecția mărfurilor sensibile la temperatură cu izolație durabilă și sigură." },
              { title: "Garaje și Anexe", desc: "Control de temperatură pentru confortul și protecția vehiculelor și echipamentelor." }
            ].map((app, idx) => (
              <div key={idx} className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-lg font-semibold mb-3 text-accent">{app.title}</h3>
                <p className="text-sm text-foreground/80">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 md:py-32 bg-card border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-12">Avantaje față de alte Materiale</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-accent">
                  <th className="text-left p-4 font-semibold">Proprietate</th>
                  <th className="text-center p-4 font-semibold text-accent">Spumă Poliuretanică</th>
                  <th className="text-center p-4 font-semibold">Vată Minerală</th>
                  <th className="text-center p-4 font-semibold">Polistiren</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-4 font-medium">Valoare R (pe inch)</td>
                  <td className="text-center p-4 text-accent font-semibold">6-7</td>
                  <td className="text-center p-4">3-4</td>
                  <td className="text-center p-4">4-5</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 font-medium">Rezistență la Apă</td>
                  <td className="text-center p-4 text-accent font-semibold">Excelentă</td>
                  <td className="text-center p-4">Slabă (absorbe apă)</td>
                  <td className="text-center p-4">Bună</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 font-medium">Aderență la Suprafață</td>
                  <td className="text-center p-4 text-accent font-semibold">Perfectă</td>
                  <td className="text-center p-4">Necesită cadru/cleme</td>
                  <td className="text-center p-4">Necesită adeziv</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 font-medium">Fonoizolare</td>
                  <td className="text-center p-4 text-accent font-semibold">Foarte bună</td>
                  <td className="text-center p-4">Excelentă</td>
                  <td className="text-center p-4">Moderată</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 font-medium">Durabilitate</td>
                  <td className="text-center p-4 text-accent font-semibold">25+ ani</td>
                  <td className="text-center p-4">10-15 ani</td>
                  <td className="text-center p-4">15-20 ani</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 font-medium">Viteză de Aplicare</td>
                  <td className="text-center p-4 text-accent font-semibold">Rapidă (1-2 ore)</td>
                  <td className="text-center p-4">Lentă (zile)</td>
                  <td className="text-center p-4">Moderată (zile)</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Cost Inițial</td>
                  <td className="text-center p-4 text-accent font-semibold">Moderat</td>
                  <td className="text-center p-4">Scăzut</td>
                  <td className="text-center p-4">Scăzut</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-8 text-foreground/70 text-center italic">
            Spuma poliuretanică oferă cel mai bun raport performanță/preț, cu cea mai scurtă perioadă de aplicare și cea mai lungă durabilitate.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-32 bg-background border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-12">Întrebări Frecvente</h2>
          
          <div className="space-y-6">
            {[
              {
                q: "Este spuma poliuretanică sigură și non-toxică?",
                a: "Da, spuma poliuretanică certificată ISO 9001 folosită de IsoThermLux este sigură. Odată aplicată și întărită (24 ore), nu eliberează substanțe toxice. Utilizarea de echipament de protecție în timpul aplicării este recomandată pentru siguranța lucrătorilor."
              },
              {
                q: "Cât timp durează aplicarea spumei poliuretanice?",
                a: "Aplicarea spumei poliuretanice cu celulă închisă durează în medie 1-2 zile pentru o casă rezidențială, în funcție de suprafață. Spuma se expandează și se întărește în aproximativ 24 de ore, iar proiectul este gata rapid comparativ cu alte materiale izolante."
              },
              {
                q: "Ce este garanția oferită de IsoThermLux?",
                a: "IsoThermLux oferă garanție scrisă de 25 de ani pentru material și manoperă pe toate proiectele cu spumă poliuretanică certificată ISO 9001. Aceasta acoperă defectele de material și de execuție, oferind pace și protecție pe termen lung."
              },
              {
                q: "Cum să mă pregătesc pentru aplicarea spumei poliuretanice?",
                a: "Pregătirea include: evaluare gratuită pe loc, identificarea zonelor de aplicare, pregătirea suprafeţei (curățare), asigurarea ventilaţiei corespunzătoare. Echipa IsoThermLux va coordona toți pașii. Contactează-ne pentru o ofertă personalizată."
              }
            ].map((item, idx) => (
              <details key={idx} className="group bg-card border border-border rounded-lg p-6">
                <summary className="cursor-pointer flex items-start gap-4 font-semibold text-lg text-accent">
                  <span className="text-2xl group-open:rotate-90 transition">›</span>
                  {item.q}
                </summary>
                <p className="mt-4 text-foreground/80 ml-8 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Ce Este Spuma Poliuretanică?",
            description: "Ghid complet despre spuma poliuretanică: ce este, cum funcționează, tipuri (celulă deschisă vs închisă), avantaje și aplicații.",
            url: "https://www.isothermlux.md/ce-este-spuma-poliuretanica",
            author: { "@type": "Organization", name: "IsoThermLux" },
            publisher: { "@type": "Organization", name: "IsoThermLux", logo: { "@type": "ImageObject", url: "https://www.isothermlux.md/images/logo-isotherm-lux.png" } },
            datePublished: new Date().toISOString(),
            articleBody: "Spuma poliuretanică este un material inovator compus din doi componenți chimici..."
          })
        }}
      />

      <CallToAction />
      <Footer />
    </main>
  )
}

