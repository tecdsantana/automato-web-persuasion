
import React from 'react';
import { Star } from 'lucide-react';

const ClientTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Carlos Mendes",
      position: "Diretor de Tecnologia",
      company: "TechSolve Brasil",
      text: "A implementação dos agentes de IA da Automato reduziu nosso tempo de processamento de pedidos em 70% e praticamente eliminou os erros. O ROI foi alcançado em apenas 2 meses.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      stars: 5,
    },
    {
      id: 2,
      name: "Fernanda Lima",
      position: "CEO",
      company: "Fintech Solutions",
      text: "Automatizamos nossa análise de crédito com os agentes de IA da Automato e conseguimos aumentar nossa capacidade de processamento em 300%. Nossa equipe agora foca no que realmente importa.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      stars: 5,
    },
    {
      id: 3,
      name: "Ricardo Almeida",
      position: "Gerente de Operações",
      company: "LogTech Transportes",
      text: "A automação dos nossos processos de roteirização com IA reduziu nossos custos operacionais em 30% e melhorou significativamente a satisfação dos clientes com entregas mais precisas.",
      avatar: "https://randomuser.me/api/portraits/men/62.jpg",
      stars: 5,
    },
  ];

  return (
    <section id="depoimentos" className="section-padding bg-automato-dark-blue">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">O Que Nossos Clientes Dizem</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-automato-blue to-automato-gold mx-auto mb-6"></div>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Veja como nossas soluções de automação com IA têm transformado empresas de diferentes setores.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-automato-dark-blue/50 p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-automato-gold/20 futuristic-card"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-automato-gold text-automato-gold" />
                ))}
              </div>
              <p className="text-white/80 mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4 object-cover border border-automato-gold/30"
                />
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-automato-gold">{testimonial.position}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16">
          <img src="https://via.placeholder.com/180x60?text=Logo+Cliente" alt="Logo Cliente" className="h-12 opacity-50 hover:opacity-80 transition-opacity" />
          <img src="https://via.placeholder.com/180x60?text=Logo+Cliente" alt="Logo Cliente" className="h-12 opacity-50 hover:opacity-80 transition-opacity" />
          <img src="https://via.placeholder.com/180x60?text=Logo+Cliente" alt="Logo Cliente" className="h-12 opacity-50 hover:opacity-80 transition-opacity" />
          <img src="https://via.placeholder.com/180x60?text=Logo+Cliente" alt="Logo Cliente" className="h-12 opacity-50 hover:opacity-80 transition-opacity" />
          <img src="https://via.placeholder.com/180x60?text=Logo+Cliente" alt="Logo Cliente" className="h-12 opacity-50 hover:opacity-80 transition-opacity" />
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
