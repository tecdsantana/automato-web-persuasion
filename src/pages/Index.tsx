import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import CalendarMeeting from '@/components/CalendarMeeting';
import ComparisonTable from '@/components/ComparisonTable';
import ContactForm from '@/components/ContactForm';
import ClientTestimonials from '@/components/ClientTestimonials';
import BtnWhatsappFloat from '@/components/BtnWhatsappFloat';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace('#', '');
      const section = document.getElementById(sectionId);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <Helmet>
        <title>Flownine | AI First</title>
        <meta name="description" content="Transforme seu negócio com automação inteligente. Agentes de IA personalizados para otimizar processos, reduzir custos e aumentar produtividade." />
        <meta name="keywords" content="automação, inteligência artificial, agentes de IA, processos automatizados, produtividade, transformação digital" />
        <meta property="og:title" content="FlowNine | Agentes de IA para Automatizar seu Negócio" />
        <meta property="og:description" content="Transforme seu negócio com automação inteligente. Agentes de IA personalizados para otimizar processos, reduzir custos e aumentar produtividade." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://flownine.com.br" />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main>
          <HeroSection />
          <HowItWorks />
          <Benefits />
          <Testimonials />
          <CalendarMeeting />
          <ComparisonTable />
          <ContactForm />
          <ClientTestimonials />
        </main>
        <Footer />
      </div>
      <BtnWhatsappFloat />
    </>
  );
};

export default Index;
