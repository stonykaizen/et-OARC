
import React from 'react';

export const ProblemSection: React.FC = () => {
  return (
    <div className="w-full border-y border-white/5 py-24 flex flex-col items-center bg-[#0d0d0d]/40 backdrop-blur-sm">
      <div className="max-w-3xl w-full flex flex-col gap-16">
        <div className="text-center">
          <div className="inline-block px-3 py-1 border border-red-500/30 bg-red-500/10 text-red-400 font-mono text-[10px] mb-6 uppercase tracking-[0.3em]">
            Estado de la Técnica // Fricción
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter leading-[0.9] text-slate-200">
            La Crisis de <br/>Saturación Lineal
          </h2>
          <p className="text-slate-500 mt-4 text-lg max-w-2xl mx-auto font-medium">
            Las arquitecturas actuales de IA enfrentan cuellos de botella críticos cuando operan en dispositivos locales con memoria volátil limitada.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProblemItem 
            num="01" 
            title="Memoria Volátil" 
            text="La KV-Cache expande la VRAM hasta el colapso físico, impidiendo sesiones de inferencia de longitud prolongada." 
          />
          <ProblemItem 
            num="02" 
            title="Saturación de Atención" 
            text="Al aumentar el contexto, el modelo degrada su coherencia semántica debido al ruido acumulado en la RAM." 
          />
        </div>
      </div>
    </div>
  );
};

const ProblemItem: React.FC<{ num: string, title: string, text: string }> = ({ num, title, text }) => (
  <div className="flex flex-col gap-6 p-10 border border-white/5 bg-[#080808] relative group">
    <div className="absolute top-0 right-0 p-2 opacity-20">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0H20V20" stroke="currentColor" strokeWidth="0.5" className="text-red-500" />
      </svg>
    </div>
    <div className="font-mono text-red-500/40 text-4xl font-black">
      {num}
    </div>
    <div>
      <h3 className="text-xl font-black mb-3 uppercase text-slate-100 tracking-tight">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed font-medium">
        {text}
      </p>
    </div>
  </div>
);
