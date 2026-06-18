'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    serviceType: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Construiește mesajul pentru WhatsApp
    const whatsappMessage = `Bună! Am completat formularul:
    
Nume: ${formData.name}
Telefon: ${formData.phone}
Localitate: ${formData.location}
Tip Izolare: ${formData.serviceType}
Email: ${formData.email}
Mesaj: ${formData.message}`

    // Codifică mesajul pentru URL
    const encodedMessage = encodeURIComponent(whatsappMessage)
    
    // Redirecționează la WhatsApp
    const whatsappUrl = `https://wa.me/37378370243?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
    
    // Resetează formularul
    setFormData({ name: '', phone: '', location: '', serviceType: '', email: '', message: '' })
  }

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/contact-form-bg.png"
          alt="Contact background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-0 bg-white rounded-lg overflow-hidden shadow-2xl">
          {/* Left Side - Yellow */}
          <div className="p-8 md:p-12 text-white flex flex-col justify-center" style={{ backgroundColor: '#DD9933' }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Formulär de Contact</h2>
            <p className="text-base md:text-lg leading-relaxed mb-8">
              Completează formularul pentru a solicita o ofertă personalizată, iar noi te vom contacta în cel mai scurt timp.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#" className="bg-white/20 hover:bg-white/40 p-3 rounded-full transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/20 hover:bg-white/40 p-3 rounded-full transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/20 hover:bg-white/40 p-3 rounded-full transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/20 hover:bg-white/40 p-3 rounded-full transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="p-8 md:p-12 bg-white">
            <h3 className="text-2xl font-bold mb-8 text-center text-foreground font-serif">Cere Oferta!</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Nume"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent"
                required
              />
              
              <input
                type="tel"
                name="phone"
                placeholder="Telefon"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent"
                required
              />
              
              <input
                type="text"
                name="location"
                placeholder="Localitate"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent"
                required
              />
              
              <select
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent bg-white"
                required
              >
                <option value="">Selectează tip de izolare:</option>
                <option value="termoizolare">Termoizolare</option>
                <option value="hidroizolare">Hidroizolare</option>
                <option value="ambele">Ambele servicii</option>
              </select>
              
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent"
                required
              />
              
              <textarea
                name="message"
                placeholder="Mesaj (Ex. Suprafață / Mg)"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent resize-none"
              />
              
              <button
                type="submit"
                className="w-full py-3 rounded-full font-bold text-white transition-all uppercase tracking-widest text-sm hover:opacity-90"
                style={{ 
                  backgroundColor: '#DD9933',
                }}
              >
                Trimite
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
