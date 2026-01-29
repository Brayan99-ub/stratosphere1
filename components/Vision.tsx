
import React from 'react';
import { Play } from 'lucide-react';

const Vision: React.FC = () => {
  return (
    <section className="px-8 py-20">
      <div className="relative w-full aspect-[21/9] rounded-[48px] overflow-hidden group">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600" 
          className="w-full h-full object-cover grayscale brightness-[0.3] group-hover:scale-110 transition-transform duration-[3s]"
          alt="Deep Space Vision"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
          <h2 className="text-5xl md:text-8xl font-light tracking-tighter uppercase mb-12 leading-none max-w-4xl">
            PLONGEZ DANS LE <br /> <span className="font-serif italic font-normal">FUTUR</span>
          </h2>
          
          <button className="relative group/play">
            <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500 scale-100 group-hover/play:scale-125">
              <Play size={32} fill="currentColor" />
            </div>
          </button>
          
          <p className="mt-12 text-gray-400 text-xs max-w-lg font-light tracking-widest uppercase">
            Inscrivez-vous pour rejoindre le cénacle exclusif de l'élite visionnaire.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Vision;
