
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { VALUES } from '../constants';

const MissionValues: React.FC = () => {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const altitudeText = useTransform(scrollYProgress, [0, 1], ["12,000 m", "35,000 m"]);

  return (
    <section id="mission" ref={containerRef} className="relative h-[500vh] w-full bg-black">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Depth */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div 
            style={{ 
              opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.2, 0.1]),
              scale: useTransform(scrollYProgress, [0, 1], [1, 1.2])
            }}
            className="w-full h-full bg-[url('https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center grayscale"
          />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-24">
            <div className="w-full md:w-5/12">
              <span className="text-white/20 uppercase tracking-[0.5em] text-[10px] mb-6 block font-tech">Notre Ascension</span>
              <h2 className="text-5xl md:text-8xl font-serif uppercase tracking-tighter mb-12 leading-none font-light">
                PILIERS <br /><span className="text-outline">D'ELITE</span>
              </h2>
              <div className="flex items-baseline gap-4">
                <motion.span className="text-5xl font-tech text-white/80 tabular-nums">
                  {altitudeText}
                </motion.span>
                <span className="text-[10px] text-white/30 uppercase tracking-widest">Altitude Actuelle</span>
              </div>
            </div>
            
            <div className="w-full md:w-6/12 relative h-[400px]">
              {VALUES.map((value, index) => {
                const rangeStart = index / VALUES.length;
                const rangeEnd = (index + 1) / VALUES.length;
                
                const opacity = useTransform(
                  scrollYProgress,
                  [rangeStart, rangeStart + 0.1, rangeEnd - 0.1, rangeEnd],
                  [0, 1, 1, 0]
                );
                
                const x = useTransform(
                  scrollYProgress,
                  [rangeStart, rangeEnd],
                  [50, -50]
                );

                return (
                  <motion.div
                    key={index}
                    style={{ opacity, x }}
                    className="absolute inset-0 flex flex-col justify-center"
                  >
                    <span className="text-white/10 text-9xl font-serif italic mb-2 absolute -left-12 top-0 pointer-events-none">
                      0{index + 1}
                    </span>
                    <div className="relative z-10">
                      <h3 className="text-3xl font-serif uppercase tracking-[0.3em] mb-6 text-white">{value.title}</h3>
                      <p className="text-gray-400 font-light text-lg leading-relaxed max-w-md">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Vertical Altitude HUD */}
        <div className="absolute right-16 top-1/2 -translate-y-1/2 flex flex-col items-center gap-12 hidden lg:flex">
          <div className="flex flex-col items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_white]" />
            <div className="w-[1px] h-80 bg-gradient-to-b from-white/40 via-white/10 to-transparent relative">
              <motion.div 
                className="absolute top-0 left-0 w-full bg-white shadow-[0_0_15px_white]"
                style={{ 
                  height: '40px',
                  top: useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
                }}
              />
            </div>
          </div>
          <span className="text-[9px] tracking-[0.6em] vertical-text rotate-180 opacity-40 uppercase font-tech">Vertical Ascent Control</span>
        </div>
      </div>
    </section>
  );
};

export default MissionValues;
