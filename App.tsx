
import React from 'react';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { PatentFlow } from './components/PatentFlow';
import { TechnicalConcepts } from './components/TechnicalConcepts';
import { ConclusionBanner } from './components/ConclusionBanner';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative flex flex-col items-center pb-32 selection:bg-blue-500/30 selection:text-white">
      {/* Atmósfera de Orquestación (Azul) */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.05] bg-[radial-gradient(circle_at_20%_30%,#3b82f6_0%,transparent_50%)]"></div>
      {/* Atmósfera de Cómputo (Verde/Azul claro) */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.05] bg-[radial-gradient(circle_at_80%_70%,#10b981_0%,transparent_50%)]"></div>
      
      <main className="relative z-10 w-full max-w-5xl px-8 pt-24 flex flex-col gap-32">
        {/* 1. ENCABEZADO */}
        <HeroSection />
        
        {/* 2. EL PROBLEMA */}
        <ProblemSection />

        {/* 3. DIAGRAMA DE PATENTE */}
        <section className="flex flex-col items-center">
          <div className="w-px h-24 bg-gradient-to-b from-transparent via-blue-500/20 to-blue-500/40 mb-12"></div>
          <h2 className="font-mono text-[10px] uppercase tracking-[0.5em] text-blue-500/60 mb-16 border-x border-blue-900/30 px-6 py-1 bg-blue-500/5">
            Arquitectura de Flujo Lógico (Figura 1)
          </h2>
          <PatentFlow />
        </section>

        {/* 4. CONCEPTOS TÉCNICOS */}
        <section className="flex flex-col items-center">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.5em] text-emerald-500/60 mb-12 border-x border-emerald-900/30 px-6 py-1 bg-emerald-500/5">
            Núcleos Funcionales OARC
          </h2>
          <TechnicalConcepts />
        </section>

        {/* 5. CONCLUSIÓN */}
        <ConclusionBanner />
      </main>
    </div>
  );
};

export default App;
