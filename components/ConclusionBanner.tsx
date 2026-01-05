
import React from 'react';

export const ConclusionBanner: React.FC = () => {
  return (
    <footer className="w-full mt-24">
      <div className="w-full p-16 border border-white/5 bg-[#080808] text-center relative overflow-hidden shadow-[0_0_40px_rgba(59,130,246,0.05)]">
        {/* Marcadores de Esquina Blueprint */}
        <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-blue-500/40"></div>
        <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-blue-500/40"></div>
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-blue-500/40"></div>
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-blue-500/40"></div>
        
        <p className="text-slate-400 font-mono text-xl md:text-3xl leading-relaxed max-w-4xl mx-auto uppercase tracking-tighter">
          "Habilitando <span className="text-emerald-500 font-black">IA compleja en wearables y dispositivos IoT</span> mediante segmentación semántica."
        </p>
        
        <div className="mt-12 flex items-center justify-center gap-12">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-slate-800"></div>
          <span className="font-mono text-[9px] uppercase tracking-[0.6em] text-slate-600">Protocolo Patente OARC // Fin del Documento</span>
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-slate-800"></div>
        </div>
      </div>
    </footer>
  );
};