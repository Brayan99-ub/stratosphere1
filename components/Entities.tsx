
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Zap, Globe, Shield } from 'lucide-react';

const Entities: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  // Track scroll progress within this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax offsets for the cards - staggered for depth
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -80]);

  // Parallax for background decorative elements
  const bgY1 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const bgY2 = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const services = [
    {
      title: 'Reality Development',
      desc: 'Création d\'expériences immersives et d\'espaces virtuels de haute fidélité pour l\'élite.',
      icon: <Zap size={24} className="text-white/60" />,
      tag: 'VIRTUAL',
      parallaxY: y1
    },
    {
      title: 'Global Intelligence',
      desc: 'Analyse prédictive et architecture de marchés pour une expansion sans frontières.',
      icon: <Globe size={24} className="text-white/60" />,
      tag: 'AI-DRIVEN',
      parallaxY: y2
    },
    {
      title: 'Safe Infrastructure',
      desc: 'Protection des actifs critiques et réseaux de communication sécurisés par blockchain.',
      icon: <Shield size={24} className="text-white/60" />,
      tag: 'SECURITY',
      parallaxY: y3
    }
  ];

  return (
    <section ref={containerRef} className="py-48 px-8 max-w-7xl mx-auto relative overflow-visible">
      {/* Decorative Background Parallax Elements */}
      <motion.div 
        style={{ y: bgY1 }}
        className="absolute top-0 -left-20 w-64 h-64 bg-white/5 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div 
        style={{ y: bgY2 }}
        className="absolute bottom-0 -right-20 w-80 h-80 bg-white/[0.02] rounded-full blur-[120px] pointer-events-none"
      />

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="text-[10px] font-tech tracking-[0.5em] text-white/30 mb-6 block uppercase">Our Entities</span>
          <h2 className="text-5xl md:text-6xl font-light tracking-tighter uppercase leading-tight">
            Nos Services <br /> 
            <span className="font-serif italic lowercase tracking-normal font-normal text-white/80">d'Exception</span>
          </h2>
        </motion.div>
        
        <div className="flex gap-4 mt-8 md:mt-0">
          <button className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all group">
            <span className="sr-only">Prev</span>
            <div className="w-2.5 h-2.5 border-t border-l border-white/40 rotate-[-45deg] group-hover:border-white transition-colors" />
          </button>
          <button className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all group">
            <span className="sr-only">Next</span>
            <div className="w-2.5 h-2.5 border-t border-r border-white/40 rotate-[45deg] group-hover:border-white transition-colors" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {services.map((s, i) => (
          <motion.div 
            key={i} 
            style={{ y: s.parallaxY }}
            whileHover={{ 
              scale: 1.03,
              boxShadow: "0 0 50px rgba(255, 255, 255, 0.05)",
              zIndex: 20
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="neo-card p-12 rounded-[40px] group relative overflow-hidden flex flex-col min-h-[450px] cursor-pointer"
          >
            {/* Hover visual effect: Background gradient highlight */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <div className="absolute top-0 right-0 p-10 opacity-20 group-hover:opacity-100 transition-all duration-500 translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0">
              <ArrowUpRight size={24} />
            </div>

            <div className="w-16 h-16 bg-white/[0.03] border border-white/5 rounded-2xl flex items-center justify-center mb-12 group-hover:bg-white group-hover:text-black transition-all duration-700 ease-out">
              {s.icon}
            </div>

            <div className="mt-auto">
              <span className="text-[9px] font-tech tracking-[0.3em] text-white/20 mb-4 block group-hover:text-white/40 transition-colors">
                {s.tag}
              </span>
              <h3 className="text-2xl font-medium mb-6 tracking-tight">{s.title}</h3>
              <p className="text-gray-500 text-sm font-light leading-relaxed mb-12 max-w-[280px] group-hover:text-gray-400 transition-colors">
                {s.desc}
              </p>
              
              <a href="#" className="text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-3 group/link">
                <span className="group-hover:mr-2 transition-all duration-500">Learn More</span>
                <div className="w-6 h-[1px] bg-white/20 group-hover:w-12 group-hover:bg-white transition-all duration-500" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Entities;
