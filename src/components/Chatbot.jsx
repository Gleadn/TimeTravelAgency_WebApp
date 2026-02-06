import React, { useState } from 'react'

const responses = {
  paris: "Paris 1889 est idéal pour les amateurs d'art et d'élégance.",
  cretace: "Le Crétacé est parfait pour les aventuriers amoureux de nature sauvage.",
  florence: "Florence 1504 ravira les passionnés de Renaissance et d'art."
}

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Bonjour, je suis votre conseiller temporel. Posez-moi une question !' }
  ])
  const [input, setInput] = useState('')

  function send() {
    if (!input) return
    const key = Object.keys(responses).find(k => input.toLowerCase().includes(k))
    const reply = key ? responses[key] : "Je peux vous conseiller sur Paris 1889, le Crétacé ou Florence 1504."
    setMessages([...messages, { from: 'user', text: input }, { from: 'bot', text: reply }])
    setInput('')
  }

  return (
    <div className="fixed bottom-4 right-4 w-72 bg-gray-800 rounded shadow-lg p-3">
      <div className="h-40 overflow-y-auto text-sm mb-2">
        {messages.map((m, i) => (
          <div key={i} className={m.from === 'bot' ? 'text-yellow-400' : 'text-white'}>
            {m.text}
          </div>
        ))}
      </div>
      <input
        className="w-full p-1 text-black text-sm"
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && send()}
        placeholder="Votre question..."
      />
    </div>
  )
}
