import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BtnWhatsappFloat from '@/components/BtnWhatsappFloat';

const TermosDeUso = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Termos de Uso | FlowNine</title>
        <meta
          name="description"
          content="Termos e condições de uso do site da FlowNine, consultoria de Dados, IA e People Analytics."
        />
        <meta property="og:title" content="Termos de Uso | FlowNine" />
        <meta
          property="og:description"
          content="Termos e condições de uso do site da FlowNine, consultoria de Dados, IA e People Analytics."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.flownine.com.br/termos-de-uso" />
        <link rel="canonical" href="https://www.flownine.com.br/termos-de-uso" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-automato-black">
        <Navbar />

        <main className="flex-1 pt-24">
          <section className="py-16 container-padding">
            <div className="container mx-auto max-w-4xl text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Termos de <span className="text-automato-gold">Uso</span>
              </h1>
              <p className="text-white/60 text-lg">Última atualização: agosto de 2026</p>
            </div>
          </section>

          <section className="container mx-auto container-padding max-w-3xl pb-24">
            <div className="prose prose-invert max-w-none space-y-8 text-white/80 text-base leading-relaxed [&_h2]:text-white [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mt-10 [&_h2]:mb-4 [&_strong]:text-white">
              <p>
                Estes Termos de Uso regulam o acesso e a utilização do site www.flownine.com.br
                ("site"), de propriedade da FlowNine, inscrita no CNPJ 45.217.293/0001-00. Ao acessar
                ou utilizar este site, você concorda com os termos descritos abaixo. Se não concordar
                com algum destes termos, recomendamos que não utilize o site.
              </p>

              <h2 id="objeto">1. Sobre o site</h2>
              <p>
                O site da FlowNine tem caráter institucional e comercial, apresentando os serviços de
                consultoria em Dados, Inteligência Artificial e People Analytics prestados pela
                empresa, além de conteúdo educativo publicado em nosso{' '}
                <Link to="/blog" className="text-automato-gold">
                  blog
                </Link>
                . O site não constitui, por si só, uma plataforma de contratação automática de
                serviços — o contato inicial é feito por meio do formulário, WhatsApp ou e-mail, e a
                prestação de serviços é formalizada separadamente, por proposta e contrato específico.
              </p>

              <h2 id="uso-aceitavel">2. Uso do site</h2>
              <p>Ao utilizar o site, você se compromete a:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Fornecer informações verdadeiras, completas e atualizadas nos formulários de contato</li>
                <li>Não utilizar o site para fins ilícitos, fraudulentos ou que violem direitos de terceiros</li>
                <li>Não tentar acessar áreas restritas, interferir no funcionamento do site ou comprometer sua segurança</li>
                <li>Não utilizar mecanismos automatizados (bots, scraping) para coletar dados do site sem autorização prévia</li>
              </ul>

              <h2 id="propriedade-intelectual">3. Propriedade intelectual</h2>
              <p>
                Todo o conteúdo disponível no site — incluindo textos, artigos do blog, marca,
                logotipo, layout, imagens e materiais gráficos — é de propriedade da FlowNine ou
                licenciado para seu uso, e protegido pela legislação de direitos autorais e
                propriedade industrial. É permitida a leitura e o compartilhamento de links para o
                conteúdo do blog; a reprodução, cópia ou distribuição do conteúdo sem autorização
                prévia e por escrito da FlowNine não é permitida.
              </p>

              <h2 id="links-terceiros">4. Links e serviços de terceiros</h2>
              <p>
                O site pode conter links para serviços de terceiros, como WhatsApp, LinkedIn e
                Instagram. A FlowNine não se responsabiliza pelo conteúdo, práticas de privacidade ou
                disponibilidade desses serviços externos, que possuem seus próprios termos e
                políticas.
              </p>

              <h2 id="isencao">5. Isenção de responsabilidade</h2>
              <p>
                O conteúdo publicado no blog e nas demais páginas do site tem caráter informativo e
                educativo, refletindo boas práticas e experiência da FlowNine em projetos de dados,
                analytics e IA. Esse conteúdo não substitui uma análise técnica específica do seu
                negócio e não constitui garantia de resultado. Resultados de projetos reais
                mencionados no site (cases) refletem contextos específicos de cada cliente e não
                representam promessa de resultado equivalente para outras empresas.
              </p>
              <p>
                Envidamos esforços razoáveis para manter o site disponível e as informações
                atualizadas, mas não garantimos operação ininterrupta ou livre de erros.
              </p>

              <h2 id="dados-pessoais">6. Dados pessoais</h2>
              <p>
                O tratamento de dados pessoais coletados através deste site é regido pela nossa{' '}
                <Link to="/politica-de-privacidade" className="text-automato-gold">
                  Política de Privacidade
                </Link>
                , que é parte integrante destes Termos de Uso.
              </p>

              <h2 id="alteracoes">7. Alterações destes termos</h2>
              <p>
                A FlowNine pode alterar estes Termos de Uso a qualquer momento, para refletir
                mudanças no site, nos serviços oferecidos ou na legislação aplicável. A versão vigente
                será sempre a publicada nesta página, com a data da última atualização indicada no
                topo.
              </p>

              <h2 id="lei-aplicavel">8. Legislação aplicável e foro</h2>
              <p>
                Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Fica
                eleito o foro da comarca de Barueri/SP para dirimir quaisquer controvérsias
                decorrentes destes termos, com renúncia a qualquer outro, por mais privilegiado que
                seja.
              </p>

              <h2 id="contato">9. Contato</h2>
              <p>
                Dúvidas sobre estes Termos de Uso podem ser enviadas para{' '}
                <a href="mailto:contato@flownine.com.br" className="text-automato-gold">
                  contato@flownine.com.br
                </a>
                .
              </p>
            </div>
          </section>
        </main>

        <Footer />
      </div>
      <BtnWhatsappFloat />
    </>
  );
};

export default TermosDeUso;
