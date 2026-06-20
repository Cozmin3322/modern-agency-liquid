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
    title: "Tavan Restaurant",
    category: "Termoizolare",
    image: "/images/project-acoperis-industrial-01.webp",
    images: [
      "/images/project-acoperis-industrial-01.webp",
      "/images/project-acoperis-industrial-02.webp",
      "/images/project-acoperis-industrial-03.webp",
      "/images/project-acoperis-industrial-04.webp",
    ],
    slug: "tavan-restaurant",
    shortDesc: "Tavan restaurant cu structură metalică termoizolat complet",
    longDesc: `<h2>Termoizolare Tavan Restaurant cu Spumă Poliuretanică</h2>
      <p>Termoizolare a tavanului unui restaurant cu structură metalică, prin aplicarea spumei poliuretanice direct pe suprafața interioară. Spuma aderă perfect pe panourile metalice și urmează linia structurii, creând un strat continuu și uniform pe toată deschiderea spațiului.</p>
      <h3>Lucrări efectuate:</h3>
      <ul>
        <li>Termoizolare completă a suprafeței interioare a tavanului metalic</li>
        <li>Acoperire uniformă pe toată deschiderea, între grinzile structurii metalice</li>
        <li>Izolare în jurul conductelor de ventilație și instalațiilor existente</li>
        <li>Protejare ferestre, mobilier și suprafețe adiacente pe durata aplicării</li>
      </ul>
      <h3>Rezultate:</h3>
      <ul>
        <li>Strat termoizolant continuu, fără rosturi, pe toată suprafața</li>
        <li>Aderență perfectă pe structura metalică</li>
        <li>Spațiu pregătit pentru confort termic optim al clienților</li>
      </ul>`,
    keywords: ["termoizolare tavan restaurant", "izolare restaurant spumă poliuretanică", "termoizolare structură metalică", "spumă poliuretanică restaurant"],
    metaTitle: "Termoizolare Tavan Restaurant cu Spumă Poliuretanică - IsoThermLux",
    metaDescription: "Termoizolare tavan restaurant cu structură metalică. Spumă poliuretanică aplicată uniform pe toată suprafața. Garanție 25 ani.",
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
  {
    id: 4,
    title: "Termoizolare Acoperiș Plat",
    category: "Termoizolare",
    image: "/images/project-acoperis-plat-01.webp",
    images: [
      "/images/project-acoperis-plat-01.webp",
    ],
    slug: "termoizolare-acoperis-plat",
    shortDesc: "Acoperiș plat termoizolat, pregătit pentru panouri solare",
    longDesc: `<h2>Termoizolare Acoperiș Plat cu Spumă Poliuretanică</h2>
      <p>Termoizolare a unui acoperiș plat de bloc, prin aplicarea spumei poliuretanice pe toată suprafața. Spuma creează un strat continuu, uniform, care urmează structura existentă a acoperișului, inclusiv elementele de prindere pentru sistemele montate pe acoperiș (precum suporții pentru panouri solare).</p>
      <h3>Lucrări efectuate:</h3>
      <ul>
        <li>Termoizolare completă a suprafeței acoperișului plat</li>
        <li>Acoperire uniformă în jurul elementelor de structură și prindere existente</li>
        <li>Strat continuu, fără rosturi, pe toată deschiderea acoperișului</li>
      </ul>
      <h3>Rezultate:</h3>
      <ul>
        <li>Suprafață termoizolată complet, pregătită pentru montaj echipamente</li>
        <li>Strat uniform, rezistent la intemperii</li>
        <li>Aderență perfectă pe suportul existent al acoperișului</li>
      </ul>`,
    keywords: ["termoizolare acoperiș plat", "izolare acoperiș bloc spumă poliuretanică", "termoizolare terasă", "spumă poliuretanică acoperiș plat"],
    metaTitle: "Termoizolare Acoperiș Plat cu Spumă Poliuretanică - IsoThermLux",
    metaDescription: "Termoizolare acoperiș plat cu spumă poliuretanică. Strat continuu și uniform pe toată suprafața. Garanție 25 ani.",
  },
  {
    id: 5,
    title: "Termoizolare Fundație",
    category: "Termoizolare",
    image: "/images/project-fundatie-noua-01.webp",
    images: [
      "/images/project-fundatie-noua-01.webp",
    ],
    slug: "termoizolare-fundatie",
    shortDesc: "Fundație termoizolată cu spumă poliuretanică celulă închisă",
    longDesc: `<h2>Termoizolare Fundație cu Spumă Poliuretanică Celulă Închisă</h2>
      <p>Termoizolare a pereților de fundație ai unei construcții, prin aplicarea spumei poliuretanice cu celulă închisă direct pe suprafața de beton. Spuma creează un strat continuu, impermeabil, care protejează fundația atât termic, cât și împotriva umidității din sol.</p>
      <h3>Lucrări efectuate:</h3>
      <ul>
        <li>Termoizolare completă a suprafeței exterioare a fundației</li>
        <li>Acoperire uniformă pe colțuri și suprafețe verticale</li>
        <li>Strat continuu, fără rosturi, rezistent la umiditate</li>
      </ul>
      <h3>Rezultate:</h3>
      <ul>
        <li>Protecție termică și barieră contra umidității în același strat</li>
        <li>Aderență perfectă pe suprafața de beton</li>
        <li>Fundație pregătită pentru umplutură și finisaje ulterioare</li>
      </ul>`,
    keywords: ["termoizolare fundație", "izolare fundație spumă poliuretanică", "termoizolare fundație celulă închisă", "spumă poliuretanică fundație"],
    metaTitle: "Termoizolare Fundație cu Spumă Poliuretanică - IsoThermLux",
    metaDescription: "Termoizolare fundație cu spumă poliuretanică celulă închisă. Protecție termică și contra umidității. Garanție 25 ani.",
  },
  {
    id: 6,
    title: "Termoizolare Mansardă",
    category: "Termoizolare",
    image: "/images/project-mansarda-2-01.webp",
    images: [
      "/images/project-mansarda-2-01.webp",
    ],
    slug: "termoizolare-mansarda-2",
    shortDesc: "Mansardă cu structură pe stâlpi, termoizolată complet",
    longDesc: `<h2>Termoizolare Mansardă cu Spumă Poliuretanică</h2>
      <p>Termoizolare a unei mansarde cu structură de acoperiș pe stâlpi din lemn, prin aplicarea spumei poliuretanice direct pe suprafața interioară a acoperișului. Spuma acoperă uniform toată suprafața înclinată, urmărind perfect linia șarpantei.</p>
      <h3>Lucrări efectuate:</h3>
      <ul>
        <li>Termoizolare completă a suprafeței interioare a acoperișului</li>
        <li>Acoperire uniformă pe toată deschiderea mansardei</li>
        <li>Aplicare atentă în jurul stâlpilor de susținere din lemn</li>
      </ul>
      <h3>Rezultate:</h3>
      <ul>
        <li>Strat termoizolant continuu, fără rosturi, pe toată suprafața</li>
        <li>Aderență perfectă pe structura din lemn</li>
        <li>Spațiu pregătit pentru control termic optim</li>
      </ul>`,
    keywords: ["termoizolare mansardă", "izolare pod spumă poliuretanică", "termoizolare acoperiș lemn", "spumă poliuretanică mansardă"],
    metaTitle: "Termoizolare Mansardă cu Spumă Poliuretanică - IsoThermLux",
    metaDescription: "Termoizolare mansardă completă cu spumă poliuretanică. Acoperire uniformă a structurii din lemn. Garanție 25 ani.",
  },
  {
    id: 7,
    title: "Termoizolare Planșeu",
    category: "Termoizolare",
    image: "/images/project-planseu-2-01.webp",
    images: [
      "/images/project-planseu-2-01.webp",
    ],
    slug: "termoizolare-planseu-2",
    shortDesc: "Planșeu pe structură din lemn, termoizolat complet",
    longDesc: `<h2>Termoizolare Planșeu cu Spumă Poliuretanică</h2>
      <p>Termoizolare a unui planșeu pe structură din lemn, prin aplicarea spumei poliuretanice pe toată suprafața orizontală a podelei mansardei. Spuma creează un strat continuu și uniform între grinzile structurii, urmărind perfect linia podelei.</p>
      <h3>Lucrări efectuate:</h3>
      <ul>
        <li>Termoizolare completă a suprafeței planșeului pe structură din lemn</li>
        <li>Acoperire uniformă pe toată suprafața, între grinzile podelei</li>
        <li>Aplicare atentă în zona șarpantei și a elementelor de structură</li>
      </ul>
      <h3>Rezultate:</h3>
      <ul>
        <li>Strat termoizolant continuu, fără rosturi, pe toată suprafața</li>
        <li>Aderență perfectă pe structura din lemn</li>
        <li>Planșeu pregătit pentru control termic optim</li>
      </ul>`,
    keywords: ["termoizolare planșeu", "izolare planșeu spumă poliuretanică", "termoizolare planșeu lemn", "spumă poliuretanică planșeu"],
    metaTitle: "Termoizolare Planșeu cu Spumă Poliuretanică - IsoThermLux",
    metaDescription: "Termoizolare planșeu pe structură din lemn cu spumă poliuretanică. Strat continuu pe toată suprafața. Garanție 25 ani.",
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
