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
    location: "Chișinău, sect. Buiucani",
    year: 2026,
    image: "/images/project-casa-termoizolare-01.webp",
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
    image: "/images/hidroizolare-fundatie-02.webp",
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
    image: "/images/project-hala-industrial-02.webp",
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
    image: "/images/project-terasa-izolare-01.webp",
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
    location: "Chișinău, Centru",
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
    keywords: ["birou comercial", "izolare birou", "renovare spațiu comercial", "eficiență energetică birouri", "izolare Chișinău"],
    metaTitle: "Birou Comercial - Izolare Termică Profesională",
    metaDescription: "Renovare birou comercial cu izolare termică. Reducere costuri 50%. Mediu lucru confortabil.",
  },
  {
    id: 9,
    title: "Termoizolare Casă Privată",
    category: "Termoizolare",
    location: "Cahul, raionul Cahul",
    year: 2025,
    image: "/images/project-casa-termoizolare-01.webp",
    slug: "termoizolare-casa-cahul",
    shortDesc: "Acoperiș și pereți izolați cu spumă poliuretanică",
    longDesc: `<h2>Termoizolare Casă Privată în Cahul</h2>
      <p>Proiect de termoizolare completă a unei case private în Cahul. Am izolat acoperișul și pereții exteriori cu spumă poliuretanică cu celulă închisă, eliminând complet punțile termice.</p>
      <h3>Lucrări efectuate:</h3>
      <ul>
        <li>Termoizolare acoperiș — 120m² spumă celulă închisă 10cm</li>
        <li>Termoizolare pereți exteriori — 160m²</li>
        <li>Sigilare completă a rosturilor și golurilor</li>
      </ul>
      <h3>Rezultate:</h3>
      <ul>
        <li>Reducere consum gaz cu 55%</li>
        <li>Eliminare mucegai și condens</li>
        <li>Temperaturi uniforme în toată casa</li>
      </ul>`,
    keywords: ["termoizolare Cahul", "izolare casa Cahul", "spumă poliuretanică Cahul", "termoizolare raion Cahul"],
    metaTitle: "Termoizolare Casă Privată Cahul - IsoThermLux",
    metaDescription: "Termoizolare casă privată în Cahul cu spumă poliuretanică. Reducere consum energie 55%. Garanție 25 ani.",
  },
  {
    id: 10,
    title: "Hidroizolare Subsol",
    category: "Hidroizolare",
    location: "Ungheni, raionul Ungheni",
    year: 2025,
    image: "/images/project-subsol-uscat.png",
    slug: "hidroizolare-subsol-ungheni",
    shortDesc: "Subsol transformat din umed în uscat",
    longDesc: `<h2>Hidroizolare Subsol în Ungheni</h2>
      <p>Proiect de hidroizolare subsol la o casă privată din Ungheni. Subsolul prezenta umiditate ridicată și infiltrații prin pereți. Am aplicat spumă poliuretanică cu celulă închisă pe toți pereții și tavanul subsolului.</p>
      <h3>Lucrări efectuate:</h3>
      <ul>
        <li>Hidroizolare pereți subsol — spumă celulă închisă 5cm</li>
        <li>Termoizolare tavan subsol</li>
        <li>Sigilare fisuri și rosturi</li>
      </ul>
      <h3>Rezultate:</h3>
      <ul>
        <li>Subsol complet uscat după prima săptămână</li>
        <li>Dispariția mucegaiului</li>
        <li>Parterul cu 3°C mai cald</li>
      </ul>`,
    keywords: ["hidroizolare Ungheni", "subsol uscat Ungheni", "izolare subsol raion Ungheni", "spumă poliuretanică Ungheni"],
    metaTitle: "Hidroizolare Subsol Ungheni - IsoThermLux",
    metaDescription: "Hidroizolare subsol în Ungheni. Subsol uscat garantat. Spumă poliuretanică celulă închisă. Garanție 25 ani.",
  },
  {
    id: 11,
    title: "Termoizolare Hală Agricolă",
    category: "Termoizolare",
    location: "Soroca, raionul Soroca",
    year: 2025,
    image: "/images/project-hala-industrial-02.webp",
    slug: "termoizolare-hala-agricola-soroca",
    shortDesc: "Hală agricolă 350m² izolată termic",
    longDesc: `<h2>Termoizolare Hală Agricolă în Soroca</h2>
      <p>Proiect de termoizolare a unei hale agricole în raionul Soroca. Proprietarul depozita produse agricole care necesitau temperaturi controlate. Am izolat acoperișul și pereții halei cu spumă poliuretanică.</p>
      <h3>Parametrii proiectului:</h3>
      <ul>
        <li>Suprafață acoperiș: 350m²</li>
        <li>Spumă poliuretanică celulă închisă 8cm</li>
        <li>Timp execuție: 3 zile</li>
      </ul>
      <h3>Rezultate:</h3>
      <ul>
        <li>Temperaturi stabile pentru depozitare</li>
        <li>Eliminare condens pe structura metalică</li>
        <li>Economie 60% la încălzire</li>
      </ul>`,
    keywords: ["termoizolare Soroca", "izolare hală Soroca", "termoizolare raion Soroca", "spumă poliuretanică Soroca"],
    metaTitle: "Termoizolare Hală Agricolă Soroca - IsoThermLux",
    metaDescription: "Termoizolare hală agricolă 350m² în Soroca. Temperaturi controlate pentru depozitare. Garanție 25 ani.",
  },
  {
    id: 12,
    title: "Termoizolare Mansardă",
    category: "Termoizolare",
    location: "Strășeni, raionul Strășeni",
    year: 2024,
    image: "/images/project-terasa-izolare-01.webp",
    slug: "termoizolare-mansarda-straseni",
    shortDesc: "Mansardă 60m² transformată în spațiu locuibil",
    longDesc: `<h2>Termoizolare Mansardă în Strășeni</h2>
      <p>Mansarda casei private din Strășeni era nefolosită din cauza frigului iarna și căldurii sufocante vara. Am izolat acoperișul cu spumă poliuretanică celulă deschisă, transformând-o într-o cameră locuibilă confortabilă.</p>
      <h3>Lucrări efectuate:</h3>
      <ul>
        <li>Termoizolare acoperiș înclinat — spumă celulă deschisă 15cm</li>
        <li>Izolare lucarne și ferestre mansardă</li>
        <li>Fonoizolare față de ploaie</li>
      </ul>
      <h3>Rezultate:</h3>
      <ul>
        <li>Cameră locuibilă iarna și vara</li>
        <li>Zgomotul ploii eliminat complet</li>
        <li>Economie 50% la încălzire</li>
      </ul>`,
    keywords: ["termoizolare Strășeni", "mansardă Strășeni", "izolare raion Strășeni", "spumă poliuretanică Strășeni"],
    metaTitle: "Termoizolare Mansardă Strășeni - IsoThermLux",
    metaDescription: "Termoizolare mansardă în Strășeni. Spațiu locuibil din pod. Spumă poliuretanică celulă deschisă. Garanție 25 ani.",
  },
  {
    id: 13,
    title: "Hidroizolare Fundație Casă",
    category: "Hidroizolare",
    location: "Ialoveni, raionul Ialoveni",
    year: 2024,
    image: "/images/hidroizolare-fundatie-02.webp",
    slug: "hidroizolare-fundatie-ialoveni",
    shortDesc: "Fundație protejată împotriva apelor subterane",
    longDesc: `<h2>Hidroizolare Fundație în Ialoveni</h2>
      <p>Casa din Ialoveni suferea de infiltrații prin fundație din cauza nivelului ridicat al apelor subterane. Am aplicat spumă poliuretanică cu celulă închisă pe exteriorul fundației, completat cu drenaj perimetral.</p>
      <h3>Lucrări efectuate:</h3>
      <ul>
        <li>Excavare perimetrală fundație</li>
        <li>Hidroizolare exterioară — spumă celulă închisă 6cm</li>
        <li>Drenaj perimetral cu tub flexibil</li>
        <li>Umplere și compactare</li>
      </ul>
      <h3>Rezultate:</h3>
      <ul>
        <li>Zero infiltrații după lucrare</li>
        <li>Subsol uscat complet</li>
        <li>Structură protejată pe 25 ani</li>
      </ul>`,
    keywords: ["hidroizolare Ialoveni", "fundație Ialoveni", "izolare raion Ialoveni", "spumă poliuretanică Ialoveni"],
    metaTitle: "Hidroizolare Fundație Ialoveni - IsoThermLux",
    metaDescription: "Hidroizolare fundație în Ialoveni. Protecție ape subterane. Spumă poliuretanică celulă închisă. Garanție 25 ani.",
  },
  {
    id: 14,
    title: "Termoizolare Casă Privată",
    category: "Termoizolare",
    location: "Hîncești, raionul Hîncești",
    year: 2024,
    image: "/images/project-casa-termoizolare-01.webp",
    slug: "termoizolare-casa-hincesti",
    shortDesc: "Casă complet izolată — acoperiș + pereți",
    longDesc: `<h2>Termoizolare Casă Privată în Hîncești</h2>
      <p>Proiect complet de termoizolare a unei case cu etaj din Hîncești. Proprietarii se plângeau de facturi mari la gaz și temperaturi neuniforme între camere. Soluția: spumă poliuretanică pe acoperiș și pereți exteriori.</p>
      <h3>Lucrări efectuate:</h3>
      <ul>
        <li>Termoizolare acoperiș 180m² — celulă închisă 10cm</li>
        <li>Termoizolare pereți exteriori 220m²</li>
        <li>Tratament anticoroziv structură metalică</li>
      </ul>
      <h3>Rezultate:</h3>
      <ul>
        <li>Factură gaz redusă cu 58%</li>
        <li>Temperaturi uniforme în toate camerele</li>
        <li>Casa caldă și fără curenți</li>
      </ul>`,
    keywords: ["termoizolare Hîncești", "izolare casă Hîncești", "raion Hîncești izolare", "spumă poliuretanică Hîncești"],
    metaTitle: "Termoizolare Casă Privată Hîncești - IsoThermLux",
    metaDescription: "Termoizolare casă privată în Hîncești. Reducere factură gaz 58%. Spumă poliuretanică. Garanție 25 ani.",
  },
  {
    id: 15,
    title: "Termoizolare Depozit",
    category: "Termoizolare",
    location: "Edineț, raionul Edineț",
    year: 2024,
    image: "/images/project-hala-industrial-02.webp",
    slug: "termoizolare-depozit-edinet",
    shortDesc: "Depozit 500m² izolat termic",
    longDesc: `<h2>Termoizolare Depozit în Edineț</h2>
      <p>Depozit de materiale de construcții din Edineț cu probleme grave de condens pe structura metalică. Am izolat complet acoperișul și pereții metalici cu spumă poliuretanică celulă închisă.</p>
      <h3>Parametrii proiectului:</h3>
      <ul>
        <li>Suprafață totală: 500m²</li>
        <li>Spumă celulă închisă 6cm pe structura metalică</li>
        <li>Timp execuție: 4 zile</li>
      </ul>
      <h3>Rezultate:</h3>
      <ul>
        <li>Condens eliminat complet</li>
        <li>Structura metalică protejată de rugină</li>
        <li>Temperaturi stabile pentru depozitare</li>
      </ul>`,
    keywords: ["termoizolare Edineț", "depozit Edineț izolare", "raion Edineț termoizolare", "spumă poliuretanică Edineț"],
    metaTitle: "Termoizolare Depozit Edineț - IsoThermLux",
    metaDescription: "Termoizolare depozit 500m² în Edineț. Eliminare condens structură metalică. Garanție 25 ani.",
  },
  {
    id: 16,
    title: "Termoizolare Acoperiș",
    category: "Termoizolare",
    location: "Drochia, raionul Drochia",
    year: 2024,
    image: "/images/project-terasa-izolare-01.webp",
    slug: "termoizolare-acoperis-drochia",
    shortDesc: "Acoperiș metalic izolat contra condensului",
    longDesc: `<h2>Termoizolare Acoperiș Metalic în Drochia</h2>
      <p>Casa din Drochia cu acoperiș metalic suferea de condens masiv iarna și căldură extremă vara. Spuma poliuretanică aplicată direct pe tablă a rezolvat ambele probleme simultan.</p>
      <h3>Lucrări efectuate:</h3>
      <ul>
        <li>Termoizolare tablă metalică — spumă celulă închisă 8cm</li>
        <li>Sigilare completă coame și margini</li>
        <li>Finisaj vopsea poliuretanică</li>
      </ul>
      <h3>Rezultate:</h3>
      <ul>
        <li>Zero condens iarna</li>
        <li>Vara cu 8°C mai răcoros în interior</li>
        <li>Zgomot ploaie eliminat complet</li>
      </ul>`,
    keywords: ["termoizolare Drochia", "acoperiș metalic Drochia", "raion Drochia izolare", "spumă poliuretanică Drochia"],
    metaTitle: "Termoizolare Acoperiș Metalic Drochia - IsoThermLux",
    metaDescription: "Termoizolare acoperiș metalic în Drochia. Stop condens și căldură. Spumă poliuretanică. Garanție 25 ani.",
  },
  {
    id: 17,
    title: "Hidroizolare Terasă",
    category: "Hidroizolare",
    location: "Florești, raionul Florești",
    year: 2023,
    image: "/images/project-acoperis-new.webp",
    slug: "hidroizolare-terasa-floresti",
    shortDesc: "Terasă plată impermeabilizată complet",
    longDesc: `<h2>Hidroizolare Terasă în Florești</h2>
      <p>Blocul de locuințe din Florești cu terasă plată prezenta infiltrații la ultimul etaj. Am hidroizolat terasa cu spumă poliuretanică cu celulă închisă, creând o barieră impermeabilă continuă.</p>
      <h3>Lucrări efectuate:</h3>
      <ul>
        <li>Curățare și pregătire suprafață terasă</li>
        <li>Aplicare spumă celulă închisă 5cm</li>
        <li>Strat de protecție poliureică</li>
      </ul>
      <h3>Rezultate:</h3>
      <ul>
        <li>Zero infiltrații la ultimul etaj</li>
        <li>Suprafață perfect impermeabilă</li>
        <li>Garanție 25 ani</li>
      </ul>`,
    keywords: ["hidroizolare Florești", "terasă Florești", "raion Florești hidroizolare", "spumă poliuretanică Florești"],
    metaTitle: "Hidroizolare Terasă Florești - IsoThermLux",
    metaDescription: "Hidroizolare terasă în Florești. Stop infiltrații la ultimul etaj. Spumă poliuretanică. Garanție 25 ani.",
  },
  {
    id: 18,
    title: "Termoizolare Casă",
    category: "Termoizolare",
    location: "Rezina, raionul Rezina",
    year: 2023,
    image: "/images/project-casa-termoizolare-01.webp",
    slug: "termoizolare-casa-rezina",
    shortDesc: "Casă veche renovată termic cu spumă",
    longDesc: `<h2>Termoizolare Casă Veche în Rezina</h2>
      <p>Casă din anii '80 din Rezina cu pereți din cărămidă neizolați. Proprietarii doreau să reducă dramatic facturile la gaz. Am izolat pe exterior pereții și acoperișul cu spumă poliuretanică.</p>
      <h3>Lucrări efectuate:</h3>
      <ul>
        <li>Termoizolare pereți exteriori din cărămidă — 8cm spumă</li>
        <li>Termoizolare acoperiș — 10cm spumă celulă deschisă</li>
        <li>Tencuială decorativă finală</li>
      </ul>
      <h3>Rezultate:</h3>
      <ul>
        <li>Factură gaz redusă de la 4000 lei la 1800 lei/lună</li>
        <li>Casa caldă uniform în toate camerele</li>
        <li>Aspect renovat modern</li>
      </ul>`,
    keywords: ["termoizolare Rezina", "casă veche Rezina izolare", "raion Rezina termoizolare", "spumă poliuretanică Rezina"],
    metaTitle: "Termoizolare Casă Rezina - IsoThermLux",
    metaDescription: "Termoizolare casă veche în Rezina. Factură gaz redusă la jumătate. Spumă poliuretanică. Garanție 25 ani.",
  },
  {
    id: 19,
    title: "Termoizolare Vilă",
    category: "Termoizolare",
    location: "Codru, Chișinău",
    year: 2026,
    image: "/images/project-casa-termoizolare-01.webp",
    slug: "termoizolare-vila-codru",
    shortDesc: "Vilă 250m² izolată complet cu spumă",
    longDesc: `<h2>Termoizolare Vilă în Codru, Chișinău</h2>
      <p>Vilă de 250m² din sectorul Codru al Chișinăului cu probleme de pierderi termice prin acoperiș și mansardă. Am realizat izolația completă cu spumă poliuretanică cu celulă închisă de înaltă densitate.</p>
      <h3>Lucrări efectuate:</h3>
      <ul>
        <li>Termoizolare mansardă 130m² — celulă deschisă 15cm</li>
        <li>Termoizolare pereți exteriori 300m²</li>
        <li>Izolare pod și planșeu</li>
      </ul>
      <h3>Rezultate:</h3>
      <ul>
        <li>Economie 65% la energia termică</li>
        <li>Confort termic premium în toată vila</li>
        <li>Temperaturi stabile iarna și vara</li>
      </ul>`,
    keywords: ["termoizolare Codru", "vilă Codru izolare", "termoizolare Chișinău Codru", "spumă poliuretanică Codru"],
    metaTitle: "Termoizolare Vilă Codru Chișinău - IsoThermLux",
    metaDescription: "Termoizolare vilă 250m² în Codru, Chișinău. Economie 65% energie. Spumă poliuretanică. Garanție 25 ani.",
  },
  {
    id: 20,
    title: "Termoizolare Bloc Apartamente",
    category: "Termoizolare",
    location: "Bălți, Centru",
    year: 2026,
    image: "/images/project-hala-industrial-02.webp",
    slug: "termoizolare-bloc-balti",
    shortDesc: "Bloc de 5 etaje izolat termic pe exterior",
    longDesc: `<h2>Termoizolare Bloc de Apartamente în Bălți</h2>
      <p>Bloc cu 5 etaje din centrul orașului Bălți cu pereți neizolați. Asociația de locatari a decis izolarea completă a blocului pentru reducerea facturilor la căldură. Am izolat toată fațada cu spumă poliuretanică.</p>
      <h3>Parametrii proiectului:</h3>
      <ul>
        <li>Suprafață fațadă: 800m²</li>
        <li>Spumă celulă închisă 10cm</li>
        <li>Tencuială decorativă finală</li>
        <li>Timp execuție: 8 zile</li>
      </ul>
      <h3>Rezultate:</h3>
      <ul>
        <li>Economie medie 45% per apartament</li>
        <li>Bloc renovat cu aspect modern</li>
        <li>Valoare imobiliară crescută</li>
      </ul>`,
    keywords: ["termoizolare bloc Bălți", "izolare fațadă Bălți", "bloc apartamente Bălți", "spumă poliuretanică Bălți"],
    metaTitle: "Termoizolare Bloc Apartamente Bălți - IsoThermLux",
    metaDescription: "Termoizolare bloc 5 etaje în Bălți. Economie 45% per apartament. Spumă poliuretanică. Garanție 25 ani.",
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
