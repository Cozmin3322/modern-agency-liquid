import { FAQClient } from './faq-client'
import { getContent } from '@/app/actions/content'

interface FAQItem {
  id: string
  question: string
  answer: string
}

const DEFAULT_FAQS: FAQItem[] = [
  { id: '1', question: 'Cat dureaza aplicarea termoizolarii cu spuma poliuretanica?', answer: 'În funcție de suprafață, o lucrare standard pentru o casă se finalizează în 1-2 zile. Spuma se întărește în cateva ore și poate fi acoperită imediat după aplicare.' },
  { id: '2', question: 'Ce diferență este între celula deschisă și celula închisă?', answer: 'Celula deschisă este mai economică și potrivită pentru interioare, având proprietăți excelente de izolare fonică. Celula închisă este mai densă, rezistență la umiditate și recomandată pentru exterior sau subsoluri.' },
  { id: '3', question: 'Cat economisesc la facturi după termoizolare?', answer: 'În medie, clienții noștri economisesc între 50-70% la costurile de încălzire. Investiția se recuperează de obicei în 2-3 ani.' },
  { id: '4', question: 'Oferiți garanție pentru lucrări?', answer: 'Da, oferim garanție de 25 de ani pentru toate lucrarile de termoizolare cu spumă poliuretanică. Garanția acoperă atât materialul cât și manopera.' },
  { id: '5', question: 'Pot aplica spuma poliuretanica pe orice suprafață?', answer: 'Spuma se aplică pe majoritatea suprafețelor: beton, lemn, metal, cărămidă, BCA. Echipa noastră evaluează fiecare proiect și recomandă soluția optimă.' },
  { id: '6', question: 'Cum pot obține o ofertă personalizată?', answer: 'Contactați-ne la +373 62 040 050 sau completați formularul de contact. Un specialist vă va contacta cu o estimare de preț și ofertă personalizată în 30 de minute.' },
]

export async function FAQ() {
  const faqData = await getContent<FAQItem[]>('faq_items', DEFAULT_FAQS)
  return <FAQClient items={faqData} />
}
