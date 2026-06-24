import { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Calendar, User, ArrowLeft } from 'lucide-react'

interface BlogArticle {
  title: string
  author: string
  date: string
  readTime: string
  image: string
  content: string
  excerpt: string
  keywords: string
}

const articles: Record<string, BlogArticle> = {
  'termoizolare-casa-ghid-complet': {
    title: 'Termoizolare cu Spumă Poliuretanică: Ghidul Complet',
    author: 'IsoThermLux Team',
    date: '15 ianuarie 2024',
    readTime: '5 min',
    image: '/images/gallery/termo-02.webp',
    excerpt: 'Descoperă cum funcționează termoizolarea cu spumă poliuretanică, beneficiile complete și cum economisești 40-50% la energie.',
    keywords: 'termoizolare, spumă poliuretanică, izolare termică, ghid complet, economia de energie, izolație casă',
    content: `
      <h2>Ce este Termoizolarea?</h2>
      <p>Termoizolarea este un proces de aplicare a unui material izolator pentru a reduce transferul de căldură între interior și exterior. Cea mai eficientă și modernă metodă este folosirea spumei poliuretanice.</p>

      <h2>Beneficiile Termoizolării</h2>
      <ul>
        <li><strong>Economie de energie:</strong> Reducere de 40-50% la costurile de încălzire</li>
        <li><strong>Confort termic:</strong> Temperatură constantă în toată casa</li>
        <li><strong>Fără punți termice:</strong> Spuma se adaptează la orice formă</li>
        <li><strong>Durabilitate:</strong> Garanție 25 de ani cu materiale premium certificate ISO 9001</li>
      </ul>

      <h2>Cum Funcționează Spuma Poliuretanică?</h2>
      <p>Spuma poliuretanică se aplică prin pulverizare. Ea se extinde și umple toate micile goluri, creând o barieră termică completă fără fisuri. Procesul durează 1-2 zile și nu necesită dezlipire a pereților vechi.</p>

      <h2>Costuri și ROI</h2>
      <p>Investiția în termoizolare se recuperează în 2-3 ani prin economiile la facturile de gaz. După aceea, beneficiezi de energie ieftină pentru următorii 25 de ani.</p>

      <h2>De Ce Alege IsoThermLux?</h2>
      <p>Noi folosim spumă poliuretanică certificată ISO 9001. Echipa noastră are 14 ani de experiență cu 3971 de proiecte finalizate. Oferim garanție scrisă de 25 de ani pe toată lucrarea.</p>
    `,
  },
  'hidroizolare-fundatie-protectie': {
    title: 'Hidroizolare Profesională: Protejează Fundația Casei',
    author: 'IsoThermLux Team',
    date: '12 ianuarie 2024',
    readTime: '4 min',
    image: '/images/gallery/hidro-01.webp',
    excerpt: 'Ce este hidroizolarea și de ce este esențială pentru protecția proprietății tale. Metode, costuri și beneficii.',
    keywords: 'hidroizolare, fundație, protecție umiditate, infiltrații apă, hidroizolare subsol, profesională',
    content: `
      <h2>De Unde Vin Pierderile de Căldură?</h2>
      <p>Hidroizolarea este procesul de protejare a structurilor contra infiltrării apei. Este una dintre cele mai importante investiții pe care o poți face pentru a proteja casa ta pe termen lung.</p>

      <h2>Semnele că Ai Nevoie de Hidroizolare</h2>
      <ul>
        <li>Pereți uzi în subsol sau la bază</li>
        <li>Mirosuri de mucegai</li>
        <li>Eflorescență (pete albe pe perete)</li>
        <li>Ape subterane care cresc în primăvară</li>
      </ul>

      <h2>Metode de Hidroizolare</h2>
      <p><strong>Interior:</strong> Aplicare pe pereții interiori (mai economic, mai rapid)</p>
      <p><strong>Exterior:</strong> Excavare și protecție pe exterior (mai durabil, mai scump)</p>
      <p><strong>Combinat:</strong> Exterior + interior pentru protecție maximă</p>

      <h2>Costuri și Beneficii</h2>
      <p>Hidroizolarea protejează investiția ta într-o casă. Un subsol uscat poate fi transformat în spațiu locuibil suplimentar, crescând valoarea proprietății.</p>

      <h2>Contactează-ne pentru Evaluare</h2>
      <p>Oferim consultații gratuite pe loc. Vom evalua situația și recomanda cea mai bună soluție pentru casa ta.</p>
    `,
  },
  'economii-45-50-procent-gaz-termoizolare': {
    title: 'Cum să Economisești 40-50% la Factura de Gaz cu Termoizolare',
    author: 'IsoThermLux Team',
    date: '10 ianuarie 2024',
    readTime: '6 min',
    image: '/images/gallery/termo-10.webp',
    excerpt: 'Calculează exact cât vei economisi și cum se recuperează investiția în termoizolare în 2-3 ani.',
    keywords: 'economie gaz, termoizolare, ROI, eficiență energetică, costuri termoizolare, recuperare investiție',
    content: `
      <h2>De Unde Vin Pierderile de Căldură?</h2>
      <ul>
        <li>Acoperis și mansardă: 25-30%</li>
        <li>Pereți: 20-25%</li>
        <li>Ferestre și usi: 15-20%</li>
        <li>Subsol și fundație: 10-15%</li>
      </ul>

      <h2>Calculul Economiilor</h2>
      <p>Dacă plătești 5000 MDL anual pentru gaz, cu termoizolare poți economisi 2000-2500 MDL. Investiția se recuperează în 2-3 ani.</p>

      <h2>Estimarea Economiilor</h2>
      <p>Contactează-ne pentru o estimare exactă a economiilor tale, în funcție de suprafață și locație.</p>

      <h2>Exemplu Practic</h2>
      <p><strong>Casa:</strong> 150 m² locuibili</p>
      <p><strong>Factură gaz actual:</strong> 5000 MDL/an</p>
      <p><strong>După termoizolare:</strong> 2750 MDL/an (45% economie)</p>
      <p><strong>Investiție termoizolare:</strong> 45000 MDL (300 MDL/m²)</p>
      <p><strong>Recuperată în:</strong> 2 ani</p>

      <h2>Beneficii pe Termen Lung</h2>
      <p>După recuperarea investiției, economisești 2250 MDL anual pentru 24 de ani - total 54000 MDL cu garanție completă.</p>
    `,
  },
  'izolare-mansarda-spatiu-locuibil': {
    title: 'Izolarea Mansardei: Soluția Pentru Spațiu Locuibil',
    author: 'IsoThermLux Team',
    date: '8 ianuarie 2024',
    readTime: '5 min',
    image: '/images/gallery/termo-12.webp',
    excerpt: 'Transformă mansarda ta într-un spațiu confortabil și locuibil cu izolație termică profesională.',
    keywords: 'izolare mansardă, spațiu locuibil, termoizolare mansardă, confort termic, spumă poliuretanică',
    content: `
      <h2>Transformă Mansarda în Cameră</h2>
      <p>Mansarda nedezoltată este o risipă de spațiu valoros. Termoizolarea profesională transformă mansarda într-o cameră confortabilă și caldă.</p>

      <h2>Avantajele Mansardei Izolate</h2>
      <ul>
        <li>Camere suplimentare pentru familie</li>
        <li>Birou sau spațiu de lucru</li>
        <li>Recămaturi pentru oaspeți</li>
        <li>Incrementare valoare proprietății cu 15-20%</li>
      </ul>

      <h2>Tehnologia de Izolare</h2>
      <p>Spuma poliuretanică este ideală pentru mansarde deoarece se adaptează la orice formă și unghi al acoperișului, creând etanșeitate completă.</p>

      <h2>Proces de Lucru</h2>
      <ol>
        <li>Evaluare și măsurare suprafeței</li>
        <li>Preparare spațiului</li>
        <li>Aplicare spumă poliuretanică în straturi</li>
        <li>Finisare și verificare calitate</li>
      </ol>

      <h2>Rezultate</h2>
      <p>După izolare, mansarda va fi confortabilă în orice anotimp. Temperatura va fi 5-10°C mai mare iarna și mai rece vara comparativ cu înainte.</p>
    `,
  },
  'materiale-basf-iso-9001-calitate': {
    title: 'Materiale Premium Certificate ISO 9001 - Garantia Calității',
    author: 'IsoThermLux Team',
    date: '5 ianuarie 2024',
    readTime: '4 min',
    image: '/images/gallery/termo-14.webp',
    excerpt: 'Spumă poliuretanică certificată ISO 9001 garantează calitate și durabilitate. De ce alegem doar materiale premium.',
    keywords: 'ISO 9001, materiale premium, spumă poliuretanică, calitate, durabilitate, garanție 25 ani',
    content: `
      <h2>Angajament Față de Calitate</h2>
      <p>IsoThermLux nu acceptă compromisuri atunci când vine vorba de calitate. De aceea folosim exclusiv spumă poliuretanică certificată ISO 9001 pentru fiecare proiect.</p>

      <h2>Care Este Certificarea ISO 9001?</h2>
      <p>ISO 9001 este certificarea internațională care garantează calitatea materialelor și proceselor de management. Aceasta asigură că produsele respectă standardele globale de calitate și durabilitate.</p>

      <h2>De Ce Materiale Premium Certificate?</h2>
      <ul>
        <li><strong>Calitate Premium:</strong> Materiale testate și certificate</li>
        <li><strong>Durabilitate Dovedită:</strong> 25+ ani de viață utilă</li>
        <li><strong>ISO 9001 Certificat:</strong> Procese de producție standardizate</li>
        <li><strong>Performanță Superioară:</strong> Coeficient termic optim</li>
        <li><strong>Sustenabilitate:</strong> Materiale eco-responsabile</li>
      </ul>

      <h2>Certificare ISO 9001</h2>
      <p>Certificarea ISO 9001 înseamnă că producția urmează standarde de calitate internaționale riguroase. Fiecare lot de material este testat și verificat.</p>

      <h2>Garanția Noastră</h2>
      <p>Grație materialelor premium certificate ISO 9001, IsoThermLux oferă garanție de 25 de ani pentru toate lucrările. Aceasta este cea mai lungă garanție din industrie.</p>
    `,
  },
  'garantie-25-ani-protectie-investitie': {
    title: 'Garanție de 25 de Ani: Cum Protejezi Investiția Ta',
    author: 'IsoThermLux Team',
    date: '2 ianuarie 2024',
    readTime: '5 min',
    image: '/images/gallery/termo-17.webp',
    excerpt: 'Garanție scrisă de 25 de ani pe material și manoperă. Protecție completă pentru investiția ta în termoizolare.',
    keywords: 'garanție 25 ani, protecție investiție, durabilitate, asigurare calitate, termoizolare garantat',
    content: `
      <h2>Protecție Completă a Investiției</h2>
      <p>IsoThermLux oferă garanție scrisă de 25 de ani pentru toate lucrarile de termoizolare și hidroizolare. Aceasta este una dintre cele mai lungi garanții disponibile pe piață.</p>

      <h2>Ce Acoperă Garanția?</h2>
      <ul>
        <li><strong>Material:</strong> Spuma poliuretanică și alte materiale utilizate</li>
        <li><strong>Manopera:</strong> Munca executată de echipa noastră</li>
        <li><strong>Performanță Termică:</strong> Proprietăți izolatoare garantate</li>
        <li><strong>Defecte de Fabricație:</strong> Orice problemă din vina noastră</li>
      </ul>

      <h2>Ce NU Acoperă Garanția?</h2>
      <ul>
        <li>Deteriorări cauzate de catastrofe naturale</li>
        <li>Modificări neautorizate ale lucrărilor</li>
        <li>Daunele cauzate de terți</li>
        <li>Uzura naturală după 25 de ani</li>
      </ul>

      <h2>Cum Funcționează?</h2>
      <p>După finalizarea lucrărilor, primești un certificat de garanție. În caz de problemă, contactează IsoThermLux și trimitem specialiștii pentru evaluare și reparații.</p>

      <h2>De Ce 25 de Ani?</h2>
      <p>Durata de 25 de ani corespunde vieții utile reale a spumei poliuretanice premium certificate ISO 9001. După teste și cercetări, aceasta este perioada în care performanța rămâne optimă.</p>

      <h2>Alătură-te Miilor de Clienți Mulțumiți</h2>
      <p>Contactează-ne astazi pentru a afla mai mult despre garanția noastră și cum poți proteja investiția ta pe termen lung.</p>
    `,
  },
  'celula-deschisa-vs-inchisa-diferente': {
    title: 'Spumă cu Celulă Deschisă vs Celulă Închisă: Care e Potrivită pentru Tine?',
    author: 'IsoThermLux Team',
    date: '28 ianuarie 2024',
    readTime: '6 min',
    image: '/images/gallery/termo-26.webp',
    excerpt: 'Diferențele reale dintre cele două tipuri de spumă poliuretanică și cum alegi varianta corectă pentru acoperiș, pereți sau fundație.',
    keywords: 'celulă deschisă, celulă închisă, spumă poliuretanică, diferențe izolare, alegere material izolator',
    content: `
      <h2>Două Tehnologii, Două Utilizări Diferite</h2>
      <p>Spuma poliuretanică se aplică în două variante principale: celulă deschisă și celulă închisă. Alegerea greșită poate însemna fie costuri inutile, fie o izolare insuficientă.</p>

      <h2>Spuma cu Celulă Deschisă</h2>
      <ul>
        <li>Structură mai ușoară, expandare mare</li>
        <li>Cost mai redus pe metru pătrat</li>
        <li>Ideală pentru poduri, mansarde, interior pereți</li>
        <li>Permite o ușoară respirație a structurii</li>
      </ul>

      <h2>Spuma cu Celulă Închisă</h2>
      <ul>
        <li>Densitate mare, rezistență structurală</li>
        <li>Bariera completă împotriva umidității</li>
        <li>Recomandată pentru fundații, subsoluri, exterior</li>
        <li>Coeficient de izolare termică superior pe centimetru</li>
      </ul>

      <h2>Cum Alegi Varianta Corectă?</h2>
      <p>Pentru zonele expuse la umiditate (fundații, subsoluri, terase) recomandăm celulă închisă. Pentru poduri, mansarde și pereți interiori, celulă deschisă oferă un raport calitate-preț excelent.</p>

      <h2>Recomandarea IsoThermLux</h2>
      <p>Echipa noastră evaluează gratuit fiecare proiect și recomandă tipul de spumă potrivit, în funcție de zona casei, buget și obiectivele tale de eficiență energetică.</p>
    `,
  },
  'pret-izolare-spuma-poliuretanica-2024': {
    title: 'Cât Costă Izolarea cu Spumă Poliuretanică în 2024? Prețuri pe Metru Pătrat',
    author: 'IsoThermLux Team',
    date: '25 ianuarie 2024',
    readTime: '5 min',
    image: '/images/gallery/fono-01.webp',
    excerpt: 'O analiză transparentă a prețurilor pentru izolarea cu spumă, în funcție de grosime, tip de spumă și suprafața lucrării.',
    keywords: 'preț izolare spumă, cost spumă poliuretanică, preț pe metru pătrat, tarife termoizolare',
    content: `
      <h2>Factorii Care Influențează Prețul</h2>
      <ul>
        <li>Tipul de spumă (celulă deschisă sau închisă)</li>
        <li>Grosimea stratului aplicat</li>
        <li>Suprafața totală a lucrării</li>
        <li>Accesibilitatea zonei de lucru (acoperiș, subsol, fațadă)</li>
      </ul>

      <h2>Prețuri Orientative pentru Celulă Deschisă</h2>
      <p>Pentru grosimi între 10 și 25 cm, prețurile variază între 43 și 105 lei/mp + TVA, în funcție de grosime și suprafață.</p>

      <h2>Prețuri Orientative pentru Celulă Închisă</h2>
      <p>Pentru grosimi între 5 și 15 cm, prețurile variază între 55 și 180 lei/mp + TVA, datorită densității și performanței superioare.</p>

      <h2>De Ce Diferă Prețurile Față de Alți Furnizori?</h2>
      <p>Prețul final depinde de calitatea materialului folosit, certificările acestuia (ISO 9001) și experiența echipei de aplicare. Materialele ieftine, necertificate, pot reduce drastic durata de viață a izolației.</p>

      <h2>Ofertă Personalizată</h2>
      <p>Cel mai corect este să primești o evaluare la fața locului. Contactează IsoThermLux pentru o ofertă gratuită, calculată exact pentru suprafața ta.</p>
    `,
  },
  'izolare-hale-industriale-spuma-poliuretanica': {
    title: 'Izolarea Halelor Industriale și Spațiilor de Producție cu Spumă Poliuretanică',
    author: 'IsoThermLux Team',
    date: '22 ianuarie 2024',
    readTime: '5 min',
    image: '/images/gallery/termo-02.webp',
    excerpt: 'De ce spuma poliuretanică este alegerea optimă pentru hale, depozite și clădiri industriale cu suprafețe mari.',
    keywords: 'izolare hale industriale, izolare depozite, spumă poliuretanică industrial, termoizolare clădiri mari',
    content: `
      <h2>Provocările Izolării Spațiilor Mari</h2>
      <p>Halele industriale și depozitele au suprafețe extinse de tablă sau beton, predispuse la pierderi mari de căldură și condens. Materialele tradiționale necesită structuri suplimentare costisitoare.</p>

      <h2>De Ce Spuma Poliuretanică Funcționează Mai Bine</h2>
      <ul>
        <li>Aplicare directă pe tablă, fără structuri intermediare</li>
        <li>Elimină punțile termice și infiltrațiile de aer</li>
        <li>Reduce condensul care deteriorează structura metalică</li>
        <li>Timp de aplicare redus comparativ cu metodele clasice</li>
      </ul>

      <h2>Beneficii pentru Activitatea de Producție</h2>
      <p>O hală bine izolată reduce costurile de încălzire/răcire, păstrează temperatura constantă necesară proceselor de producție și prelungește durata de viață a structurii metalice.</p>

      <h2>Procesul de Lucru</h2>
      <p>Echipele IsoThermLux se deplasează cu echipament profesional și aplică spuma direct pe pereți și plafon, indiferent de înălțimea halei.</p>

      <h2>Cere o Evaluare pentru Spațiul Tău</h2>
      <p>Lucrăm cu firme din toată Moldova pentru izolarea halelor de producție, depozitelor și spațiilor agricole.</p>
    `,
  },
  'spuma-poliuretanica-vs-vata-minerala': {
    title: 'Spumă Poliuretanică vs Vată Minerală: Comparație Completă',
    author: 'IsoThermLux Team',
    date: '19 ianuarie 2024',
    readTime: '7 min',
    image: '/images/gallery/termo-16.webp',
    excerpt: 'Punem față în față cele două materiale izolatoare cele mai populare: performanță termică, durabilitate, preț și timp de aplicare.',
    keywords: 'spumă poliuretanică vs vată minerală, comparație materiale izolatoare, alegere izolație termică',
    content: `
      <h2>Performanță Termică</h2>
      <p>Spuma poliuretanică are un coeficient de conductivitate termică mai bun pe centimetru decât vata minerală, ceea ce înseamnă straturi mai fine pentru același nivel de izolare.</p>

      <h2>Etanșeitate și Punți Termice</h2>
      <p>Spuma se expandează și umple toate spațiile, eliminând complet punțile termice. Vata minerală, montată în panouri sau role, lasă frecvent spații neacoperite la îmbinări.</p>

      <h2>Rezistență la Umiditate</h2>
      <p>Spuma cu celulă închisă este complet impermeabilă, în timp ce vata minerală își pierde din eficiență dacă este expusă la umezeală sau condens.</p>

      <h2>Timp de Aplicare</h2>
      <p>Spuma poliuretanică se aplică prin pulverizare, fiind mult mai rapidă pe suprafețe mari, comparativ cu montarea manuală a vatei minerale.</p>

      <h2>Cost Inițial vs Cost pe Termen Lung</h2>
      <p>Vata minerală are un cost inițial mai mic, dar necesită structuri de montaj suplimentare și înlocuire mai frecventă. Spuma poliuretanică, cu garanție de 25 de ani, oferă un cost total mai avantajos pe termen lung.</p>

      <h2>Care Este Soluția Potrivită?</h2>
      <p>Pentru proiecte unde durabilitatea, etanșeitatea și viteza de execuție sunt prioritare, spuma poliuretanică este alegerea recomandată de echipa IsoThermLux.</p>
    `,
  },
  'fonoizolare-spuma-poliuretanica-reducere-zgomot': {
    title: 'Fonoizolare cu Spumă Poliuretanică: Cum Reduci Zgomotul din Casă',
    author: 'IsoThermLux Team',
    date: '16 ianuarie 2024',
    readTime: '4 min',
    image: '/images/gallery/fono-03.webp',
    excerpt: 'Spuma poliuretanică nu izolează doar termic — explicăm cum contribuie și la reducerea zgomotului din exterior și dintre etaje.',
    keywords: 'fonoizolare, izolare fonică, reducere zgomot, spumă poliuretanică acustică, izolare zgomot stradă',
    content: `
      <h2>Legătura Dintre Izolarea Termică și Cea Fonică</h2>
      <p>Structura celulară a spumei poliuretanice nu blochează doar transferul de căldură, ci absoarbe și atenuează vibrațiile sonore care se transmit prin pereți, plafoane și planșee.</p>

      <h2>Unde Se Simte Cel Mai Mult Diferența</h2>
      <ul>
        <li>Zgomot de stradă, trafic și vecini</li>
        <li>Sunete între etaje (pași, voci)</li>
        <li>Zgomot de ploaie sau vânt pe acoperiș</li>
        <li>Vibrații de la instalații tehnice (centrale, pompe)</li>
      </ul>

      <h2>Celulă Deschisă vs Celulă Închisă pentru Fonoizolare</h2>
      <p>Spuma cu celulă deschisă, datorită structurii mai porozite, are o capacitate ușor superioară de absorbție acustică, fiind recomandată pentru pereți interiori și plafoane între etaje.</p>

      <h2>Combinație Optimă: Termo + Fono</h2>
      <p>Avantajul principal al spumei poliuretanice este că obții izolare termică și fonică simultan, fără a fi nevoie de materiale separate sau straturi suplimentare.</p>

      <h2>Recomandare pentru Casele de Pe Stradă Aglomerată</h2>
      <p>Pentru locuințele expuse la zgomot constant, recomandăm o evaluare gratuită — vom recomanda grosimea și tipul optim de spumă pentru un confort acustic real.</p>
    `,
  },
  'aplicare-spuma-poliuretanica-iarna': {
    title: 'Se Poate Aplica Spumă Poliuretanică Iarna? Ce Trebuie Să Știi',
    author: 'IsoThermLux Team',
    date: '13 ianuarie 2024',
    readTime: '4 min',
    image: '/images/gallery/termo-17.webp',
    excerpt: 'Mulți clienți cred că izolarea se face doar primăvara sau vara. Explicăm condițiile reale în care aplicarea iarna este posibilă și sigură.',
    keywords: 'spumă poliuretanică iarna, aplicare izolare iarna, temperatură aplicare spumă, izolare anotimp rece',
    content: `
      <h2>Mit Comun: Izolarea Se Face Doar pe Vreme Caldă</h2>
      <p>În realitate, spuma poliuretanică poate fi aplicată și în sezonul rece, cu echipamente profesionale care reglează temperatura componentelor și a suprafeței de lucru.</p>

      <h2>Condiții Necesare pentru Aplicare Iarna</h2>
      <ul>
        <li>Temperatura suprafeței de aplicare peste un prag minim controlat</li>
        <li>Echipament cu preîncălzire a materialelor</li>
        <li>Spațiu protejat de vânt direct și precipitații</li>
        <li>Personal cu experiență în aplicări pe vreme rece</li>
      </ul>

      <h2>Avantajele Izolării din Sezonul Rece</h2>
      <p>Programarea lucrării iarna înseamnă, de regulă, termene de execuție mai scurte (cerere mai redusă) și posibilitatea de a beneficia imediat de economiile la încălzire chiar din sezonul curent.</p>

      <h2>Ce Verifică Echipa IsoThermLux Înainte de Aplicare</h2>
      <p>Evaluăm temperatura, umiditatea și starea suprafeței înainte de orice lucrare, indiferent de anotimp, pentru a garanta o aderență și o expandare corectă a spumei.</p>

      <h2>Programează din Timp</h2>
      <p>Dacă vrei să economisești la facturile de încălzire chiar din acest sezon, contactează-ne pentru o evaluare — analizăm condițiile specifice ale proiectului tău.</p>
    `,
  },
  'greseli-frecvente-izolare-termica': {
    title: '7 Greșeli Frecvente la Izolarea Termică a Casei (și Cum le Eviți)',
    author: 'IsoThermLux Team',
    date: '9 ianuarie 2024',
    readTime: '6 min',
    image: '/images/gallery/termo-02.webp',
    excerpt: 'De la grosimea insuficientă la alegerea greșită a materialului — cele mai comune erori care reduc eficiența izolației termice.',
    keywords: 'greșeli izolare termică, erori termoizolare, sfaturi izolare casă, izolare ineficientă',
    content: `
      <h2>1. Grosime Insuficientă a Stratului de Izolație</h2>
      <p>Un strat prea fin nu oferă rezistența termică necesară, indiferent cât de bun este materialul folosit.</p>

      <h2>2. Ignorarea Punților Termice</h2>
      <p>Zonele neacoperite din jurul ferestrelor, ușilor sau colțurilor structurale anulează parțial efectul izolației aplicate corect în restul casei.</p>

      <h2>3. Materiale Necertificate sau de Calitate Slabă</h2>
      <p>Spuma fără certificare ISO își pierde proprietățile izolatoare mult mai rapid, reducând durata reală de viață a investiției.</p>

      <h2>4. Aplicare Fără Evaluare Inițială a Clădirii</h2>
      <p>Fiecare casă are particularități (orientare, materiale de construcție, vechime) care influențează soluția optimă de izolare.</p>

      <h2>5. Neglijarea Ventilației</h2>
      <p>O izolare bună fără un sistem de ventilație adecvat poate duce la acumulare de umiditate în interior.</p>

      <h2>6. Alegerea Tipului Greșit de Spumă</h2>
      <p>Folosirea celulei deschise în zone expuse la umiditate (subsol, fundație) este o greșeală frecventă care compromite durabilitatea.</p>

      <h2>7. Lipsa unei Garanții Scrise</h2>
      <p>Fără garanție clară pe material și manoperă, nu ai protecție în cazul unor probleme ulterioare.</p>

      <h2>Cum Eviți Toate Aceste Greșeli</h2>
      <p>O evaluare profesională, materiale certificate ISO 9001 și o echipă cu experiență sunt esențiale. IsoThermLux oferă consultație gratuită și garanție scrisă de 25 de ani pentru fiecare proiect.</p>
    `,
  },
  'hidroizolatie-poliuree-fundatie-moderna': {
    title: 'Hidroizolație cu Spumă Poliuretanică pentru Fundație: Soluția Modernă Contra Umidității',
    author: 'IsoThermLux Team',
    date: '6 ianuarie 2024',
    readTime: '5 min',
    image: '/images/gallery/hidro-01.webp',
    excerpt: 'Cum funcționează hidroizolația cu spumă poliuretanică, de ce e mai eficientă decât metodele clasice și cât costă aplicarea pentru o fundație.',
    keywords: 'hidroizolație spumă poliuretanică, hidroizolare fundație modernă, spumă celulă închisă, protecție umiditate fundație',
    content: `
      <h2>Ce Este Hidroizolația cu Spumă Poliuretanică?</h2>
      <p>Spuma poliuretanică celulă închisă este aplicată prin pulverizare, care formează un strat continuu, rigid și complet impermeabil, fără cusături sau îmbinări vulnerabile.</p>

      <h2>De Ce Este Superioară Metodelor Clasice</h2>
      <ul>
        <li>Aderență perfectă pe orice formă de suprafață</li>
        <li>Rigiditate ridicată — protejează structura fundației</li>
        <li>Uscare rapidă, lucrarea se finalizează în câteva ore</li>
        <li>Fără cusături care pot ceda în timp, ca la membranele bituminoase</li>
      </ul>

      <h2>Unde Se Aplică</h2>
      <p>Fundații, terase, subsoluri, balcoane și acoperișuri plate — orice zonă expusă constant la apă sau umiditate ridicată.</p>

      <h2>Cost de Aplicare</h2>
      <p>Pentru hidroizolația cu spumă poliuretanică, prețul orientativ este de la 90 lei/mp + TVA, în funcție de complexitatea suprafeței și pregătirea necesară.</p>

      <h2>Recomandarea Noastră</h2>
      <p>Pentru fundațiile expuse la ape subterane sau cu istoric de infiltrații, hidroizolația cu spumă poliuretanică oferă cea mai sigură protecție pe termen lung.</p>
    `,
  },
  'izolare-containere-metalice-spuma-poliuretanica': {
    title: 'Izolarea Containerelor Metalice și Construcțiilor din Tablă cu Spumă Poliuretanică',
    author: 'IsoThermLux Team',
    date: '3 ianuarie 2024',
    readTime: '5 min',
    image: '/images/gallery/fono-01.webp',
    excerpt: 'Containere de locuit, ateliere sau depozite metalice: cum le transformi în spații confortabile termic cu izolație din spumă.',
    keywords: 'izolare container metalic, izolare construcție tablă, spumă poliuretanică container, container locuit izolat',
    content: `
      <h2>Provocarea Structurilor Metalice</h2>
      <p>Tabla conduce căldura extrem de rapid — fără izolare, un container este sufocant de cald vara și îngheață iarna, fiind practic nelocuibil pe termen lung.</p>

      <h2>De Ce Spuma Poliuretanică Este Ideală</h2>
      <ul>
        <li>Aderență perfectă direct pe metal, fără structuri intermediare</li>
        <li>Elimină condensul care ruginește structura din interior</li>
        <li>Strat ușor, nu afectează portanța sau mobilitatea containerului</li>
        <li>Aplicare rapidă, container utilizabil în câteva zile</li>
      </ul>

      <h2>Utilizări Frecvente</h2>
      <p>Containere transformate în locuințe, birouri de șantier, ateliere, depozite frigorifice improvizate sau cabane modulare.</p>

      <h2>Procesul de Lucru</h2>
      <p>Echipa pregătește suprafața metalică, aplică spuma în straturi controlate și verifică etanșeitatea completă a tuturor îmbinărilor și colțurilor.</p>

      <h2>Cere o Estimare</h2>
      <p>Indiferent de dimensiunea containerului sau structurii metalice, oferim o evaluare gratuită și o ofertă personalizată.</p>
    `,
  },
  'durata-viata-spuma-poliuretanica-intretinere': {
    title: 'Cât Timp Rezistă Spuma Poliuretanică? Durabilitate și Întreținere',
    author: 'IsoThermLux Team',
    date: '30 decembrie 2023',
    readTime: '4 min',
    image: '/images/gallery/termo-20.webp',
    excerpt: 'Adevărul despre durata de viață reală a spumei poliuretanice, factorii care o influențează și ce întreținere necesită în timp.',
    keywords: 'durata viață spumă poliuretanică, întreținere izolație, durabilitate izolare termică, garanție izolație',
    content: `
      <h2>Durata de Viață Reală</h2>
      <p>Spuma poliuretanică certificată ISO 9001, aplicată corect, are o durată de viață utilă între 50 și 80 de ani, păstrând cea mai mare parte din performanța termică inițială.</p>

      <h2>Factorii care Influențează Durabilitatea</h2>
      <ul>
        <li>Calitatea materialului folosit (certificat vs necertificat)</li>
        <li>Corectitudinea aplicării (grosime, temperatură, condiții de lucru)</li>
        <li>Expunerea la radiații UV directe (necesită protecție de finisaj)</li>
        <li>Condițiile de mediu specifice clădirii</li>
      </ul>

      <h2>Ce Întreținere Necesită?</h2>
      <p>Spuma poliuretanică, odată aplicată corect și protejată unde este expusă la soare, nu necesită întreținere periodică, fiind un material practic „instalează și uită”.</p>

      <h2>Semne că Ar Trebui Verificată</h2>
      <p>Fisuri vizibile, schimbări de culoare în zonele expuse la UV sau infiltrații punctuale pot indica nevoia unei verificări — situații rare la materialele premium.</p>

      <h2>Garanția Care Susține Durabilitatea</h2>
      <p>De aceea oferim garanție scrisă de 25 de ani — pentru că folosim doar materiale certificate ISO 9001, cu performanță dovedită pe termen lung.</p>
    `,
  },
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const article = articles[slug]

  const descriptionMap: Record<string, string> = {
    'termoizolare-casa-ghid-complet': 'Ghid complet despre termoizolare cu spumă poliuretanică. Beneficii, costuri și proces. Descoperă cum economisești 40-50% la încălzire cu IsoThermLux.',
    'hidroizolare-fundatie-protectie': 'Hidroizolarea fundației este esențială. Cum protejezi casa de infiltrații. Metode și costuri pentru hidroizolare profesională în Moldova.',
    'economii-45-50-procent-gaz-termoizolare': 'Calculează exact cât vei economisi la factura de gaz cu termoizolare. Recuperare investiție în 2-3 ani, cu IsoThermLux.',
    'izolare-mansarda-spatiu-locuibil': 'Transformă mansarda ta într-un spațiu confortabil cu izolație termică profesională. Spumă poliuretanică, garanție de 25 de ani, economie de energie.',
    'materiale-basf-iso-9001-calitate': 'Spumă poliuretanică certificată ISO 9001 garantează calitate și durabilitate. De ce alegem doar materiale premium pentru fiecare proiect.',
    'garantie-25-ani-protectie-investitie': 'Garanție scrisă de 25 de ani pe material și manoperă. Protecție completă pentru investiția ta în termoizolare și hidroizolare profesională.',
    'celula-deschisa-vs-inchisa-diferente': 'Diferențele reale dintre spuma cu celulă deschisă și celulă închisă. Ghid practic pentru a alege varianta potrivită pentru proiectul tău.',
    'pret-izolare-spuma-poliuretanica-2024': 'Prețuri actualizate pentru izolarea cu spumă poliuretanică în 2024, pe metru pătrat, în funcție de grosime și tip de material.',
    'izolare-hale-industriale-spuma-poliuretanica': 'Cum se izolează halele industriale și depozitele cu spumă poliuretanică pentru eficiență energetică și protecție structurală.',
    'spuma-poliuretanica-vs-vata-minerala': 'Comparație detaliată între spuma poliuretanică și vata minerală: performanță, durabilitate, preț și timp de aplicare.',
    'fonoizolare-spuma-poliuretanica-reducere-zgomot': 'Cum reduce spuma poliuretanică zgomotul din casă, alături de izolarea termică. Soluție completă pentru confort acustic.',
    'aplicare-spuma-poliuretanica-iarna': 'Se poate izola cu spumă poliuretanică pe timp de iarnă? Condiții, avantaje și ce verifică o echipă profesionistă.',
    'greseli-frecvente-izolare-termica': '7 greșeli frecvente care reduc eficiența izolării termice și cum le eviți pentru o investiție durabilă.',
    'hidroizolatie-poliuree-fundatie-moderna': 'Hidroizolația cu spumă poliuretanică pentru fundație: cum funcționează, de ce e superioară metodelor clasice și ce costuri implică.',
    'izolare-containere-metalice-spuma-poliuretanica': 'Cum izolezi termic containere metalice și construcții din tablă cu spumă poliuretanică pentru confort pe tot anul.',
    'durata-viata-spuma-poliuretanica-intretinere': 'Durata reală de viață a spumei poliuretanice, factorii care o influențează și de ce nu necesită întreținere periodică.',
  }

  if (!article) {
    return {
      title: 'Articol negăsit | IsoThermLux',
      description: 'Articolul căutat nu există pe blogul IsoThermLux.',
      robots: { index: false, follow: true },
    }
  }

  const url = `https://www.isothermlux.md/blog/${slug}`

  return {
    title: `${article.title} | IsoThermLux`,
    description: descriptionMap[slug] || article.excerpt,
    keywords: article.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: article.title,
      description: descriptionMap[slug] || article.excerpt,
      type: 'article',
      locale: 'ro_MD',
      url,
      publishedTime: article.date,
      authors: [article.author],
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: descriptionMap[slug] || article.excerpt,
      images: [article.image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-snippet': -1,
        'max-image-preview': 'large',
        'max-video-preview': -1,
      },
    },
  }
}

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }))
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = articles[slug]

  if (!article) {
    return (
      <main className="min-h-screen">
        <Header />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <h1 className="text-4xl font-bold mb-4">Articol nu găsit</h1>
          <Link href="/blog" className="text-accent hover:text-accent/80">
            Înapoi la blog
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  const url = `https://www.isothermlux.md/blog/${slug}`

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.excerpt,
    image: `https://www.isothermlux.md${article.image}`,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      '@type': 'Organization',
      name: article.author,
      url: 'https://www.isothermlux.md',
    },
    publisher: {
      '@type': 'Organization',
      name: 'IsoThermLux',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.isothermlux.md/images/logo-isotherm-lux.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Acasă',
        item: 'https://www.isothermlux.md',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://www.isothermlux.md/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: article.title,
        item: url,
      },
    ],
  }

  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <Header />
      <main className="min-h-screen">
        <article className="pt-32 pb-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-foreground/60">
                <li>
                  <Link href="/" className="hover:text-accent transition-colors">Acasă</Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/blog" className="hover:text-accent transition-colors">Blog</Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-foreground/80" aria-current="page">{article.title}</li>
              </ol>
            </nav>

            {/* Back Link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-accent hover:gap-3 transition-all mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Înapoi la blog
            </Link>

            {/* Title */}
            <h1 className="text-5xl lg:text-6xl font-serif font-medium mb-6">
              {article.title}
            </h1>

            {/* Excerpt */}
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">{article.excerpt}</p>

            {/* Meta */}
            <div className="flex flex-wrap gap-6 text-foreground/60 mb-8 pb-8 border-b border-border">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time dateTime={article.date}>{article.date}</time>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{article.author}</span>
              </div>
              <span className="text-sm">{`⏱ ${article.readTime} citire`}</span>
            </div>

            {/* Image */}
            <div className="mb-12 rounded-none overflow-hidden">
              <img
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                width={1200}
                height={630}
                className="w-full h-96 object-cover"
              />
            </div>

            {/* Article Content */}
            <div className="mb-12 text-foreground/80 prose-content">
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </div>

            {/* CTA */}
            <div className="bg-card p-8 rounded-none border border-border">
              <h3 className="text-2xl font-serif font-medium mb-3">Vrei o Ofertă Personalizată?</h3>
              <p className="text-foreground/70 mb-6">
                Contactează echipa IsoThermLux pentru o consultație gratuită și estimare a costurilor.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:++37360811115"
                  className="inline-flex items-center justify-center gap-2 bg-accent text-background px-6 py-3 rounded-none font-semibold hover:bg-accent/90 transition-colors"
                >
                  Sună Acum
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 border-2 border-accent text-accent px-6 py-3 rounded-none font-semibold hover:bg-accent/10 transition-colors"
                >
                  Cere Ofertă
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}

