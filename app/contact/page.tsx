import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"
import { ContactPageForm } from "./contact-page-form"

export const metadata: Metadata = {
  title: "Contact IsoThermLux | +373 78 370 243 | Răspuns în 30 min",
  description: "Contactează IsoThermLux pentru ofertă gratuită. Tel: +373 78 370 243. Luni-Vineri 08:00-18:00. Răspuns rapid în 30 minute.",
  alternates: { canonical: "https://www.isothermlux.md/contact" }
}

const contactItems = [
  { Icon: Phone, label: "Telefon", value: "+373 78 370 243", href: "tel:+37378370243" },
  { Icon: MessageCircle, label: "WhatsApp", value: "+373 78 370 243", href: "https://wa.me/37378370243" },
  { Icon: Mail, label: "Email", value: "infopoliuretan@gmail.com", href: "mailto:infopoliuretan@gmail.com" },
  { Icon: Clock, label: "Program", value: "Luni–Vineri 08:00–18:00", href: null },
  { Icon: MapPin, label: "Locație", value: "Chișinău, Moldova", href: null },
]

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">

        {/* Hero */}
        <section className="py-24 md:py-36 border-b border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">Suntem aici pentru tine</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium leading-tight mb-6">
                Contactează-ne
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Răspundem în maxim 30 de minute. Ofertă gratuită și consultație profesională fără obligații.
              </p>
            </div>
          </div>
        </section>

        {/* Contact + Form */}
        <section className="py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

              {/* Date contact */}
              <div>
                <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-10">Date de contact</p>
                <div className="space-y-8">
                  {contactItems.map(({ Icon, label, value, href }) => (
                    <div key={label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-muted-foreground" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{label}</p>
                        {href ? (
                          <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                            className="text-foreground font-medium hover:text-accent transition-colors duration-200">
                            {value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form */}
              <div>
                <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-10">Trimite-ne un mesaj</p>
                <ContactPageForm />
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
