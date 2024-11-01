import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Ana Silva",
    pet: "Luna",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
    petImage: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80",
    text: "Minha Luna ficou super feliz e bem cuidada. A equipe é muito atenciosa e me manteve informada durante toda a estadia!"
  },
  {
    name: "Carlos Santos",
    pet: "Thor",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    petImage: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80",
    text: "Estrutura impecável e profissionais dedicados. Meu Thor voltou super feliz e já querendo voltar!"
  },
  {
    name: "Marina Costa",
    pet: "Nina",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    petImage: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80",
    text: "As cápsulas são um diferencial incrível! Minha Nina se adaptou super bem e adorou o espaço privativo."
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">O Que Dizem Nossos Clientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 relative">
              <div className="flex space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">{testimonial.text}</p>
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">Tutora de {testimonial.pet}</p>
                </div>
              </div>
              <img
                src={testimonial.petImage}
                alt={testimonial.pet}
                className="absolute -top-6 -right-6 w-16 h-16 rounded-full border-4 border-white object-cover shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}