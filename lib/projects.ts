export interface Project {
  id: number
  title: string
  category: "Termoizolare" | "Hidroizolare"
  location: string
  year: number
  image: string
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
    title: "Termoizolare Casa Privată",
    category: "Termoizolare",
    location: "Chișinău, Buiucani",
    year: 2026,
    image: "/images/project-casa-termoizolare-01.jpg",
    slug: "termoizolare-casa-privata",
    shortDesc: "Mansardă 45m² termoizolată complet",
    longDesc: `<h2>Termoizolare Casa Privată - Mansardă 45m²</h2>
      <p>Proiect de termoizolare profesională a unei mansarde private în zona Buiucani din Chișinău. Utilizând spumă poliuretanică de înaltă calitate, am reușit să creez o izolare termică optimă care reduce pierderile de căldură cu pana la 70%.</p>
      
      <h3>Serviciile oferite:</h3>
      <ul>
        <li>Termoizolare cu spumă poliuretanică</li>
        <li>Tratament hidrofob pentru protecție suplimentară</li>
        <li>Finisare cu membrana respirantă</li>
      </ul>
      
      <h3>Rezultate:</h3>
      <ul>
        <li>Reducerea consumului de energie cu 60-70%</li>
        <li>Eliminarea podurilor termice</li>
        <li>Confort termic îmbunătățit</li>
        <li>Spațiu locuibil nou pe mansardă</li>
      </ul>
      
      <p>Locuitorii au observat o reducere semnificativă a facturilor de încălzire și un confort termic mult îmbunătățit pe parcursul iernii.</p>`,
    keywords: [
      "termoizolare mansardă",
      "izolare termică casa",
      "termoizolare Chișinău",
      "spumă poliuretanică",
      "izolare acoperis",
    ],
    metaTitle: "Termoizolare Casa Privată Mansardă 45m² - IsoThermLux",
    metaDescription:
      "Proiect profesional de termoizolare mansardă 45m² în Chișinău. Reducerea consumului de energie cu 70%. Consultație gratuită.",
  },
  {
    id: 2,
    title: "Hidroizolare Fundație",
    category: "Hidroizolare",
    location: "Bălți",
    year: 2026,
    image: "/images/hidroizolare-fundatie-02.jpg",
    slug: "hidroizolare-fundatie",
    shortDesc: "Fundație protejată împotriva infiltrațiilor",
    longDesc: `<h2>Hidroizolare Fundație - Protecție Completă</h2>
      <p>Proiect complex de hidroizolare a fundației unei clădiri în Bălți. Infiltrațiile de apă reprezentau o problemă serioasă care putea duce la deteriorarea structurii. Am implementat o soluție de hidroizolare de înaltă calitate.</p>
      
      <h3>Serviciile efectuate:</h3>
      <ul>
        <li>Curățarea și pregătirea suprafeței</li>
        <li>Aplicare membranei hidroizolatoare elastice</li>
        <li>Protecție mecanică cu plăci de drenaj</li>
        <li>Drenaj perimetral</li>
      </ul>
      
      <h3>Rezultate obținute:</h3>
      <ul>
        <li>Eliminarea completă a infiltrațiilor</li>
        <li>Protecție pe termen lung a structurii</li>
        <li>Previne apariția mucegaiului și umidității</li>
        <li>Extinde durabilitatea fundației</li>
      </ul>
      
      <p>Soluția implementată garantează protecția fundației pentru 25 de ani.</p>`,
    keywords: [
      "hidroizolare fundație",
      "protecție infiltrații",
      "izolare umiditate",
      "drenaj fundație",
      "hidroizolare Bălți",
    ],
    metaTitle: "Hidroizolare Fundație - Protecție Infiltrații - IsoThermLux",
    metaDescription:
      "Proiect hidroizolare fundație în Bălți. Eliminare completă infiltrații. Garanție 25 ani. Consultație gratuită.",
  },
  {
    id: 3,
    title: "Izolare Hală Industrială",
    category: "Termoizolare",
    location: "Chișinău",
    year: 2025,
    image: "/images/project-hala-industrial-02.jpg",
    slug: "izolare-hala-industriala",
    shortDesc: "Hală 200m² termoizolată",
    longDesc: `<h2>Izolare Hală Industrială - 200m²</h2>
      <p>Proiect de termoizolare pentru o hală industrială mare în Chișinău. Izolarea termoizolării acestui spațiu mare a prezentat provocări semnificative. Utilizând echipament profesional și materiale de cea mai bună calitate, am reușit izolarea uniformă a întregii hale.</p>
      
      <h3>Parametrii proiectului:</h3>
      <ul>
        <li>Suprafață: 200 m²</li>
        <li>Material: Spumă poliuretanică densitate 30 kg/m³</li>
        <li>Grosime izolare: 150 mm</li>
        <li>Timp execuție: 5 zile</li>
      </ul>
      
      <h3>Beneficii obținute:</h3>
      <ul>
        <li>Reducerea costurilor energetice cu 65%</li>
        <li>Mediu de lucru confortabil</li>
        <li>Protecție acustică suplimentară</li>
        <li>Protecție la foc ridicată</li>
      </ul>
      
      <p>Hala s-a transformat dintr-un spațiu rece și inconfortabil într-un mediu de lucru controlat termic.</p>`,
    keywords: [
      "izolare hală industrială",
      "termoizolare hală",
      "izolare spații mari",
      "hale industriale",
      "termoizolare Chișinău",
    ],
    metaTitle: "Izolare Hală Industrială 200m² - Termoizolare Profesională",
    metaDescription:
      "Termoizolare hală industrială 200m² cu reducere costuri energetice 65%. Echipă profesională. Garanție 10 ani.",
  },
  {
    id: 4,
    title: "Termoizolare Mansardă",
    category: "Termoizolare",
    location: "Orhei",
    year: 2025,
    image: "/images/project-terasa-izolare-01.jpg",
    slug: "termoizolare-mansarda",
    shortDesc: "Spațiu locuibil cald și confortabil",
    longDesc: `<h2>Termoizolare Mansardă - Transformare Spațiu Locuibil</h2>
      <p>Proiect de transformare a mansardei într-un spațiu locuibil confortabil și cald. Mansarda era nefolosita din cauza temperaturelor extreme. Prin izolare termică profesională, am transformat-o într-o cameră locuibilă cu control termic optim.</p>
      
      <h3>Soluția implementată:</h3>
      <ul>
        <li>Izolare termică cu spumă poliuretanică 120 mm</li>
        <li>Membrana de vapori pentru control umidității</li>
        <li>Finisare interior cu tablă de gips</li>
        <li>Ventilație mecanică controlată</li>
      </ul>
      
      <h3>Rezultate:</h3>
      <ul>
        <li>Temperatură stabilă în toate anotimpurile</li>
        <li>Consum energetic redus cu 55%</li>
        <li>Spațiu curat din punct de vedere acustic</li>
        <li>Eliminarea condensului și mucegaiului</li>
      </ul>
      
      <p>Mansarda este acum un spațiu folosit complet, cu iarnă caldă și vară răcoroasă.</p>`,
    keywords: [
      "termoizolare mansardă",
      "izolare acoperis",
      "spațiu locuibil",
      "mansardă confortabilă",
      "termoizolare Orhei",
    ],
    metaTitle: "Termoizolare Mansardă - Spațiu Locuibil Cald - IsoThermLux",
    metaDescription:
      "Mansardă transformată în spațiu locuibil confortabil. Izolare termică profesională. Reducere energie 55%. Consultație gratuită.",
  },
  {
    id: 5,
    title: "Hidroizolare Acoperiș",
    category: "Hidroizolare",
    location: "Chișinău",
    year: 2023,
    image: "/images/project-acoperis-new.webp",
    slug: "hidroizolare-acoperis",
    shortDesc: "Impermeabilizare completă acoperiș",
    longDesc: `<h2>Hidroizolare Acoperiș - Protec��ie Completă</h2>
      <p>Proiect de hidroizolare a unui acoperiș într-o clădire din Chișinău. Acoperișul vechi prezenta infiltrații de apă care deteriorau structura și interiorul clădirii. Am implementat o soluție modernă de impermeabilizare.</p>
      
      <h3>Lucrările efectuate:</h3>
      <ul>
        <li>Demontarea materialului vechi</li>
        <li>Repararea structurii dacacare era necesară</li>
        <li>Aplicare membranei impermeabile bituminoase</li>
        <li>Protecție mecanică și hidrofobizare</li>
      </ul>
      
      <h3>Avantaje obținute:</h3>
      <ul>
        <li>Eliminarea infiltrațiilor de apă</li>
        <li>Protecție pe 20+ ani</li>
        <li>Rezistență la variațiile de temperatură</li>
        <li>Protecție UV superioară</li>
      </ul>
      
      <p>Acoperișul este acum complet protejat și apa nu mai penetrează în interior.</p>`,
    keywords: [
      "hidroizolare acoperiș",
      "impermeabilizare acoperiș",
      "protecție acoperis",
      "reparație acoperiș",
      "hidroizolare Chișinău",
    ],
    metaTitle: "Hidroizolare Acoperiș - Impermeabilizare Profesională",
    metaDescription:
      "Hidroizolare acoperiș complet. Eliminare infiltrații. Garanție 20 ani. Servicii profesionale în Chișinău.",
  },
  {
    id: 6,
    title: "Subsol Uscat",
    category: "Hidroizolare",
    location: "Bălți",
    year: 2023,
    image: "/images/project-subsol-uscat.png",
    slug: "subsol-uscat",
    shortDesc: "Transformare subsol în spațiu locuibil",
    longDesc: `<h2>Subsol Uscat - Transformare Spațiu Umid</h2>
      <p>Proiect de transformare a unui subsol umed și nefolosit într-un spațiu curat și locuibil. Subsolul era plin de umiditate și mucegai din cauza infiltrațiilor. Am implementat o soluție completă de hidroizolare și ventilație.</p>
      
      <h3>Soluția aplicată:</h3>
      <ul>
        <li>Drenaj perimetral complet</li>
        <li>Hidroizolare interioara si exterioară</li>
        <li>Ventilație mecanică controlată</li>
        <li>Finisare cu materiale izolatoare</li>
      </ul>
      
      <h3>Transformarea realizată:</h3>
      <ul>
        <li>Subsol complet uscat</li>
        <li>Eliminarea mirosului de umiditate</li>
        <li>Spațiu utilizabil pentru depozitare sau locuință</li>
        <li>Protecție pe termen lung</li>
      </ul>
      
      <p>Subsolul este acum un spațiu folosibil și confortabil, cu control complet al umidității.</p>`,
    keywords: [
      "subsol uscat",
      "hidroizolare subsol",
      "eliminare umiditate",
      "drenaj subsol",
      "subsol locuibil",
    ],
    metaTitle: "Subsol Uscat - Hidroizolare și Drenaj - IsoThermLux",
    metaDescription:
      "Subsol transformat în spațiu uscat și locuibil. Soluție completă hidroizolare. Garanție 25 ani.",
  },
  {
    id: 7,
    title: "Casa Completa Renovare",
    category: "Termoizolare",
    location: "Orhei",
    year: 2022,
    image: "/images/project-casa-renovare.webp",
    slug: "casa-completa-renovare",
    shortDesc: "Izolare termică acoperiș + pereți + fundație",
    longDesc: `<h2>Casa Completă Renovare - Izolare Termică Totală</h2>
      <p>Proiect ambiţios de renovare termică completă a unei case. Am izolat termic toți elementele vulnerabile: acoperiș, pereți și fundație. Aceasta este o abordare holistică care asigură o izolare uniformă și eficiență energetică maximă.</p>
      
      <h3>Componentele izolării:</h3>
      <ul>
        <li>Acoperiș: Spumă poliuretanică 150 mm</li>
        <li>Pereți: Spumă poliuretanică 100 mm</li>
        <li>Fundație: Membrana hidroizolatoare + drenaj</li>
      </ul>
      
      <h3>Rezultate obținute:</h3>
      <ul>
        <li>Reducerea consumului energetic cu 75%</li>
        <li>Casa complet protejată termic</li>
        <li>Eliminarea podurilor termice</li>
        <li>Confort maxim în toate anotimpurile</li>
      </ul>
      
      <p>Casa s-a transformat în o locuință modernă, eficientă energetic și confortabilă pe tot parcursul anului.</p>`,
    keywords: [
      "renovare termică completă",
      "izolare casa",
      "termoizolare pereți",
      "izolare acoperiș",
      "eficiență energetică",
    ],
    metaTitle: "Casa Completă Renovare - Izolare Termică Profesională",
    metaDescription:
      "Renovare termică completă: acoperiș, pereți, fundație. Eficiență energetică 75%. Garanție 10 ani.",
  },
  {
    id: 8,
    title: "Birou Comercial",
    category: "Termoizolare",
    location: "Chișinău",
    year: 2022,
    image: "/images/project-birou-comercial.webp",
    slug: "birou-comercial",
    shortDesc: "Renovare complet cu izolare termică",
    longDesc: `<h2>Birou Comercial - Renovare Profesională</h2>
      <p>Proiect de renovare și termoizolare a unui spațiu comercial de birouri în Chișinău. Obiectivul a fost crearea unui mediu de lucru confortabil și eficient energetic pentru angajați.</p>
      
      <h3>Lucrări efectuate:</h3>
      <ul>
        <li>Termoizolare pereți exteriori</li>
        <li>Renovare sisteme de ventilație</li>
        <li>Îmbunătățire iluminare naturală</li>
        <li>Control termic zonizat</li>
      </ul>
      
      <h3>Beneficii pentru companie:</h3>
      <ul>
        <li>Reducerea costurilor operaționale cu 50%</li>
        <li>Mediu de lucru mai confortabil</li>
        <li>Productivitate angajaților îmbunătățită</li>
        <li>Imagine profesională consolidată</li>
      </ul>
      
      <p>Biroul s-a transformat într-un spațiu modern și eficient, cu climat controlat și confort optim.</p>`,
    keywords: [
      "birou comercial",
      "izolare birou",
      "renovare spațiu comercial",
      "eficiență energetică birouri",
      "izolare Chișinău",
    ],
    metaTitle: "Birou Comercial - Izolare Termică Profesională",
    metaDescription:
      "Renovare birou comercial cu izolare termică. Reducere costuri 50%. Mediu lucru confortabil.",
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
