import React from 'react';

export default function Hero() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
        Hospedagem Premium para seu Pet
      </h1>
      <p className="text-xl text-gray-200 mb-8 max-w-2xl">
        Cápsulas modernas e confortáveis projetadas para o máximo conforto do seu melhor amigo
      </p>
      <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-full text-xl font-bold hover:bg-yellow-300 transition transform hover:scale-105">
        Conheça Nossas Cápsulas
      </button>
    </div>
  );
}