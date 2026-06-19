'use client'

import { AdminProtectedLayout } from '@/components/admin-protected-layout'

export default function AdminDashboard() {
  return (
    <AdminProtectedLayout>
      <div className="p-8">
        <div className="max-w-4xl">
          <h1 className="text-3xl font-serif font-bold text-foreground mb-2">
            Bun venit în Admin Panel
          </h1>
          <p className="text-foreground/60 mb-8">
            Utilizați meniul din stânga pentru a edita conținutul site-ului
          </p>

          <div className="grid grid-cols-2 gap-4">
            {[
              { title: 'Acasă', desc: 'Editați titlul și conținutul paginii principale' },
              { title: 'Servicii', desc: 'Gestionați informații despre Termoizolare și Hidroizolare' },
              { title: 'Calculator', desc: 'Configurați prețurile și costurile de deplasare' },
              { title: 'FAQ', desc: 'Adăugați, editați și ștergeți întrebări frecvente' },
              { title: 'Recenzii', desc: 'Gestionați recenziile clienților' },
              { title: 'Proiecte', desc: 'Editați detaliile proiectelor din portofoliu' },
              { title: 'Contact', desc: 'Informații de contact și date SEO' },
            ].map((item, i) => (
              <div key={i} className="p-4 border border-border rounded-none bg-accent/5">
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-foreground/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminProtectedLayout>
  )
}
