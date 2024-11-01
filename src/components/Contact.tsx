import React from 'react';
import { Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <section className="bg-gray-900 text-white py-20" id="contact">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-8">Entre em Contato</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Phone className="text-yellow-400" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="text-yellow-400" />
                <span>Av. Paulista, 1000 - São Paulo, SP</span>
              </div>
              <div className="flex space-x-4 pt-4">
                <a href="#" className="text-yellow-400 hover:text-yellow-300">
                  <Instagram />
                </a>
                <a href="#" className="text-yellow-400 hover:text-yellow-300">
                  <Facebook />
                </a>
                <a href="#" className="text-yellow-400 hover:text-yellow-300">
                  <Twitter />
                </a>
              </div>
            </div>
          </div>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Nome"
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
            />
            <textarea
              placeholder="Mensagem"
              rows={4}
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
            ></textarea>
            <button className="w-full bg-yellow-400 text-gray-900 py-3 rounded-lg font-bold hover:bg-yellow-300 transition">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}