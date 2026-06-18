import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'nodejs'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json() as { messages: Message[] }

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Invalid request format' },
        { status: 400 }
      )
    }

    const apiKey = process.env.DEEPSEEK_API_KEY
    if (!apiKey) {
      console.error('DEEPSEEK_API_KEY is not set')
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 500 }
      )
    }

    const systemPrompt = `Ești asistentul virtual al IsoThermLux, companie din Moldova specializată în termoizolare și hidroizolare cu spumă poliuretanică BASF. Răspunzi scurt și prietenos în română, maxim 3 propoziții. Menționezi mereu garanția de 25 ani, economii de 70% la energie, și îndrumi spre calculatorul de pe site (/calculator-oferta) pentru estimări de preț. Nu inventa prețuri exacte.`

    const response = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          {
            role: 'system',
            content: systemPrompt,
          },
          ...messages,
        ],
        temperature: 0.7,
        max_tokens: 300,
      }),
    })

    if (!response.ok) {
      const error = await response.text()
      console.error('DeepSeek API error:', error)
      return NextResponse.json(
        { error: 'Failed to get response from AI service' },
        { status: response.status }
      )
    }

    const data = await response.json()

    const content = data.choices?.[0]?.message?.content || 'Nu am putut genera un răspuns.'

    return NextResponse.json({ content })
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
