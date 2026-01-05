
import React from 'react';

export const TechnicalSpecs: React.FC = () => {
  const specs = [
    { label: "VRAM Load", value: "O(1) Constante", desc: "Escalabilidad infinita sin incremento de memoria física.", color: 'blue' },
    { label: "Inference Latency", value: "< 12ms / Token", desc: "Optimización de punteros semánticos en el borde.", color: 'green' },
    { label: "Hardware Support", value: "Agnóstico", desc: "Integración nativa en NPU, TPU y CPU x86/ARM.", color: 'blue' },
    { label: "Data Integrity", value: "100% Literal", desc: "Mecanismo sin pérdidas para datos críticos.", color: 'green' },
  ];

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
      {specs.map((spec, i) => (
        <div key={i} className="p-8 border border-white/5 bg-[#080808] flex flex-col gap-3 group">
          <div className="font-mono text-[9px] text-slate-600 uppercase tracking-[0.3em]">{spec.label}</div>
          <div className={`text-2xl font-black ${spec.color === 'blue' ? 'text-blue-500' : 'text-emerald-500'} uppercase tracking-tighter`}>{spec.value}</div>
          <div className="text-sm text-slate-500 italic leading-relaxed">{spec.desc}</div>
        </div>
      ))}
    </div>
  );
};
