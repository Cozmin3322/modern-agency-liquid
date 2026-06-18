'use client'

import { useState, useEffect, useRef } from 'react'
import { Send, X, Calculator } from 'lucide-react'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    const timer = setTimeout(() => setShowNotification(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  const quickReplies = [
    { label: 'Preț termoizolare', message: 'Care este prețul pentru termoizolare?' },
    { label: 'Garanție', message: 'Ce garanție oferiți?' },
    { label: 'Calculator preț', message: 'Vreau să calculez costul' },
  ]

  const handleSendMessage = async (messageText?: string) => {
    const text = messageText || input.trim()
    if (!text) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      })

      if (!response.ok) throw new Error('Failed')

      const data = await response.json()
      setMessages((prev) => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.content,
        timestamp: new Date(),
      }])
    } catch (error) {
      console.error('Chat error:', error)
      setMessages((prev) => [...prev, {
        id: (Date.now() + 2).toString(),
        role: 'assistant',
        content: 'Scuze, nu am putut răspunde. Vă rog contactați-ne direct.',
        timestamp: new Date(),
      }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {/* Notification - WhatsApp Phone Link */}
      {showNotification && !isOpen && (
        <a 
          href="https://wa.me/37378370243"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-xl shadow-lg max-w-xs p-4 border border-[#e8dcc8] animate-fade-in hover:shadow-xl transition-shadow" 
          style={{ position: 'fixed', bottom: '100px', right: '24px', left: 'auto', zIndex: 9998 }}
        >
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 text-[#dd9933] flex-shrink-0 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.991 1.523A9.9 9.9 0 002.064 12a9.897 9.897 0 001.571 5.595 9.897 9.897 0 005.631 4.237l.556.037a9.887 9.887 0 005.204-1.585 9.89 9.89 0 003.956-7.684c0-5.46-4.418-9.877-9.877-9.877z"/>
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-sm text-[#6B3410] font-medium">+373 78370243</p>
              <p className="text-xs text-[#c8a882]">Contactează-ne pe WhatsApp</p>
            </div>
            <button
              onClick={(e) => {
                e.preventDefault()
                setShowNotification(false)
              }}
              className="ml-auto text-[#c8a882] hover:text-[#dd9933] flex-shrink-0"
              aria-label="Dismiss"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </a>
      )}

      {/* Floating Button */}
      <button
        onClick={() => { setIsOpen(!isOpen); setShowNotification(false) }}
        className="w-16 h-16 bg-[#dd9933] text-white rounded-full shadow-xl hover:shadow-2xl hover:scale-110 flex items-center justify-center relative animate-float transition-transform"
        style={{ position: 'fixed', bottom: '24px', right: '24px', left: 'auto', zIndex: 9999 }}
        aria-label="Open chat"
        title="Deschide chat"
      >
        <div className="absolute top-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden" style={{ position: 'fixed', bottom: '96px', right: '24px', left: 'auto', zIndex: 9997, height: '400px' }}>
          {/* Header */}
          <div className="bg-[#6B3410] text-white px-4 py-3 flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-sm">IsoThermLux</h3>
              <p className="text-xs opacity-80 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                Online
              </p>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:opacity-80" aria-label="Close">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3" style={{ backgroundColor: '#FAF7F4' }}>
            {messages.length === 0 && (
                <div className="text-center text-[#dd9933] py-6">
                <p className="text-sm font-medium">Bun venit! 👋</p>
                <p className="text-xs opacity-70 mt-1">Cum te pot ajuta?</p>
              </div>
            )}
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs px-4 py-2 text-sm rounded-2xl ${
                  msg.role === 'user'
                    ? 'bg-[#dd9933] text-white rounded-tr-none'
                    : 'bg-white text-[#333] rounded-tl-none border border-[#e8dcc8]'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white px-4 py-2 rounded-2xl rounded-tl-none border border-[#e8dcc8]">
                  <div className="flex space-x-1">
                    {[0, 1, 2].map(i => <div key={i} className="w-2 h-2 bg-[#dd9933] rounded-full animate-bounce" style={{ animationDelay: `${i * 0.2}s` }}></div>)}
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          {messages.length === 0 && (
            <div className="px-3 py-2 space-y-2 border-t border-[#e8dcc8]" style={{ backgroundColor: '#FAF7F4' }}>
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply, i) => (
                  <button
                    key={i}
                    onClick={() => handleSendMessage(reply.message)}
                    className="text-xs px-3 py-1.5 rounded-full border border-[#c8a882] text-[#dd9933] hover:bg-[#dd9933] hover:text-white transition-colors font-medium"
                  >
                    {reply.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="border-t border-[#e8dcc8] p-3 bg-white flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => { if (e.key === 'Enter') handleSendMessage() }}
              placeholder="Scrie mesajul..."
              className="flex-1 px-4 py-2 rounded-full border border-[#e8dcc8] focus:outline-none focus:border-[#dd9933] text-sm"
              style={{ backgroundColor: '#FAF7F4' }}
            />
            <button
              onClick={() => handleSendMessage()}
              disabled={isLoading}
              className="w-8 h-8 bg-[#dd9933] text-white rounded-full flex items-center justify-center hover:bg-[#6B3410] disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
