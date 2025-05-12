
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import ComparisonTable from '@/components/ComparisonTable';
import ContactForm from '@/components/ContactForm';
import ClientTestimonials from '@/components/ClientTestimonials';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Atenaflow | Agentes de IA para Automatizar seu Negócio</title>
        <meta name="description" content="Transforme seu negócio com automação inteligente. Agentes de IA personalizados para otimizar processos, reduzir custos e aumentar produtividade." />
        <meta name="keywords" content="automação, inteligência artificial, agentes de IA, processos automatizados, produtividade, transformação digital" />
        <meta property="og:title" content="Atenaflow | Agentes de IA para Automatizar seu Negócio" />
        <meta property="og:description" content="Transforme seu negócio com automação inteligente. Agentes de IA personalizados para otimizar processos, reduzir custos e aumentar produtividade." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://atenaflow.com.br" />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main>
          <HeroSection />
          <HowItWorks />
          <Benefits />
          <Testimonials />
          <ComparisonTable />
          <ContactForm />
          <ClientTestimonials />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
