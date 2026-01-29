
import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-32 px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
      <div className="flex-1 relative">
        <div className="w-full aspect-square rounded-full overflow-hidden border border-white/10 relative">
          <img 
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800" 
            className="w-full h-full object-cover grayscale brightness-75"
            alt="About Future"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-transparent" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-white/5 rounded-full" />
      </div>
      
      <div className="flex-1">
        <span className="text-[10px] font-tech tracking-[0.5em] text-gray-500 mb-6 block uppercase">About Us</span>
        <h2 className="text-5xl md:text-7xl font-light tracking-tighter mb-8 leading-none">
          LA FRONTIÈRE <br /> <span className="text-outline">STRATOSPHÉRIQUE</span>
        </h2>
        
        <div className="flex gap-4 mb-10">
          <span className="px-3 py-1 bg-white/10 rounded-full text-[9px] uppercase tracking-widest">Digital</span>
          <span className="px-3 py-1 bg-white/10 rounded-full text-[9px] uppercase tracking-widest">Reality</span>
          <span className="px-3 py-1 bg-white/10 rounded-full text-[9px] uppercase tracking-widest">Next</span>
        </div>
        
        <p className="text-gray-400 leading-relaxed mb-12 max-w-lg font-light">
          Nous redéfinissons les limites de l'investissement et de la création de valeur en fusionnant haute technologie et vision architecturale. La Stratosphère n'est pas qu'une holding, c'est l'avenir en construction.
        </p>
        
        <div className="flex items-center gap-8">
          <button className="bg-white text-black px-10 py-3 rounded-md text-[10px] font-bold uppercase tracking-widest hover:bg-gray-200 transition-all">
            Learn More
          </button>
          <button className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
              <Play size={12} fill="currentColor" />
            </div>
            <span className="text-[10px] uppercase tracking-widest font-bold">Watch Video</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
