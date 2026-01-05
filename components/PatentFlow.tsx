
import React from 'react';

export const PatentFlow: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto py-12 font-mono text-center">
      
      {/* 100 - Prompt de Usuario */}
      <Node id="100" text="Prompt de Usuario (Entrada)" type="oval" color="blue" />
      <Connector />

      {/* 110 - Preprocesamiento */}
      <Node id="110" text="Preprocesamiento y Tokenización" type="rect" color="blue" />
      <Connector />

      {/* 120 - Segmentación */}
      <Node id="120" text="Segmentación del Prompt" type="rect" color="blue" />
      <Connector />

      {/* 130 - Cálculo CDM */}
      <Node id="130" text="Cálculo de CDM por Segmento" type="diamond" color="green" />
      <Connector label="CDM Calculado" />

      {/* 140 - Decisión */}
      <Node id="140" text="Decisión de Asignación de Recursos (Paso C)" type="diamond" color="blue" />
      
      {/* Branching 150 / 160 */}
      <div className="relative w-full flex justify-center py-12">
        {/* Líneas de bifurcación */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-12 border-x border-t border-slate-800"></div>
        
        <div className="flex justify-between w-full max-w-lg mt-12 relative z-10 px-4">
          <Node id="150" text="Ejecución en Nodo SLM" type="rect" color="green" small />
          <Node id="160" text="Ejecución en Nodo LLM" type="rect" color="blue" small idSide="right" />
        </div>
      </div>

      {/* Unión de ramas */}
      <div className="w-[70%] h-12 border-x border-b border-slate-800 -mt-12 mb-12"></div>
      <Connector />

      {/* 170 - Ensamble */}
      <Node id="170" text="Ensamble del Resultado" type="rect" color="blue" />
      <Connector />

      {/* 180 - Entrega */}
      <Node id="180" text="Entrega al Usuario (Salida)" type="oval" color="blue" />

    </div>
  );
};

const Connector: React.FC<{ label?: string }> = ({ label }) => (
  <div className="flex flex-col items-center py-1">
    {label && <span className="text-[9px] text-slate-500 mb-2 uppercase tracking-widest font-bold">{label}</span>}
    <div className="h-10 w-px bg-slate-800"></div>
    <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-slate-800"></div>
  </div>
);

interface NodeProps {
  id: string;
  text: string;
  type: 'oval' | 'rect' | 'diamond';
  color: 'blue' | 'green';
  small?: boolean;
  idSide?: 'left' | 'right';
}

const Node: React.FC<NodeProps> = ({ id, text, type, color, small, idSide = 'left' }) => {
  const borderColor = color === 'blue' ? 'border-blue-500/40' : 'border-emerald-500/40';
  const textColor = color === 'blue' ? 'text-blue-400' : 'text-emerald-400';
  const bgColor = 'bg-[#0a0a0a]';

  const baseStyles = `relative border ${borderColor} ${bgColor} ${textColor} flex items-center justify-center transition-all hover:bg-slate-900/30 group`;
  const sizeStyles = small ? 'w-48 h-12 text-[10px]' : 'w-64 h-14 text-xs';

  const idIndicator = (
    <span className={`absolute ${idSide === 'left' ? '-left-12' : '-right-12'} text-[10px] text-slate-600 font-bold whitespace-nowrap`}>
      {idSide === 'left' ? `${id} —` : `— ${id}`}
    </span>
  );

  if (type === 'oval') {
    return (
      <div className={`${baseStyles} ${sizeStyles} rounded-full border-2 px-4`}>
        {idIndicator}
        <span className="font-bold uppercase tracking-tight leading-none">{text}</span>
      </div>
    );
  }

  if (type === 'diamond') {
    return (
      <div className="relative py-20 flex items-center justify-center w-full">
        <span className="absolute left-[calc(50%-160px)] text-[10px] text-slate-600 font-bold">{id} —</span>
        <div className="relative flex items-center justify-center w-40 h-40">
          {/* El rombo se construye con un cuadrado perfecto rotado 45 grados */}
          <div className={`absolute inset-0 border-2 ${borderColor} ${bgColor} rotate-45 z-0`}></div>
          {/* El texto se mantiene a 0 grados para máxima legibilidad */}
          <div className={`relative z-10 ${textColor} font-bold uppercase tracking-tighter text-[10px] px-6 text-center leading-tight max-w-[120px]`}>
            {text}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${baseStyles} ${sizeStyles} border-2 px-4`}>
      {idIndicator}
      <span className="font-bold uppercase tracking-tight leading-none">{text}</span>
      {/* Esquinas blueprint decorativas */}
      <div className={`absolute -top-1 -left-1 w-2 h-2 border-t border-l ${borderColor}`}></div>
      <div className={`absolute -bottom-1 -right-1 w-2 h-2 border-b border-r ${borderColor}`}></div>
    </div>
  );
};
