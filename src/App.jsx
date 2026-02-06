import React from 'react'
import Chatbot from './components/Chatbot'
import paris1889Img from './assets/Paris1889.png'
import cretaceImg from './assets/Cretace.png'
import florence1504Img from './assets/Florence1504.png'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="p-6 text-center">
        <h1 className="text-4xl font-bold">🕰️ TimeTravel Agency</h1>
        <p className="mt-2 text-gray-300">Voyagez à travers le temps en toute élégance</p>
      </header>

      <section className="p-6 grid gap-6 md:grid-cols-3">
        <div className="bg-gray-800 p-4 rounded space-y-3">
          <img
            src={paris1889Img}
            alt="Paris 1889"
            className="h-96 w-full rounded object-cover"
            loading="lazy"
          />
          <div className="text-lg font-semibold">Paris 1889</div>
        </div>
        <div className="bg-gray-800 p-4 rounded space-y-3">
          <img
            src={cretaceImg}
            alt="Crétacé"
            className="h-96 w-full rounded object-cover"
            loading="lazy"
          />
          <div className="text-lg font-semibold">Crétacé</div>
        </div>
        <div className="bg-gray-800 p-4 rounded space-y-3">
          <img
            src={florence1504Img}
            alt="Florence 1504"
            className="h-96 w-full rounded object-cover"
            loading="lazy"
          />
          <div className="text-lg font-semibold">Florence 1504</div>
        </div>
      </section>

      <Chatbot />
    </div>
  )
}
