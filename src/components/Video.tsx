import React from 'react';
import { Play } from 'lucide-react';

export default function Video() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Conheça Nossa Estrutura</h2>
        <div className="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1587764379873-97837921fd44?auto=format&fit=crop&q=80"
            alt="Pet hotel facilities"
            className="w-full h-full object-cover brightness-75 group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-yellow-400 rounded-full p-6 transform group-hover:scale-110 transition duration-300">
              <Play className="w-12 h-12 text-gray-900" fill="currentColor" />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <h3 className="text-2xl font-bold mb-2">Tour Virtual PawPods</h3>
            <p className="text-gray-200">Conheça nossas instalações e veja como seu pet será tratado como realeza</p>
          </div>
        </div>
      </div>
    </section>
  );
}