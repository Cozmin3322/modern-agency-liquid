import { Header } from "@/components/header"
import { Calculator } from "@/components/calculator"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Calculator Rapid - IsoThermLux",
  description: "Calculează cost estimat pentru serviciile de termoizolare și hidroizolare",
  alternates: {
    canonical: 'https://www.isothermlux.md/calculator-oferta'
  }
}

export default function CalculatorPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Calculator />
      <CallToAction />
      <Footer />
    </main>
  )
}

