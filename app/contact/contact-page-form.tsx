'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export function ContactPageForm() {
  const [formData, setFormData] = useState({
    name: '', phone: '', location: '', serviceType: '', message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const msg = `Bună! Solicit o ofertă:\n\nNume: ${formData.name}\nTelefon: ${formData.phone}\nLocalitate: ${formData.location}\nServiciu: ${formData.serviceType}\nMesaj: ${formData.message}`
    window.open(`https://wa.me/37360811115?text=${encodeURIComponent(msg)}`, '_blank')
    setFormData({ name: '', phone: '', location: '', serviceType: '', message: '' })
  }

  const inputClass = "w-full px-0 py-3 bg-transparent border-0 border-b border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors duration-200 text-sm"

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <input type="text" name="name" placeholder="Nume complet" value={formData.name}
          onChange={handleChange} className={inputClass} required />
      </div>
      <div>
        <input type="tel" name="phone" placeholder="Telefon" value={formData.phone}
          onChange={handleChange} className={inputClass} required />
      </div>
      <div>
        <input type="text" name="location" placeholder="Localitate" value={formData.location}
          onChange={handleChange} className={inputClass} required />
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
        <textarea name="message" placeholder="Mesaj (suprafață, detalii…)" value={formData.message}
          onChange={handleChange} rows={4}
          className={`${inputClass} resize-none`} />
      </div>
      <button type="submit"
        className="inline-flex items-center gap-2 bg-accent text-white px-8 py-3 rounded-full font-semibold hover:bg-accent/90 transition-all duration-300 hover:gap-3 mt-2">
        Trimite via WhatsApp <ArrowRight className="w-4 h-4" />
      </button>
    </form>
  )
}
