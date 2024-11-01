import React from 'react';
import { Shield, Clock, Heart } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Segurança 24/7',
    description: 'Monitoramento constante e cuidados veterinários de plantão'
  },
  {
    icon: Clock,
    title: 'Flexibilidade',
    description: 'Horários flexíveis para check-in e check-out'
  },
  {
    icon: Heart,
    title: 'Cuidado Premium',
    description: 'Atenção personalizada para cada hóspede'
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-yellow-400 p-4 rounded-full mb-4">
                <feature.icon className="h-8 w-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}