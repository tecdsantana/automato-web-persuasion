import React, { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

const CalendarMeeting = () => {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "30min" });

      // UI settings
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <section id="calendar-meeting" className="section-padding bg-automato-black">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Agende um <span className="text-automato-gold">Diagnóstico</span> Gratuito
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-automato-blue to-automato-gold mx-auto mb-6" />
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Automatize processos, ganhe tempo e foque no que realmente importa: crescer. Fale com um de nossos consultores e transforme seus resultados.
          </p>
        </div>

        <div className="bg-automato-dark-blue/30 p-6 rounded-xl border border-automato-gold/20 max-w-4xl mx-auto">
          <div style={{ width: "100%", height: 500 }}>
            <Cal
              namespace="30min"
              calLink="douglas-santana-ccpigl/30min"
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              config={{ layout: "month_view" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendarMeeting;
