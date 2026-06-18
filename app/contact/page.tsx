import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact IsoThermLux | +373 78 370 243 | Răspuns în 30 min",
  description: "Contactează IsoThermLux pentru ofertă gratuită. Tel: +373 78 370 243. Luni-Vineri 08:00-18:00. Răspuns rapid în 30 minute.",
  alternates: {
    canonical: "https://www.isothermlux.md/contact"
  }
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-background to-accent/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Contactează-ne</h1>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto">Suntem aici pentru tine! Contactează-ne pentru ofertă gratuită și consultație profesională.</p>
            </div>
          </div>
        </section>

        {/* Contact Information Grid */}
        <section className="py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {/* Phone */}
              <div className="bg-card rounded-lg p-8 text-center border border-border hover:border-accent transition">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2">Telefon</h3>
                <a href="tel:+37378370243" className="text-accent hover:underline font-semibold">
                  +373 78 370 243
                </a>
              </div>

              {/* WhatsApp */}
              <div className="bg-card rounded-lg p-8 text-center border border-border hover:border-accent transition">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2">WhatsApp</h3>
                <a href="https://wa.me/37378370243" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold">
                  +373 78 370 243
                </a>
              </div>

              {/* Email */}
              <div className="bg-card rounded-lg p-8 text-center border border-border hover:border-accent transition">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2">Email</h3>
                <a href="mailto:contact@isothermlux.md" className="text-accent hover:underline font-semibold break-all">
                  contact@isothermlux.md
                </a>
              </div>

              {/* Hours */}
              <div className="bg-card rounded-lg p-8 text-center border border-border hover:border-accent transition">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2">Program</h3>
                <div className="text-sm text-foreground/70">
                  <p>Luni-Vineri</p>
                  <p className="font-semibold text-foreground">08:00 - 18:00</p>
                </div>
              </div>
            </div>

            {/* Contact Form and Map */}
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-card rounded-lg p-8 border border-border">
                <h2 className="text-2xl font-bold mb-6">Trimite-ne un mesaj</h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nume</label>
                    <input type="text" className="w-full px-4 py-2 rounded-lg border border-border focus:border-accent outline-none" placeholder="Numele tău" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-2 rounded-lg border border-border focus:border-accent outline-none" placeholder="email@example.com" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Telefon</label>
                    <input type="tel" className="w-full px-4 py-2 rounded-lg border border-border focus:border-accent outline-none" placeholder="+373 78 370 243" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Mesaj</label>
                    <textarea className="w-full px-4 py-2 rounded-lg border border-border focus:border-accent outline-none h-32" placeholder="Mesajul tău..." required></textarea>
                  </div>
                  <button type="submit" className="w-full py-3 bg-accent text-white font-bold rounded-lg hover:bg-accent/90 transition">
                    Trimite Mesaj
                  </button>
                </form>
              </div>

              {/* Info Section */}
              <div className="bg-card rounded-lg p-8 border border-border">
                <h2 className="text-2xl font-bold mb-6">Locația noastră</h2>
                <div className="space-y-6">
                  <div>
                    <div className="flex gap-3 mb-2">
                      <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold">Adresa</h3>
                        <p className="text-foreground/70">Chișinău, Moldova</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex gap-3 mb-2">
                      <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold">Program de lucru</h3>
                        <p className="text-foreground/70">Luni - Vineri: 08:00 - 18:00</p>
                        <p className="text-foreground/70">Sâmbătă: 09:00 - 14:00</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex gap-3 mb-2">
                      <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold">Răspuns rapid</h3>
                        <p className="text-foreground/70">Răspuns în maxim 30 de minute</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
