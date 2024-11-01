import React from 'react';

const capsules = [
  {
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&q=80",
    title: "Cápsula Standard",
    description: "Espaço confortável com climatização e monitoramento",
    price: "R$ 89/noite"
  },
  {
    image: "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&q=80",
    title: "Cápsula Premium",
    description: "Experiência luxuosa com TV e câmera dedicada",
    price: "R$ 149/noite"
  }
];

export default function Capsules() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Nossas Cápsulas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capsules.map((capsule, index) => (
            <div key={index} className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={capsule.image}
                alt={capsule.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{capsule.title}</h3>
                <p className="text-gray-600 mb-4">{capsule.description}</p>
                <p className="text-yellow-400 font-bold text-2xl">{capsule.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}