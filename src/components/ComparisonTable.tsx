
import React from 'react';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";
import { Check, X } from "lucide-react";

const ComparisonTable = () => {
  return (
    <section id="comparacao" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Compare as suas Opções</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Descubra por que a Automato é a escolha mais inteligente para automatizar seus processos de negócio
          </p>
        </div>

        <div className="overflow-x-auto">
          <Table className="w-full border-collapse">
            <TableHeader className="bg-white">
              <TableRow className="border-b">
                <TableHead className="w-1/5 py-6"></TableHead>
                <TableHead className="w-1/5 py-6">
                  <div className="flex flex-col items-center">
                    <div className="mb-2 font-bold text-automato-blue">
                      <span className="heading-gradient">Automato</span>
                    </div>
                    <div className="rounded-full bg-automato-blue/10 p-2">
                      <Check className="h-6 w-6 text-automato-blue" />
                    </div>
                  </div>
                </TableHead>
                <TableHead className="w-1/5 py-6">
                  <div className="flex flex-col items-center">
                    <div className="mb-2 font-bold">Freelancers</div>
                    <div className="rounded-full bg-red-100 p-2">
                      <X className="h-6 w-6 text-red-500" />
                    </div>
                  </div>
                </TableHead>
                <TableHead className="w-1/5 py-6">
                  <div className="flex flex-col items-center">
                    <div className="mb-2 font-bold">In-house</div>
                    <div className="rounded-full bg-red-100 p-2">
                      <X className="h-6 w-6 text-red-500" />
                    </div>
                  </div>
                </TableHead>
                <TableHead className="w-1/5 py-6">
                  <div className="flex flex-col items-center">
                    <div className="mb-2 font-bold">Outras Agências</div>
                    <div className="rounded-full bg-red-100 p-2">
                      <X className="h-6 w-6 text-red-500" />
                    </div>
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* Tempo para contratar */}
              <TableRow className="border-b">
                <TableCell className="font-medium py-6">Tempo para contratar</TableCell>
                <TableCell>
                  <div className="flex justify-center">
                    <span className="bg-automato-blue text-white text-sm px-3 py-1 rounded-full">Poucas Horas</span>
                  </div>
                </TableCell>
                <TableCell className="text-center">5-7 dias</TableCell>
                <TableCell className="text-center">Meses</TableCell>
                <TableCell className="text-center">2-3 Semanas</TableCell>
              </TableRow>
              
              {/* Nível de Experiência */}
              <TableRow className="border-b">
                <TableCell className="font-medium py-6">Nível de Experiência</TableCell>
                <TableCell>
                  <div className="flex justify-center">
                    <span className="bg-automato-blue text-white text-sm px-3 py-1 rounded-full">Nível Sênior</span>
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  Iniciante ou<br />Nível Junior
                </TableCell>
                <TableCell className="text-center">
                  Boa (Cruze os<br />dedos)
                </TableCell>
                <TableCell className="text-center">
                  Confie na<br />Sorte
                </TableCell>
              </TableRow>
              
              {/* Comunicação */}
              <TableRow className="border-b">
                <TableCell className="font-medium py-6">Comunicação</TableCell>
                <TableCell>
                  <div className="flex justify-center">
                    <span className="bg-automato-blue text-white text-sm px-3 py-1 rounded-full">Diária</span>
                  </div>
                </TableCell>
                <TableCell className="text-center">Inexistente</TableCell>
                <TableCell className="text-center">Muitas falhas</TableCell>
                <TableCell className="text-center">Fantasma</TableCell>
              </TableRow>
              
              {/* Primeira Entrega */}
              <TableRow className="border-b">
                <TableCell className="font-medium py-6">Primeira Entrega</TableCell>
                <TableCell>
                  <div className="flex justify-center">
                    <span className="bg-automato-blue text-white text-sm px-3 py-1 rounded-full">2-3 dias</span>
                  </div>
                </TableCell>
                <TableCell className="text-center">Várias Semanas</TableCell>
                <TableCell className="text-center">6-7 Semanas</TableCell>
                <TableCell className="text-center">2-3 Meses</TableCell>
              </TableRow>
              
              {/* Rescisão */}
              <TableRow>
                <TableCell className="font-medium py-6">Rescisão</TableCell>
                <TableCell>
                  <div className="flex justify-center">
                    <span className="bg-automato-blue text-white text-sm px-3 py-1 rounded-full">Um clique + 0 R$</span>
                  </div>
                </TableCell>
                <TableCell className="text-center">Demorada</TableCell>
                <TableCell className="text-center">
                  Pesadelo + Dores<br />de Cabeça
                </TableCell>
                <TableCell className="text-center">Demorada</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="max-w-2xl text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-4">Por que escolher a Automato?</h3>
            <p className="text-gray-700">
              Nossa plataforma oferece soluções de automação com agentes de IA de alta performance, 
              implementação rápida e sem complicações, com suporte contínuo da nossa equipe especializada.
              Economize tempo, reduza custos e maximize resultados com um serviço simples de iniciar e fácil de cancelar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
