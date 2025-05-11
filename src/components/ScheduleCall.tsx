
import React, { useState } from 'react';
import { format, addDays, startOfWeek, addWeeks } from 'date-fns';
import { pt } from 'date-fns/locale';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Clock, Globe } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const timeSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
  '16:00', '16:30', '17:00', '17:30'
];

const ScheduleCall = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeSlot, setTimeSlot] = useState<string | undefined>(undefined);
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [isBookingStep, setIsBookingStep] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleDateSelect = (selected: Date | undefined) => {
    setDate(selected);
    setIsBookingStep(!!selected);
  };

  const handlePreviousMonth = () => {
    setCurrentMonth(prevMonth => addWeeks(prevMonth, -4));
  };

  const handleNextMonth = () => {
    setCurrentMonth(prevMonth => addWeeks(prevMonth, 4));
  };

  const handleTimeSelect = (time: string) => {
    setTimeSlot(time);
  };

  const handleBackToCalendar = () => {
    setIsBookingStep(false);
    setTimeSlot(undefined);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating API call to book appointment
    setTimeout(() => {
      toast({
        title: "Agendamento confirmado!",
        description: `Sua chamada de diagnóstico está marcada para ${date && format(date, 'dd/MM/yyyy')} às ${timeSlot}.`,
      });
      
      setIsSubmitting(false);
      setDate(undefined);
      setTimeSlot(undefined);
      setName('');
      setEmail('');
      setPhone('');
      setIsBookingStep(false);
    }, 1500);
  };

  const isDayDisabled = (day: Date) => {
    // Disable weekends and past days
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const isWeekend = day.getDay() === 0 || day.getDay() === 6;
    const isPast = day < today;
    
    return isWeekend || isPast;
  };

  const formatMonth = (date: Date) => {
    return format(date, "MMMM yyyy", { locale: pt });
  };

  const renderTimeSlots = () => {
    return (
      <div className="grid grid-cols-2 gap-3 mt-4">
        {timeSlots.map((time) => (
          <Button
            key={time}
            variant="outline"
            className={`
              h-10 text-md border border-automato-gold/30 
              ${timeSlot === time ? 'bg-automato-gold text-black' : 'bg-automato-dark-blue/50 text-white'}
              hover:bg-automato-gold/80 hover:text-black transition-colors
            `}
            onClick={() => handleTimeSelect(time)}
          >
            {time}
          </Button>
        ))}
      </div>
    );
  };

  const renderBookingForm = () => {
    return (
      <div className="space-y-4 mt-6">
        <div>
          <h3 className="text-lg font-light text-white mb-2">Informações de Contato</h3>
          <p className="text-sm text-white/70 mb-4">
            Preencha seus dados para confirmar o agendamento.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="text-sm text-white/70">Nome</label>
            <input 
              id="name" 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              className="w-full bg-automato-dark-blue/50 border border-automato-gold/30 text-white focus:border-automato-gold focus:gold-glow px-4 py-2 rounded-md" 
              required
              placeholder="Seu nome completo"
              disabled={isSubmitting}
            />
          </div>
          
          <div>
            <label htmlFor="email" className="text-sm text-white/70">Email</label>
            <input 
              id="email" 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="w-full bg-automato-dark-blue/50 border border-automato-gold/30 text-white focus:border-automato-gold focus:gold-glow px-4 py-2 rounded-md" 
              required
              placeholder="seu@email.com"
              disabled={isSubmitting}
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="text-sm text-white/70">Telefone</label>
            <input 
              id="phone" 
              type="tel" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
              className="w-full bg-automato-dark-blue/50 border border-automato-gold/30 text-white focus:border-automato-gold focus:gold-glow px-4 py-2 rounded-md" 
              required
              placeholder="(00) 00000-0000"
              disabled={isSubmitting}
            />
          </div>
          
          <div className="flex space-x-4">
            <Button 
              type="button" 
              variant="outline" 
              className="flex-1 border border-automato-gold/70 text-automato-gold bg-transparent hover:bg-automato-gold/10" 
              onClick={handleBackToCalendar}
              disabled={isSubmitting}
            >
              Voltar
            </Button>
            <Button 
              type="submit" 
              className="flex-1 button-gradient hover:gold-glow transition-all duration-300" 
              disabled={isSubmitting}
            >
              {isSubmitting ? "Agendando..." : "Confirmar Agendamento"}
            </Button>
          </div>
        </form>
      </div>
    );
  };

  return (
    <Card className="futuristic-card gold-glow rounded-md overflow-hidden">
      <CardHeader className="border-b border-automato-gold/20 pb-4 bg-gradient-to-r from-automato-dark-blue/70 to-automato-blue/30">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-automato-gold/20 border border-automato-gold flex items-center justify-center mr-4">
            <Clock className="w-6 h-6 text-automato-gold" />
          </div>
          <div>
            <CardTitle className="text-xl font-light tracking-wider text-white">Discovery Call</CardTitle>
            <CardDescription className="text-white/70">
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-1" /> 30 min
              </span>
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6 pb-6">
        <div className="mb-4">
          <p className="text-white/80 text-sm mb-2">
            Agende uma chamada de 30 minutos para descobrirmos como implementar IA no seu processo de vendas.
          </p>
          <p className="text-white/60 text-xs">
            Se você não conseguir comparecer à chamada, nos deixe cientes antecipadamente.
          </p>
        </div>

        {!isBookingStep ? (
          <div className="mt-6 space-y-6">
            <div className="flex items-center justify-between mb-2">
              <button 
                onClick={handlePreviousMonth} 
                className="text-automato-gold hover:text-automato-gold/80"
                aria-label="Mês anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <h3 className="text-white font-light text-lg">
                {formatMonth(currentMonth)}
              </h3>
              <button 
                onClick={handleNextMonth} 
                className="text-automato-gold hover:text-automato-gold/80"
                aria-label="Próximo mês"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            
            <Calendar
              mode="single"
              selected={date}
              onSelect={handleDateSelect}
              disabled={isDayDisabled}
              month={currentMonth}
              onMonthChange={setCurrentMonth}
              className="p-3 pointer-events-auto rounded border border-automato-gold/20 bg-automato-dark-blue/30"
              classNames={{
                day_selected: "bg-automato-gold text-automato-black hover:bg-automato-gold/90 hover:text-automato-black",
                day_today: "bg-automato-blue/30 text-white",
                day: "hover:bg-automato-gold/20 text-white",
                head_cell: "text-automato-gold/70",
                caption: "text-white"
              }}
            />
            
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-automato-gold" />
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="link" className="text-automato-gold p-0">
                    Horário de Brasília (GMT-3)
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="bg-automato-dark-blue border border-automato-gold/30 text-white">
                  <div className="text-sm">
                    <p className="font-semibold mb-2">Seu fuso horário</p>
                    <p>Todos os horários são exibidos no fuso horário de Brasília (GMT-3).</p>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        ) : (
          <div className="mt-6 space-y-4">
            <div>
              <h3 className="text-lg font-light text-white mb-2">Escolha um horário</h3>
              <p className="text-sm text-white/70">
                {date && format(date, "EEEE, dd 'de' MMMM", { locale: pt })}
              </p>
            </div>
            
            {timeSlot ? renderBookingForm() : renderTimeSlots()}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ScheduleCall;
