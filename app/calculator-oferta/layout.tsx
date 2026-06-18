import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Calculator Ofertă Termoizolare și Hidroizolare | IsoThermLux",
  description:
    "Calculează estimativ costul lucrării tale de termoizolare sau hidroizolare în câteva secunde. Introdu suprafața și locația pentru o ofertă orientativă instant.",
  alternates: {
    canonical: "https://www.isothermlux.md/calculator-oferta",
  },
  openGraph: {
    title: "Calculator Ofertă | IsoThermLux",
    description:
      "Obține o estimare rapidă de preț pentru termoizolare sau hidroizolare, în funcție de suprafață și locație.",
    type: "website",
    locale: "ro_MD",
    url: "https://www.isothermlux.md/calculator-oferta",
  },
}

export default function CalculatorOfertaLayout({ children }: { children: React.ReactNode }) {
  return children
}
