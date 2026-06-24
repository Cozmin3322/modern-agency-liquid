import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata = {
  title: "Termenii și Condițiile | IsoThermLux",
  description: "Termenii și condițiile generale de utilizare a serviciilor IsoThermLux",
  alternates: { canonical: "/termenii-si-conditiile" },
  openGraph: {
    title: "Termenii și Condițiile | IsoThermLux",
    description: "Termenii și condițiile generale de utilizare a serviciilor IsoThermLux",
    url: "/termenii-si-conditiile",
    type: "article",
  },
}

export default function TermeniiSiConsitii() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-8">Termenii și Condițiile</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-foreground">
            <p className="text-lg">Ultima actualizare: Iunie 2026</p>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">1. Acceptarea Termenilor</h2>
              <p>
                Prin accesarea și utilizarea acestui site web și serviciilor noastre, sunteți de acord să respectați 
                și să fiți obligați de acești Termeni și Condiții. Dacă nu sunteți de acord cu vreun aspect al acestor termeni, 
                vă rugăm să nu utilizați site-ul.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">2. Licență de Utilizare</h2>
              <p>
                Vă acordăm o licență limitată, neexclusivă și revocabilă pentru a accesa și utiliza site-ul nostru 
                exclusiv pentru scopuri legale și în conformitate cu acești Termeni. Nu aveți voie să:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Reproduceți, duplicați, copiați sau vindeți orice conținut</li>
                <li>Utilizați site-ul pentru scopuri ilegale sau dăunătoare</li>
                <li>Accesați neautorizat datele sistemului nostru</li>
                <li>Transmiteți malware sau cod dăunător</li>
                <li>Spămiți sau trimiteți mesaje comerciale nesolicitate</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">3. Conținut și Proprietate Intelectuală</h2>
              <p>
                Totul pe site-ul nostru, inclusiv textul, grafica, imagini, logo-urile și software-ul, este proprietatea noastră
                sau a licențiatorilor noștri și este protejat de legile privind drepturile de autor.
                Nu aveți voie să reproduceți sau să utilizați orice conținut fără permisiune scrisă.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">4. Serviciile Noastre</h2>
              <p>
                IsoThermLux oferă servicii de consultanță și soluții de izolare termică, fonoizolare și hidroizolare.
                Descrierile serviciilor sunt cât mai exacte posibil, dar nu constituie o garanție. 
                Prețurile și disponibilitatea sunt supuse modificării fără notificare prealabilă.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">5. Limitarea Răspunderii</h2>
              <p>
                ÎN NICIUN CAZ, ISOTHERMLUX NU VA FI RESPONSABILĂ PENTRU ORICE DAUNE INDIRECTE, INCIDENTALE,
                SPECIALE SAU CONSECUTIVE REZULTATE DIN SAU LEGATE DE UTILIZAREA SITE-ULUI SAU SERVICIILOR NOASTRE.
                Răspunderea noastră totală este limitată în condițiile permise de legislația Republicii Moldova.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">6. Soluționarea Litigiilor</h2>
              <p>
                Orice litigiu, acțiune sau procedură rezultată din sau legată de acești Termeni și Condiții 
                va fi reglementată de legile Republicii Moldova. Ambele părți acceptă să se supună jurisdicției 
                exclusivelor curți din Chișinău, Moldova.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">7. Modificări ale Termenilor</h2>
              <p>
                IsoThermLux se rezervă dreptul de a modifica acești Termeni și Condiții în orice moment.
                Modificările vor fi efective la data publicării pe site. Utilizarea continuă a site-ului după 
                publicarea modificărilor constituie acceptarea acestora.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">8. Întreruperea Serviciului</h2>
              <p>
                IsoThermLux se rezervă dreptul de a întrerupe sau de a anula orice serviciu, cu sau fără motiv,
                și cu sau fără notificare prealabilă. Nu vom fi responsabili pentru nicio întrerupere sau anulare a serviciilor.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">9. Contact</h2>
              <p>
                Pentru orice întrebări cu privire la acești Termeni și Condiții, vă rugăm să ne contactați:
              </p>
              <div className="bg-slate-100 p-4 rounded-none mt-4">
                <p>IsoThermLux</p>
                <p>Email: infopoliuretan@gmail.com</p>
                <p>Telefon: +373 60 811 115</p>
                <p>Adresa: Chișinău, Moldova</p>
              </div>
            </section>

            <section className="mt-8 pt-8 border-t">
              <p className="text-sm text-gray-600">
                <Link href="/" className="text-accent hover:underline">← Înapoi la pagina principală</Link>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
