import { CalculatorClient } from './calculator-client'
import { getContent } from '@/app/actions/content'

interface CalculatorSettings {
  termoizolarePrice: number
  hidroizolarePrice: number
  travelCostBalti: number
  travelCostOther: number
}

const DEFAULT_SETTINGS: CalculatorSettings = {
  termoizolarePrice: 45,
  hidroizolarePrice: 55,
  travelCostBalti: 30,
  travelCostOther: 50,
}

export async function Calculator() {
  const settings = await getContent<CalculatorSettings>('calculator_settings', DEFAULT_SETTINGS)
  return <CalculatorClient settings={settings} />
}
