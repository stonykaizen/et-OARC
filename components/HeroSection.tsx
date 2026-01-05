
import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <header className="flex flex-col items-center text-center">
      <div className="mb-10 px-6 py-2 border border-blue-500/20 bg-blue-500/10 font-mono text-[11px] text-blue-400 uppercase tracking-[0.4em] backdrop-blur-md">
        Especificación Técnica // OARC
      </div>
      
      <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-none uppercase select-none text-slate-100">
        INFERENCIA CONTINUA EN <br/>
        <span className="text-blue-500 drop-shadow-[0_0_20px_rgba(59,130,246,0.2)]">RECURSOS LIMITADOS</span>
      </h1>
      
      <p className="text-xl md:text-2xl font-light text-slate-500 mb-16 max-w-4xl tracking-tight leading-relaxed">
        Orquestación Asimétrica y Rehidratación de Contexto
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        <Badge text="Wearables / IoT / Móvil" color="green" />
        <Badge text="Híbrido CPU / GPU / NPU / DSP" color="blue" />
        <Badge text="Optimización Energética" color="green" />
      </div>
    </header>
  );
};

const Badge: React.FC<{ text: string; color: 'blue' | 'green' }> = ({ text, color }) => {
  const borderColor = color === 'blue' ? 'border-blue-500/30' : 'border-emerald-500/30';
  const textColor = color === 'blue' ? 'text-blue-400' : 'text-emerald-400';
  const bgColor = color === 'blue' ? 'bg-blue-500/5' : 'bg-emerald-500/5';
  
  return (
    <span className={`px-6 py-3 border ${borderColor} ${textColor} ${bgColor} font-mono text-[11px] uppercase tracking-[0.2em] shadow-lg`}>
      {text}
    </span>
  );
};
