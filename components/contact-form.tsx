'use client'

import { useState } from 'react'
import type React from 'react'
import Image from 'next/image'
import { ArrowRight, Facebook, Instagram, Linkedin, Mail } from 'lucide-react'
import { createLead } from '@/app/actions/crm'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '', phone: '', location: '', serviceType: '', message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Salvează cererea în CRM (nu blocăm utilizatorul dacă eșuează)
    createLead({
      name: formData.name,
      phone: formData.phone,
      location: formData.location,
      serviceType: formData.serviceType,
      message: formData.message,
      source: 'formular_contact',
    }).catch((err) => console.error('[CRM] Failed to save lead:', err))

    const msg = `Bună ziua! Am completat formularul de contact:\n\nNume: ${formData.name}\nTelefon: ${formData.phone}\nLocalitate: ${formData.location}\nServiciu: ${formData.serviceType}\nMesaj: ${formData.message}`
    window.open(`https://wa.me/37360811115?text=${encodeURIComponent(msg)}`, '_blank')
    setFormData({ name: '', phone: '', location: '', serviceType: '', message: '' })
    setIsSubmitting(false)
  }

  const inputClass = "w-full px-0 py-3 bg-transparent border-0 border-b border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-white/60 transition-colors duration-200 text-sm"

  const darkInputClass = "w-full px-0 py-3 bg-transparent border-0 border-b border-[#1A1D21]/25 text-[#1A1D21] placeholder:text-[#1A1D21]/50 focus:outline-none focus:border-[#1A1D21]/70 transition-colors duration-200 text-sm"

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-white">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-0 items-stretch border border-border">

          {/* Left — info, fundal auriu deschis cu poză */}
          <div className="relative text-[#1A1D21] p-8 md:p-12 flex flex-col justify-center overflow-hidden">
            <Image
              src="/images/gallery/termo-22.webp"
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#E8B048]/85" />
            <div className="relative z-10">
            <p className="text-sm tracking-[0.3em] uppercase text-[#1A1D21]/60 mb-6">Contact</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium leading-tight mb-6">
              Cere ofertă<br />gratuită
            </h2>
            <p className="text-[#1A1D21]/75 leading-relaxed mb-10 max-w-sm">
              Completează formularul și te contactăm în maxim 30 de minute cu o ofertă personalizată.
            </p>

            {/* Contact links */}
            <div className="space-y-4 mb-10">
              <a href="tel:+37360811115" className="flex items-center gap-3 text-[#1A1D21]/85 hover:text-[#1A1D21] transition-colors group">
                <span className="w-8 h-8 rounded-full border border-[#1A1D21]/25 flex items-center justify-center group-hover:border-[#1A1D21]/60 transition-colors text-xs">☎</span>
                <span className="text-sm">+373 60 811 115</span>
              </a>
              <a href="mailto:infopoliuretan@gmail.com" className="flex items-center gap-3 text-[#1A1D21]/85 hover:text-[#1A1D21] transition-colors group">
                <span className="w-8 h-8 rounded-full border border-[#1A1D21]/25 flex items-center justify-center group-hover:border-[#1A1D21]/60 transition-colors">
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
                  className="w-9 h-9 rounded-full border border-[#1A1D21]/25 flex items-center justify-center hover:border-[#1A1D21]/60 hover:bg-[#1A1D21]/10 transition-all duration-200">
                  <Icon className="w-4 h-4 text-[#1A1D21]/70" />
                </a>
              ))}
            </div>
            </div>
          </div>

          {/* Right — form, fundal alb */}
          <div className="bg-white p-8 md:p-10 flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input type="text" name="name" placeholder="Nume complet"
                  value={formData.name} onChange={handleChange}
                  className={darkInputClass} required />
              </div>
              <div>
                <input type="tel" name="phone" placeholder="Telefon"
                  value={formData.phone} onChange={handleChange}
                  className={darkInputClass} required />
              </div>
              <div>
                <input type="text" name="location" placeholder="Localitate"
                  value={formData.location} onChange={handleChange}
                  className={darkInputClass} required />
              </div>
              <div>
                <select name="serviceType" value={formData.serviceType} onChange={handleChange}
                  className={`${darkInputClass} cursor-pointer`} required>
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
                  rows={3} className={`${darkInputClass} resize-none`} />
              </div>
              <button type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#BD2626] text-white py-3.5 font-semibold hover:bg-[#a31f1f] transition-all duration-300 mt-2">
                Trimite via WhatsApp <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
