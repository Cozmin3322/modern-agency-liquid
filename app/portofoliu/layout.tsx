import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portofoliu Proiecte | 3971 de Lucrări Termoizolare și Hidroizolare",
  description:
    "Descoperă portofoliul IsoThermLux: 3971 de proiecte de termoizolare și hidroizolare realizate în Moldova. Case private, hale industriale, fundații și acoperișuri.",
  alternates: {
    canonical: "https://www.isothermlux.md/portofoliu",
  },
  openGraph: {
    title: "Portofoliu Proiecte | IsoThermLux",
    description:
      "3971 de proiecte de termoizolare și hidroizolare realizate în Moldova. Vezi lucrările noastre recente.",
    type: "website",
    locale: "ro_MD",
    url: "https://www.isothermlux.md/portofoliu",
  },
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children
}
