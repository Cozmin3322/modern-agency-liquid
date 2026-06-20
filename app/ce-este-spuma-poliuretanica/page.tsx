import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"

export const metadata = {
  title: "Tipuri de Spumă Poliuretanică | IsoThermLux Moldova",
  description: "Tipuri de spumă poliuretanică: celulă deschisă vs celulă închisă, grosimi recomandate pentru fiecare tip de construcție. Expert IsoThermLux.",
  alternates: { canonical: "https://www.isothermlux.md/ce-este-spuma-poliuretanica" }
}

const rows = [
  { locatie: "Mansardă locuibilă", grosime: "7cm", tip: "Celulă închisă" },
  { locatie: "Mansardă locuibilă", grosime: "15cm", tip: "Celulă deschisă" },
  { locatie: "Pod tehnic", grosime: "5cm sau 10cm", tip: "Celulă închisă sau deschisă" },
  { locatie: "Pereți interiori/exteriori beton/cărămidă/BCA", grosime: "5cm", tip: "Celulă închisă" },
  { locatie: "Pereți interiori lemn", grosime: "10cm", tip: "Celulă deschisă" },
  { locatie: "Pereți exteriori lemn", grosime: "5cm sau 10cm", tip: "Celulă închisă sau deschisă" },
  { locatie: "Planșeu lemn", grosime: "5cm sau 10cm", tip: "Celulă închisă sau deschisă" },
  { locatie: "Planșeu beton", grosime: "5cm", tip: "Celulă închisă" },
  { locatie: "Subsol bloc", grosime: "5cm", tip: "Celulă închisă" },
  { locatie: "Hală neîncălzită", grosime: "5cm sau 10cm", tip: "Celulă închisă" },
  { locatie: "Hală încălzită", grosime: "2cm sau 3cm", tip: "Celulă închisă" },
  { locatie: "Soclu casă", grosime: "3cm", tip: "Celulă închisă" },
  { locatie: "Container", grosime: "5cm", tip: "Celulă închisă" },
]

export default function PolyurethaneFormPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-card border-b border-border text-center overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold uppercase">Tipuri de Spumă</h1>
        </div>
      </section>

      {/* Table section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-6">
            Spumă poliuretanică cu celulă deschisă sau cu celulă închisă? Alege soluția ideală pentru tine
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-2">
            Mai jos, avem câteva variante de scenarii pentru izolare cu spumă poliuretanică, folosind spumă cu celulă deschisă sau spumă cu celulă închisă, după caz.
          </p>
          <p className="text-foreground/80 leading-relaxed mb-10">
            Descoperă avantajele diferitelor tipuri de izolație cu spumă poliuretanică pentru o eficiență termică maximă! Află ce tip de izolație ți se potrivește și solicită o ofertă personalizată acum!
          </p>

          <div className="overflow-x-auto border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-card">
                  <th className="text-left p-4 font-semibold">Locație/Tip de construcție</th>
                  <th className="text-left p-4 font-semibold">Grosime a izolației</th>
                  <th className="text-left p-4 font-semibold">Tip de spumă izolatoare</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, idx) => (
                  <tr key={idx} className="border-b border-border last:border-b-0">
                    <td className="p-4">{row.locatie}</td>
                    <td className="p-4">{row.grosime}</td>
                    <td className="p-4">{row.tip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </main>
  )
}
