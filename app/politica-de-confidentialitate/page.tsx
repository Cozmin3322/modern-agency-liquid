import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata = {
  title: "Politica de Confidențialitate | IsoThermLux",
  description: "Politica IsoThermLux de confidențialitate și protecție a datelor cu caracter personal",
  alternates: { canonical: "/politica-de-confidentialitate" },
  openGraph: {
    title: "Politica de Confidențialitate | IsoThermLux",
    description: "Politica IsoThermLux de confidențialitate și protecție a datelor cu caracter personal",
    url: "/politica-de-confidentialitate",
    type: "article",
  },
}

export default function PoliticaConfidentialitate() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-8">Politica de Confidențialitate</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-foreground">
            <p className="text-lg">Ultima actualizare: Iunie 2026</p>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">1. Introducere</h2>
              <p>
                IsoThermLux (denumit în continuare "noi" sau "compania") se angajează să protejeze confidențialitatea dvs. și datele cu caracter personal.
                Această Politică de Confidențialitate explică modul în care colectăm, utilizăm, divulgăm și protejăm informațiile dvs.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">2. Datele pe Care le Colectăm</h2>
              <p>Colectăm următoarele tipuri de date:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Informații de identificare: nume, adresă de email, număr de telefon</li>
                <li>Informații de contact: adresa, oraș, țară</li>
                <li>Preferințe și interese privind serviciile noastre</li>
                <li>Date tehnice: adresa IP, tip browser, pagini vizitate</li>
                <li>Cookies și identificatori similari pentru analiză și personalizare</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">3. Cum Utilizez Datele Dvs.</h2>
              <p>Utilizăm datele dvs. pentru:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>A furniza și îmbunătăți serviciile noastre</li>
                <li>A comunica cu dvs. despre servicii, actualizări și oferte</li>
                <li>A îmbunătăți experiența utilizatorului și calitatea comunicării</li>
                <li>A respecta obligațiile legale</li>
                <li>A preveni frauda și a asigura securitatea</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">4. Baza Legală pentru Procesare</h2>
              <p>
                Procesăm datele dvs. cu caracter personal pe baza consimțământului dvs. explicit, obținut prin bannerul de cookie-uri afișat pe site-ul nostru.
                De asemenea, putem procesa date atunci când este necesar pentru îndeplinirea unui contract, respectarea unei obligații legale, 
                sau pentru protejarea intereselor vitale ale dvs.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">5. Drepturi ale Utilizatorilor</h2>
              <p>Aveți următoarele drepturi conform legislației privind protecția datelor:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Dreptul de acces la datele dvs. cu caracter personal</li>
                <li>Dreptul de rectificare a datelor inexacte</li>
                <li>Dreptul de ștergere ("dreptul de a fi uitat")</li>
                <li>Dreptul de a restricționa procesarea</li>
                <li>Dreptul de a vă opune procesării</li>
                <li>Dreptul la portabilitatea datelor</li>
              </ul>
              <p className="mt-4">
                Pentru a exercita aceste drepturi, vă rugăm să ne contactați la infopoliuretan@gmail.com
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">6. Retenția Datelor</h2>
              <p>
                Vă păstrăm datele pentru o perioadă necesară pentru a atinge scopurile pentru care au fost colectate, 
                sau conform necesităților legale. Datele pot fi șterse mai devreme la cerere.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">7. Securitatea Datelor</h2>
              <p>
                Implementăm măsuri de securitate tehnice și organizaționale pentru a proteja datele dvs.
                împotriva pierderii, utilizării neautorizate sau modificării. Utilizăm criptare SSL/TLS pentru transferul datelor.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">8. Contactul pentru Confidențialitate</h2>
              <p>
                Pentru întrebări sau preocupări cu privire la această Politică de Confidențialitate sau practicile noastre de protecție a datelor:
              </p>
              <div className="bg-slate-100 p-4 rounded-lg mt-4">
                <p>IsoThermLux</p>
                <p>Email: infopoliuretan@gmail.com</p>
                <p>Telefon: +373 78 370 243</p>
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
