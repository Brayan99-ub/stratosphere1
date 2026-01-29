
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('definition');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover grayscale brightness-50 contrast-125"
        >
          <source src="https://cdn.pixabay.com/video/2024/02/09/199961-911676837_large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
      </div>

      {/* Centered Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-[10px] font-tech tracking-[0.8em] text-white/40 mb-8 block uppercase">
            Horizon Ultime
          </span>
          <h1 className="text-5xl md:text-8xl font-light tracking-tighter leading-[0.85] mb-12">
            LA <span className="font-serif italic text-white/80">STRATOSPHÈRE</span> <br />
            <span className="text-outline">HOLDING</span>
          </h1>
          
          <motion.button 
            onClick={scrollToNext}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-12 py-5 overflow-hidden rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-all"
          >
            <span className="relative z-10 text-[10px] font-bold uppercase tracking-[0.4em] group-hover:text-black transition-colors duration-500">
              Entrer dans l'univers
            </span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30"
      >
        <span className="text-[8px] uppercase tracking-[0.4em] vertical-text">Ascension</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
