export interface Project {
  id: number
  title: string
  category: "Termoizolare" | "Hidroizolare"
  location?: string
  year?: number
  image: string
  images?: string[]
  slug: string
  shortDesc: string
  longDesc: string
  keywords: string[]
  metaTitle: string
  metaDescription: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Termoizolare Mansardă",
    category: "Termoizolare",
    image: "/images/project-mansarda-01.webp",
    images: [
      "/images/project-mansarda-01.webp",
      "/images/project-mansarda-02.webp",
      "/images/project-mansarda-03.webp",
      "/images/project-mansarda-04.webp",
      "/images/project-mansarda-05.webp",
      "/images/project-mansarda-06.webp",
    ],
    slug: "termoizolare-mansarda",
    shortDesc: "Mansardă termoizolată complet cu spumă poliuretanică",
    longDesc: `<h2>Termoizolare Mansardă cu Spumă Poliuretanică</h2>
      <p>Proiect de termoizolare completă a unei mansarde, aplicând spumă poliuretanică direct pe structura acoperișului — căpriori, șarpantă din lemn și suprafața dintre grinzi. Aplicarea creează un strat continuu, fără rosturi sau punți termice, care urmează perfect fiecare colț și neregularitate a structurii din lemn.</p>
      <h3>Lucrări efectuate:</h3>
      <ul>
        <li>Termoizolare completă a suprafeței acoperișului cu spumă poliuretanică</li>
        <li>Acoperire perfectă în jurul căpriorilor și elementelor structurale din lemn</li>
        <li>Izolare zonă cu trapă de acces și instalații (conducte, vas de expansiune)</li>
        <li>Strat uniform, fără goluri, pe toată suprafața mansardei</li>
      </ul>
      <h3>Rezultate:</h3>
      <ul>
        <li>Eliminare completă a punților termice dintre căpriori</li>
        <li>Spațiu protejat termic pe toată suprafața, inclusiv colțurile dificile</li>
        <li>Aderență perfectă pe lemn, fără desprinderi</li>
      </ul>`,
    keywords: ["termoizolare mansardă", "izolare pod spumă poliuretanică", "termoizolare acoperiș lemn", "spumă poliuretanică mansardă"],
    metaTitle: "Termoizolare Mansardă cu Spumă Poliuretanică - IsoThermLux",
    metaDescription: "Termoizolare mansardă completă cu spumă poliuretanică. Acoperire perfectă a structurii din lemn, fără punți termice. Garanție 25 ani.",
  },
  {
    id: 2,
    title: "Termoizolare Acoperiș Industrial",
    category: "Termoizolare",
    image: "/images/project-acoperis-industrial-01.webp",
    images: [
      "/images/project-acoperis-industrial-01.webp",
      "/images/project-acoperis-industrial-02.webp",
      "/images/project-acoperis-industrial-03.webp",
      "/images/project-acoperis-industrial-04.webp",
    ],
    slug: "termoizolare-acoperis-industrial",
    shortDesc: "Acoperiș industrial cu structură metalică termoizolat complet",
    longDesc: `<h2>Termoizolare Acoperiș Industrial cu Spumă Poliuretanică</h2>
      <p>Termoizolare a unui acoperiș industrial cu structură metalică, prin aplicarea spumei poliuretanice direct pe suprafața interioară. Spuma aderă perfect pe panourile metalice și urmează linia structurii, creând un strat continuu și uniform pe toată deschiderea acoperișului.</p>
      <h3>Lucrări efectuate:</h3>
      <ul>
        <li>Termoizolare completă a suprafeței interioare a acoperișului metalic</li>
        <li>Acoperire uniformă pe toată deschiderea, între grinzile structurii metalice</li>
        <li>Izolare în jurul conductelor de ventilație și instalațiilor existente</li>
        <li>Protejare ferestre și suprafețe adiacente pe durata aplicării</li>
      </ul>
      <h3>Rezultate:</h3>
      <ul>
        <li>Strat termoizolant continuu, fără rosturi, pe toată suprafața</li>
        <li>Aderență perfectă pe structura metalică</li>
        <li>Spațiu interior pregătit pentru control termic eficient</li>
      </ul>`,
    keywords: ["termoizolare acoperiș industrial", "izolare hală spumă poliuretanică", "termoizolare structură metalică", "spumă poliuretanică hală"],
    metaTitle: "Termoizolare Acoperiș Industrial cu Spumă Poliuretanică - IsoThermLux",
    metaDescription: "Termoizolare acoperiș industrial cu structură metalică. Spumă poliuretanică aplicată uniform pe toată suprafața. Garanție 25 ani.",
  },
  {
    id: 3,
    title: "Termoizolare Planșeu",
    category: "Termoizolare",
    image: "/images/project-planseu-01.webp",
    images: [
      "/images/project-planseu-01.webp",
      "/images/project-planseu-02.webp",
    ],
    slug: "termoizolare-planseu",
    shortDesc: "Planșeu termoizolat cu spumă poliuretanică, interior și exterior",
    longDesc: `<h2>Termoizolare Planșeu cu Spumă Poliuretanică</h2>
      <p>Termoizolare a unui planșeu, atât pe partea interioară a structurii din lemn, cât și pe suprafața exterioară a planșeului. Aplicarea spumei poliuretanice creează un strat continuu, etanș, care urmează perfect linia căpriorilor și acoperă complet suprafața de beton/zidărie.</p>
      <h3>Lucrări efectuate:</h3>
      <ul>
        <li>Termoizolare interioară a planșeului, pe structura din lemn (căpriori)</li>
        <li>Acoperire completă a pereților de zidărie din zona mansardei</li>
        <li>Termoizolare exterioară a suprafeței planșeului, cu strat uniform pe toată suprafața</li>
        <li>Aplicare atentă în jurul elementelor de structură din lemn</li>
      </ul>
      <h3>Rezultate:</h3>
      <ul>
        <li>Strat termoizolant continuu pe toată suprafața planșeului</li>
        <li>Aderență perfectă atât pe lemn cât și pe zidărie</li>
        <li>Protecție termică completă interior + exterior</li>
      </ul>`,
    keywords: ["termoizolare planșeu", "izolare planșeu spumă poliuretanică", "termoizolare planșeu exterior", "spumă poliuretanică planșeu"],
    metaTitle: "Termoizolare Planșeu cu Spumă Poliuretanică - IsoThermLux",
    metaDescription: "Termoizolare planșeu interior și exterior cu spumă poliuretanică. Strat continuu, etanș, pe toată suprafața. Garanție 25 ani.",
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === "Toate") return projects
  return projects.filter((p) => p.category === category)
}

export function getFeaturedProjects(count: number = 4): Project[] {
  return projects.slice(0, count)
}
