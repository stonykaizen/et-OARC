
import React from 'react';

export const FlowDiagram: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto py-12 font-mono">
      {/* Paso 1: Entrada */}
      <Step 
        title="Prompt Usuario" 
        color="blue"
        label="CAPA_ENTRADA"
      />
      
      <Connector />

      {/* Paso 2: Análisis */}
      <Step 
        title="Análisis Semántico SLM" 
        details={["Detección de intención", "Segmentación lógica"]}
        color="blue"
        label="PROCESO_ORQUESTACIÓN"
      />

      <Connector />

      {/* Paso 3: CDM */}
      <Step 
        title="Cálculo CDM por Segmento" 
        color="green"
        label="MÉTRICA_DENSIDAD"
      />

      <Connector />

      {/* Paso 4: Asignación */}
      <Step 
        title="Asignación Estratégica" 
        details={[
          "Segmento CDM alto → LLM / GPU-NPU", 
          "Segmento CDM bajo → SLM / CPU"
        ]}
        color="blue"
        label="RECURSOS_ASIMÉTRICOS"
      />

      <Connector />

      {/* Paso 5: Ejecución */}
      <Step 
        title="Ejecución del Segmento" 
        details={["KV-cache local", "Inferencia autónoma"]}
        color="green"
        label="CÓMPUTO_ACTIVO"
      />

      <Connector />

      {/* Paso 6: Extracción */}
      <Step 
        title="Extracción Estado Latente" 
        details={["Vectores ortogonales", "Índices / Metadatos"]}
        color="green"
        label="VECTORIZACIÓN"
      />

      <Connector />

      {/* Paso 7: Flush KV-cache (Operación Crítica) */}
      <div className="w-full py-8 flex flex-col items-center">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
        <div className="my-2 px-8 py-3 border border-red-500/40 bg-red-500/10 text-red-500 text-xs font-black tracking-[0.5em] uppercase shadow-[0_0_20px_rgba(239,68,68,0.15)] flex flex-col items-center gap-1">
          <span>Flush KV-cache</span>
          <span className="text-[9px] opacity-70 tracking-[0.3em] font-medium">(liberación inmediata)</span>
        </div>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
      </div>

      <Connector />

      {/* Paso 8: Reinyección */}
      <Step 
        title="Reinyección de Estado" 
        details={["Logits (nativo) o", "Prompt condensado"]}
        color="green"
        label="REHIDRATACIÓN_CONTEXTO"
      />

      {/* Iteración Label */}
      <div className="py-12 flex flex-col items-center w-full">
        <div className="w-px h-16 border-l border-dashed border-slate-700"></div>
        <div className="px-6 py-2 border border-slate-800 bg-slate-900/40 my-3 rounded-none relative">
          <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-slate-600"></div>
          <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-slate-600"></div>
          <span className="text-[10px] text-slate-500 uppercase tracking-[0.5em] font-bold">(Iteración por segmento)</span>
        </div>
        <div className="w-px h-16 border-l border-dashed border-slate-700"></div>
        <div className="w-3 h-3 border-b border-r border-slate-700 -mt-2 rotate-45"></div>
      </div>

      {/* Paso 10: Ensamble */}
      <Step 
        title="Ensamble y Validación" 
        details={["Coherencia global"]}
        color="blue"
        label="RESULTADO_SISTEMA"
      />
    </div>
  );
};

const Connector = () => (
  <div className="flex flex-col items-center py-2">
    <div className="h-12 w-px bg-slate-800"></div>
    <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[8px] border-t-slate-800"></div>
  </div>
);

interface StepProps {
  title: string;
  details?: string[];
  color: 'blue' | 'green';
  label: string;
}

const Step: React.FC<StepProps> = ({ title, details, color, label }) => {
  const borderColor = color === 'blue' ? 'border-blue-500/30' : 'border-emerald-500/30';
  const bgColor = 'bg-[#0c0c0c]';
  const textColor = color === 'blue' ? 'text-blue-400' : 'text-emerald-400';
  const accentColor = color === 'blue' ? 'bg-blue-500' : 'bg-emerald-500';

  return (
    <div className={`w-full max-w-md border ${borderColor} ${bgColor} p-6 relative overflow-hidden group shadow-2xl`}>
      {/* Esquinas blueprint */}
      <div className={`absolute top-0 left-0 w-2 h-2 border-t border-l ${borderColor}`}></div>
      <div className={`absolute top-0 right-0 w-2 h-2 border-t border-r ${borderColor}`}></div>
      <div className={`absolute bottom-0 left-0 w-2 h-2 border-b border-l ${borderColor}`}></div>
      <div className={`absolute bottom-0 right-0 w-2 h-2 border-b border-r ${borderColor}`}></div>
      
      <div className="flex flex-col">
        <div className="flex justify-between items-center mb-1">
          <div className="flex flex-col">
            <span className={`text-[8px] font-mono tracking-[0.4em] uppercase mb-1 opacity-40 ${textColor}`}>
              {label}
            </span>
            <h4 className={`text-sm font-black uppercase tracking-widest ${textColor}`}>{title}</h4>
          </div>
          <div className={`w-2 h-2 ${accentColor} opacity-40 rounded-none`}></div>
        </div>
        
        {details && (
          <div className="mt-4 space-y-2 border-t border-white/5 pt-4">
            {details.map((detail, idx) => (
              <div key={idx} className="text-[10px] text-slate-500 uppercase flex items-start gap-3 font-medium">
                <span className={`mt-1.5 w-1 h-1 flex-shrink-0 ${accentColor} opacity-30`}></span>
                <span className="leading-tight">{detail}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
