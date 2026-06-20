import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Reviews } from "@/components/reviews"

export const metadata: Metadata = {
  title: "Tarife Termoizolare și Hidroizolare | IsoThermLux Moldova",
  description: "Tarife pentru izolare cu spumă poliuretanică celulă deschisă, celulă închisă și hidroizolație cu poliuree. Prețuri pe metru pătrat.",
  alternates: { canonical: "https://www.isothermlux.md/tarife" }
}

const rows = [
  { tip: "Celulă Deschisă", grosime: "10 cm grosime", pret: "43-70 lei/mp + TVA" },
  { tip: "Celulă Deschisă", grosime: "15 cm grosime", pret: "60-85 lei/mp + TVA" },
  { tip: "Celulă Deschisă", grosime: "20 cm grosime", pret: "75-95 lei/mp + TVA" },
  { tip: "Celulă Deschisă", grosime: "25 cm grosime", pret: "85-105 lei/mp + TVA" },
  { tip: "Celulă Închisă", grosime: "5 cm grosime", pret: "55-75 lei/mp + TVA" },
  { tip: "Celulă Închisă", grosime: "7 cm grosime", pret: "75-95 lei/mp + TVA" },
  { tip: "Celulă Închisă", grosime: "10 cm grosime", pret: "95-135 lei/mp + TVA" },
  { tip: "Celulă Închisă", grosime: "15 cm grosime", pret: "135-180 lei/mp + TVA" },
  { tip: "Hidroizolație Poliuree", grosime: "Aplicare", pret: "de la 90 lei/mp + TVA" },
]

export default function TarifePage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="py-16 md:py-24 bg-card border-b border-border text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold">Tarife</h1>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-x-auto border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-card">
                  <th className="text-left p-4 font-semibold">Tip izolație</th>
                  <th className="text-left p-4 font-semibold">Grosime / Detalii</th>
                  <th className="text-left p-4 font-semibold">Preț</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, idx) => (
                  <tr key={idx} className="border-b border-border last:border-b-0">
                    <td className="p-4 font-medium">{row.tip}</td>
                    <td className="p-4">{row.grosime}</td>
                    <td className="p-4 text-accent font-semibold">{row.pret}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Reviews />

      <Footer />
    </main>
  )
}
