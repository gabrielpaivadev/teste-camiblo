import React from 'react';
import { Dog, Menu } from 'lucide-react';

export default function Header() {
  return (
    <nav className="relative z-10 flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
      <div className="flex items-center space-x-2">
        <Dog size={32} className="text-yellow-400" />
        <span className="text-2xl font-bold text-white">PawPods</span>
      </div>
      <div className="hidden md:flex space-x-8 text-white">
        <a href="#services" className="hover:text-yellow-400 transition">Serviços</a>
        <a href="#about" className="hover:text-yellow-400 transition">Sobre</a>
        <a href="#contact" className="hover:text-yellow-400 transition">Contato</a>
      </div>
      <button className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition">
        Reservar Agora
      </button>
    </nav>
  );
}