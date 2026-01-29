
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Clubs: React.FC = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [1, -1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section id="clubs" ref={ref} className="h-screen w-full flex items-center justify-center relative bg-[#050505] overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
      </div>

      <motion.div 
        style={{ rotate, opacity }}
        className="relative z-10 max-w-4xl text-center px-6"
      >
        <div className="inline-block p-4 rounded-full border border-white/5 bg-white/[0.02] mb-12">
          <div className="w-3 h-3 bg-white rounded-full animate-pulse shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
        </div>
        
        <span className="text-white/30 uppercase tracking-[1em] text-[10px] mb-8 block font-tech">Le Sanctuaire</span>
        <h2 className="text-4xl md:text-7xl font-serif uppercase tracking-widest mb-10 leading-tight font-light">
          LES CLUBS <br /> <span className="italic lowercase">Stratosphères</span>
        </h2>
        <p className="text-gray-500 font-light text-xl leading-relaxed mb-16 italic max-w-2xl mx-auto">
          "Un cercle initiatique où la pensée visionnaire rencontre l'audace opérationnelle. Plus qu'un club, une architecture de l'esprit."
        </p>
        
        <button className="group relative px-16 py-6 border border-white/10 hover:border-white/40 transition-all duration-1000">
          <span className="relative z-10 text-[10px] tracking-[0.6em] uppercase font-bold group-hover:tracking-[0.8em] transition-all duration-700">
            Demander l'accès
          </span>
          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
      </motion.div>

      {/* Atmospheric dust/particles effect */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full w-[1px] h-[1px]"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%", 
              opacity: Math.random() 
            }}
            animate={{ 
              y: ["0%", "-100%"],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 15 + Math.random() * 25, 
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Clubs;
