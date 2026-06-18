import { ReviewsClient } from './reviews-client'
import { getContent } from '@/app/actions/content'

interface Review {
  id: string
  name: string
  rating: number
  text: string
  date: string
  location: string
}

const DEFAULT_REVIEWS: Review[] = [
  { id: '1', name: 'Ion Popescu', rating: 5, text: 'Lucrare profesională de la început până la sfârșit. Echipa IsoThermLux a executat termoizolarea casei cu spumă poliuretanică perfect. Acum casa este caldă chiar și iarna. Mulțumesc!', date: 'Februarie 2024', location: 'Chișinău' },
  { id: '2', name: 'Maria Șerban', rating: 5, text: 'Am contractat hidroizolarea subsolului și sunt foarte mulțumită cu rezultatul. Nu mai am infiltrații și subsolul este sec. Garantia de 25 de ani îmi dă pe deplin siguranța.', date: 'Ianuarie 2024', location: 'Chișinău' },
  { id: '3', name: 'Andrei Ignat', rating: 5, text: 'Prețuri corecte, execuție de calitate și respect pentru case. Am făcut izolarea mansardei și acum casa e mult mai confortabilă. Recomand cu plăcere!', date: 'Decembrie 2023', location: 'Chișinău' },
]

export async function Reviews() {
  const reviews = await getContent<Review[]>('reviews_data', DEFAULT_REVIEWS)
  return <ReviewsClient reviews={reviews} />
}

export default Reviews

