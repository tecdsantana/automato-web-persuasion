
import React from 'react';
import { Star, Code, CloudCog, Database, Terminal, MessageCircle, Chrome, FileCode, Workflow } from 'lucide-react';

const ClientTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Carlos Mendes",
      position: "Diretor de Tecnologia",
      company: "TechSolve Brasil",
      text: "A implementação dos agentes de IA da FlowNine reduziu nosso tempo de processamento de pedidos em 70% e praticamente eliminou os erros. O ROI foi alcançado em apenas 2 meses.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      stars: 5,
    },
    {
      id: 2,
      name: "Fernanda Lima",
      position: "CEO",
      company: "Fintech Solutions",
      text: "Automatizamos nossa análise de crédito com os agentes de IA da FlowNine e conseguimos aumentar nossa capacidade de processamento em 300%. Nossa equipe agora foca no que realmente importa.",
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
        
        {/* Technology Tools Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">TRABALHAMOS COM TECNOLOGIAS LÍDERES</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-automato-blue to-automato-gold mx-auto mb-6"></div>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
            <div className="flex flex-col items-center">
              <Workflow size={48} className="text-white mb-2" />
              <span className="text-sm text-white/80">N8N</span>
            </div>
            
            <div className="flex flex-col items-center">
              <CloudCog size={48} className="text-white mb-2" />
              <span className="text-sm text-white/80">AWS</span>
            </div>
            
            <div className="flex flex-col items-center">
              <Database size={48} className="text-white mb-2" />
              <span className="text-sm text-white/80">Supabase</span>
            </div>
            
            <div className="flex flex-col items-center">
              <Workflow size={48} className="text-white mb-2" />
              <span className="text-sm text-white/80">Make</span>
            </div>
            
            <div className="flex flex-col items-center">
              <Terminal size={48} className="text-white mb-2" />
              <span className="text-sm text-white/80">Python</span>
            </div>
            
            <div className="flex flex-col items-center">
              <MessageCircle size={48} className="text-white mb-2" />
              <span className="text-sm text-white/80">WhatsApp</span>
            </div>
            
            <div className="flex flex-col items-center">
              <Chrome size={48} className="text-white mb-2" />
              <span className="text-sm text-white/80">Google</span>
            </div>
            
            <div className="flex flex-col items-center">
              <Code size={48} className="text-white mb-2" />
              <span className="text-sm text-white/80">JavaScript</span>
            </div>
            
            <div className="flex flex-col items-center">
              <FileCode size={48} className="text-white mb-2" />
              <span className="text-sm text-white/80">Zapier</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
