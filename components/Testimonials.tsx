
import React from 'react';

const Testimonials: React.FC = () => {
  const voices = [
    { name: 'James Rizaki', role: 'Partner Elite', quote: 'StratoVision a complètement transformé notre approche de l\'investissement stratégique.' },
    { name: 'Samantha Leonardo', role: 'Global Visionary', quote: 'L\'infrastructure sécurisée de Strato est un pilier indispensable pour notre expansion mondiale.' },
    { name: 'Mark Trevor', role: 'Tech Architect', quote: 'Je travaille avec des holdings depuis des années, mais la précision de Strato est inégalée.' }
  ];

  return (
    <section className="py-32 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
      <div className="flex-1">
        <h2 className="text-6xl md:text-8xl font-light tracking-tighter uppercase mb-12 leading-[0.9]">
          VOICES OF <br /> <span className="text-outline">THE FUTURE</span>
        </h2>
        <p className="text-gray-500 text-sm max-w-sm font-light leading-relaxed">
          Écoutez les pionniers et leaders qui façonnent déjà la prochaine génération de l'excellence mondiale avec nous.
        </p>
      </div>
      
      <div className="flex-1 flex flex-col gap-6">
        {voices.map((v, i) => (
          <div key={i} className="neo-card p-10 rounded-[24px] flex items-center justify-between gap-8 hover:translate-x-4 transition-all duration-500 cursor-default">
            <div className="flex-1">
              <p className="text-gray-400 text-sm font-light italic mb-4">"{v.quote}"</p>
              <h4 className="text-sm font-bold uppercase tracking-widest">{v.name}</h4>
              <span className="text-[9px] text-gray-600 uppercase tracking-widest mt-1 block">{v.role}</span>
            </div>
            <div className="w-16 h-16 rounded-full overflow-hidden grayscale bg-white/5 border border-white/10 shrink-0">
              <img src={`https://i.pravatar.cc/150?img=${i+30}`} alt={v.name} className="w-full h-full object-cover" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
