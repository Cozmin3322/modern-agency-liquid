'use client'

import { useState } from 'react'
import type React from 'react'
import Image from 'next/image'
import { ArrowRight, Facebook, Instagram, Linkedin, Mail } from 'lucide-react'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '', phone: '', location: '', serviceType: '', message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const msg = `Bună ziua! Am completat formularul de contact:\n\nNume: ${formData.name}\nTelefon: ${formData.phone}\nLocalitate: ${formData.location}\nServiciu: ${formData.serviceType}\nMesaj: ${formData.message}`
    window.open(`https://wa.me/37378370243?text=${encodeURIComponent(msg)}`, '_blank')
    setFormData({ name: '', phone: '', location: '', serviceType: '', message: '' })
  }

  const inputClass = "w-full px-0 py-3 bg-transparent border-0 border-b border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-white/60 transition-colors duration-200 text-sm"

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/contact-form-bg.png"
          alt="Aplicare izolație profesională"
          fill sizes="100vw"
          className="object-cover"
          quality={70}
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left — info */}
          <div className="text-white">
            <p className="text-sm tracking-[0.3em] uppercase text-white/50 mb-6">Contact</p>
            <h2 className="text-4xl md:text-5xl font-serif font-medium leading-tight mb-6">
              Cere ofertă<br />gratuită
            </h2>
            <p className="text-white/70 leading-relaxed mb-10 max-w-sm">
              Completează formularul și te contactăm în maxim 30 de minute cu o ofertă personalizată.
            </p>

            {/* Contact links */}
            <div className="space-y-4 mb-10">
              <a href="tel:+37378370243" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group">
                <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/50 transition-colors text-xs">☎</span>
                <span className="text-sm">+373 78 370 243</span>
              </a>
              <a href="mailto:infopoliuretan@gmail.com" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group">
                <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/50 transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                </span>
                <span className="text-sm">infopoliuretan@gmail.com</span>
              </a>
            </div>

            {/* Social */}
            <div className="flex gap-3">
              {[
                { href: 'https://www.facebook.com/isothermlux', Icon: Facebook, label: 'Facebook' },
                { href: 'https://www.instagram.com/isothermlux', Icon: Instagram, label: 'Instagram' },
                { href: 'https://www.linkedin.com/company/isothermlux', Icon: Linkedin, label: 'LinkedIn' },
              ].map(({ href, Icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-white/60 hover:bg-white/10 transition-all duration-200">
                  <Icon className="w-4 h-4 text-white/70" />
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input type="text" name="name" placeholder="Nume complet"
                  value={formData.name} onChange={handleChange}
                  className={inputClass} required />
              </div>
              <div>
                <input type="tel" name="phone" placeholder="Telefon"
                  value={formData.phone} onChange={handleChange}
                  className={inputClass} required />
              </div>
              <div>
                <input type="text" name="location" placeholder="Localitate"
                  value={formData.location} onChange={handleChange}
                  className={inputClass} required />
              </div>
              <div>
                <select name="serviceType" value={formData.serviceType} onChange={handleChange}
                  className={`${inputClass} cursor-pointer`} required>
                  <option value="">Tip serviciu</option>
                  <option value="Termoizolare">Termoizolare</option>
                  <option value="Hidroizolare">Hidroizolare</option>
                  <option value="Fațade">Fațade</option>
                  <option value="Fonoizolare">Fonoizolare</option>
                  <option value="Altele">Altele</option>
                </select>
              </div>
              <div>
                <textarea name="message" placeholder="Mesaj (suprafață, detalii…)"
                  value={formData.message} onChange={handleChange}
                  rows={3} className={`${inputClass} resize-none`} />
              </div>
              <button type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-accent text-white py-3.5 rounded-full font-semibold hover:bg-accent/90 transition-all duration-300 mt-2">
                Trimite via WhatsApp <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
