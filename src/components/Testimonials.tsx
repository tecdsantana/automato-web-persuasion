
import React, { useState } from 'react';
import { Star, Edit2, Plus, Trash2 } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  // Estado inicial da tabela com os dados baseados na imagem
  const [tableData, setTableData] = useState({
    headers: ['Área', 'Chatbot IA', 'Automação de Processos'],
    rows: [
      {
        area: 'RH',
        chatbot: '(Triagem de candidatos, respostas a dúvidas frequentes)',
        automation: '(Agendamento de entrevistas, onboarding)'
      },
      {
        area: 'Marketing',
        chatbot: '(Atendimento ao cliente, qualificação de leads)',
        automation: '(Envio de e-mails personalizados, agendamento de posts)'
      },
      {
        area: 'Vendas',
        chatbot: '(Suporte ao cliente, recomendação de produtos)',
        automation: '(Geração de relatórios, follow-up de clientes)'
      },
      {
        area: 'Financeiro',
        chatbot: '(Respostas a dúvidas sobre pagamentos)',
        automation: '(Processamento de faturas, conciliação bancária)'
      },
      {
        area: 'Operações',
        chatbot: '(Suporte técnico básico)',
        automation: '(Gerenciamento de estoque, programação de produção)'
      }
    ],
    editing: null
  });

  // Estado para armazenar valores em edição
  const [editingValue, setEditingValue] = useState('');
  
  // Estado para controlar a edição de cabeçalhos
  const [editingHeader, setEditingHeader] = useState({ isEditing: false, index: -1, value: '' });

  // Função para iniciar a edição de uma célula
  const startEditing = (rowIndex, column) => {
    let value;
    
    if (column === 'area') {
      value = tableData.rows[rowIndex].area;
    } else if (column === 'chatbot') {
      value = tableData.rows[rowIndex].chatbot;
    } else if (column === 'automation') {
      value = tableData.rows[rowIndex].automation;
    }
    
    setTableData({
      ...tableData,
      editing: { rowIndex, column }
    });
    setEditingValue(value);
  };

  // Função para salvar o valor editado
  const saveEditedValue = () => {
    const { rowIndex, column } = tableData.editing;
    const newRows = [...tableData.rows];
    
    if (column === 'area') {
      newRows[rowIndex] = { ...newRows[rowIndex], area: editingValue };
    } else if (column === 'chatbot') {
      newRows[rowIndex] = { ...newRows[rowIndex], chatbot: editingValue };
    } else if (column === 'automation') {
      newRows[rowIndex] = { ...newRows[rowIndex], automation: editingValue };
    }
    
    setTableData({
      ...tableData,
      rows: newRows,
      editing: null
    });
    setEditingValue('');
  };

  // Função para adicionar uma nova linha
  const addNewRow = () => {
    const newRow = {
      area: 'Nova Área',
      chatbot: '(Descreva o uso do chatbot)',
      automation: '(Descreva a automação)'
    };
    
    setTableData({
      ...tableData,
      rows: [...tableData.rows, newRow]
    });
  };

  // Função para remover uma linha
  const removeRow = (index) => {
    const newRows = [...tableData.rows];
    newRows.splice(index, 1);
    
    setTableData({
      ...tableData,
      rows: newRows
    });
  };

  // Função para iniciar a edição de um cabeçalho
  const startEditingHeader = (index) => {
    if (index > 0) { // Não permitir editar o primeiro cabeçalho (Área)
      setEditingHeader({
        isEditing: true,
        index,
        value: tableData.headers[index]
      });
    }
  };

  // Função para salvar o cabeçalho editado
  const saveEditedHeader = () => {
    const newHeaders = [...tableData.headers];
    newHeaders[editingHeader.index] = editingHeader.value;
    
    setTableData({
      ...tableData,
      headers: newHeaders
    });
    
    setEditingHeader({ isEditing: false, index: -1, value: '' });
  };

  // Função para adicionar nova coluna
  const addNewColumn = () => {
    const newHeaderName = `Nova Coluna ${tableData.headers.length - 2}`;
    const newHeaders = [...tableData.headers, newHeaderName];
    
    const newRows = tableData.rows.map(row => ({
      ...row,
      [`column${tableData.headers.length}`]: '(Descreva o uso)'
    }));
    
    setTableData({
      ...tableData,
      headers: newHeaders,
      rows: newRows
    });
  };

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
    <section id="depoimentos" className="section-padding bg-automato-black">
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
        
        {/* Tabela de Oportunidades de IA */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Oportunidades de Implementação</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-automato-blue to-automato-gold mx-auto mb-6"></div>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Veja como as soluções de IA podem ser implementadas em diferentes áreas da sua empresa.
            </p>
          </div>

          <div className="overflow-x-auto mb-8">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden border border-automato-gold/30 rounded-xl shadow-md">
                <Table className="min-w-full">
                  <TableHeader className="bg-automato-dark-blue">
                    <TableRow>
                      {tableData.headers.map((header, index) => (
                        <TableHead 
                          key={index} 
                          className="text-white py-3 px-4 font-medium border-r border-automato-gold/20 last:border-r-0"
                        >
                          <div className="flex items-center justify-between">
                            {(editingHeader.isEditing && editingHeader.index === index) ? (
                              <input
                                type="text"
                                value={editingHeader.value}
                                onChange={(e) => setEditingHeader({...editingHeader, value: e.target.value})}
                                onBlur={saveEditedHeader}
                                onKeyPress={(e) => e.key === 'Enter' && saveEditedHeader()}
                                className="bg-automato-dark-blue/80 text-white px-2 py-1 w-full border border-automato-gold/30 rounded"
                                autoFocus
                              />
                            ) : (
                              <>
                                {header}
                                {index > 0 && ( // Não mostrar o ícone de edição para o cabeçalho "Área"
                                  <button 
                                    onClick={() => startEditingHeader(index)} 
                                    className="ml-2 text-automato-gold/70 hover:text-automato-gold transition-colors"
                                  >
                                    <Edit2 size={14} />
                                  </button>
                                )}
                              </>
                            )}
                          </div>
                        </TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tableData.rows.map((row, rowIndex) => (
                      <TableRow 
                        key={rowIndex}
                        className="bg-automato-dark-blue/40 border-b border-automato-gold/20 last:border-b-0 hover:bg-automato-dark-blue/60 transition-colors"
                      >
                        <TableCell className="py-3 px-4 border-r border-automato-gold/20">
                          {tableData.editing && tableData.editing.rowIndex === rowIndex && tableData.editing.column === 'area' ? (
                            <input
                              type="text"
                              value={editingValue}
                              onChange={(e) => setEditingValue(e.target.value)}
                              onBlur={saveEditedValue}
                              onKeyPress={(e) => e.key === 'Enter' && saveEditedValue()}
                              className="bg-automato-dark-blue/80 text-white px-2 py-1 w-full border border-automato-gold/30 rounded"
                              autoFocus
                            />
                          ) : (
                            <div className="flex items-center justify-between">
                              <span className="text-white font-medium">{row.area}</span>
                              <button 
                                onClick={() => startEditing(rowIndex, 'area')} 
                                className="ml-2 text-automato-gold/70 hover:text-automato-gold transition-colors"
                              >
                                <Edit2 size={14} />
                              </button>
                            </div>
                          )}
                        </TableCell>
                        <TableCell className="py-3 px-4 border-r border-automato-gold/20">
                          {tableData.editing && tableData.editing.rowIndex === rowIndex && tableData.editing.column === 'chatbot' ? (
                            <input
                              type="text"
                              value={editingValue}
                              onChange={(e) => setEditingValue(e.target.value)}
                              onBlur={saveEditedValue}
                              onKeyPress={(e) => e.key === 'Enter' && saveEditedValue()}
                              className="bg-automato-dark-blue/80 text-white px-2 py-1 w-full border border-automato-gold/30 rounded"
                              autoFocus
                            />
                          ) : (
                            <div className="flex items-start">
                              <span className="text-automato-gold mr-2">✓</span>
                              <div className="flex flex-1 justify-between">
                                <span className="text-white/80">{row.chatbot}</span>
                                <button 
                                  onClick={() => startEditing(rowIndex, 'chatbot')} 
                                  className="ml-2 text-automato-gold/70 hover:text-automato-gold transition-colors"
                                >
                                  <Edit2 size={14} />
                                </button>
                              </div>
                            </div>
                          )}
                        </TableCell>
                        <TableCell className="py-3 px-4 border-r border-automato-gold/20 last:border-r-0">
                          {tableData.editing && tableData.editing.rowIndex === rowIndex && tableData.editing.column === 'automation' ? (
                            <input
                              type="text"
                              value={editingValue}
                              onChange={(e) => setEditingValue(e.target.value)}
                              onBlur={saveEditedValue}
                              onKeyPress={(e) => e.key === 'Enter' && saveEditedValue()}
                              className="bg-automato-dark-blue/80 text-white px-2 py-1 w-full border border-automato-gold/30 rounded"
                              autoFocus
                            />
                          ) : (
                            <div className="flex items-start">
                              <span className="text-automato-gold mr-2">✓</span>
                              <div className="flex flex-1 justify-between">
                                <span className="text-white/80">{row.automation}</span>
                                <button 
                                  onClick={() => startEditing(rowIndex, 'automation')} 
                                  className="ml-2 text-automato-gold/70 hover:text-automato-gold transition-colors"
                                >
                                  <Edit2 size={14} />
                                </button>
                              </div>
                            </div>
                          )}
                        </TableCell>
                        {/* Renderizar colunas adicionais dinâmicamente */}
                        {Object.keys(row).filter(key => !['area', 'chatbot', 'automation'].includes(key)).map((key, i) => (
                          <TableCell key={i} className="py-3 px-4 border-r border-automato-gold/20 last:border-r-0">
                            {tableData.editing && tableData.editing.rowIndex === rowIndex && tableData.editing.column === key ? (
                              <input
                                type="text"
                                value={editingValue}
                                onChange={(e) => setEditingValue(e.target.value)}
                                onBlur={saveEditedValue}
                                onKeyPress={(e) => e.key === 'Enter' && saveEditedValue()}
                                className="bg-automato-dark-blue/80 text-white px-2 py-1 w-full border border-automato-gold/30 rounded"
                                autoFocus
                              />
                            ) : (
                              <div className="flex items-start">
                                <span className="text-automato-gold mr-2">✓</span>
                                <div className="flex flex-1 justify-between">
                                  <span className="text-white/80">{row[key]}</span>
                                  <button 
                                    onClick={() => startEditing(rowIndex, key)} 
                                    className="ml-2 text-automato-gold/70 hover:text-automato-gold transition-colors"
                                  >
                                    <Edit2 size={14} />
                                  </button>
                                </div>
                              </div>
                            )}
                          </TableCell>
                        ))}
                        {/* Adicionar botão para remover a linha */}
                        <TableCell className="py-3 px-2 w-12">
                          <button 
                            onClick={() => removeRow(rowIndex)}
                            className="text-automato-gold/70 hover:text-automato-gold transition-colors"
                            title="Remover linha"
                          >
                            <Trash2 size={14} />
                          </button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
          
          {/* Botões para adicionar linha/coluna */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <Button 
              onClick={addNewRow}
              className="button-gradient flex items-center gap-2"
              size="sm"
            >
              <Plus size={16} />
              <span>Adicionar Linha</span>
            </Button>
            <Button 
              onClick={addNewColumn}
              className="button-gradient flex items-center gap-2"
              size="sm"
            >
              <Plus size={16} />
              <span>Adicionar Coluna</span>
            </Button>
          </div>
          
          <div className="text-center mt-12 text-white/60 text-sm">
            <p>Esta tabela é editável. Clique nos botões de edição para modificar o conteúdo, e use os botões abaixo para adicionar linhas ou colunas.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
