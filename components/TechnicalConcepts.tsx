
import React from 'react';

export const TechnicalConcepts: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
      <ConceptCard 
        title="Métrica CDM" 
        description="Fórmula heurística que decide la dificultad de la tarea (Lógica vs Creativa) antes de procesar." 
        id="OARC_CDM_01"
        color="blue"
      />
      <ConceptCard 
        title="Asignación Asimétrica" 
        description="Distribuye el trabajo inteligentemente. No usa un modelo gigante para tareas simples." 
        id="OARC_ASYNC_02"
        color="blue"
      />
      <ConceptCard 
        title="Rehidratación" 
        description="Transfiere vectores de 'estilo' e 'identidad' al siguiente tramo. Mantiene la coherencia sin ocupar RAM acumulada." 
        id="OARC_REHYD_03"
        color="green"
      />
    </div>
  );
};

const ConceptCard: React.FC<{ title: string; description: string; id: string, color: 'blue' | 'green' }> = ({ title, description, id, color }) => {
  const accentColor = color === 'blue' ? 'text-blue-500' : 'text-emerald-500';
  const borderColor = color === 'blue' ? 'border-blue-500/20' : 'border-emerald-500/20';
  const lineStyle = color === 'blue' ? 'bg-blue-500/30' : 'bg-emerald-500/30';

  return (
    <div className={`p-10 border ${borderColor} bg-slate-950/80 flex flex-col gap-6 relative overflow-hidden`}>
      <div className={`absolute top-0 right-0 w-16 h-16 ${color === 'blue' ? 'bg-blue-500/5' : 'bg-emerald-500/5'} rotate-45 translate-x-8 -translate-y-8`}></div>
      <div className={`${accentColor} opacity-50 font-mono text-[9px] tracking-[0.4em] uppercase`}>Módulo // {id}</div>
      <h3 className="text-xl font-black text-slate-200 uppercase tracking-tight leading-none">{title}</h3>
      <div className={`w-12 h-0.5 ${lineStyle}`}></div>
      <p className="text-sm text-slate-500 leading-relaxed font-medium">
        {description}
      </p>
    </div>
  );
};