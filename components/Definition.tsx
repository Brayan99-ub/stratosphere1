
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Definition: React.FC = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <section id="definition" ref={ref} className="min-h-screen w-full flex items-center justify-center py-40 px-6 bg-black relative">
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />
      </div>

      <motion.div 
        style={{ y, opacity, scale }}
        className="max-w-5xl text-center relative z-10"
      >
        <span className="text-white/20 uppercase tracking-[0.6em] text-[9px] mb-12 block font-tech">Manifeste Institutionnel</span>
        <h2 className="text-3xl md:text-6xl font-serif leading-[1.4] italic text-gray-200 font-light">
          "La Stratosphère n'est pas un simple lieu de convergence, c'est l'horizon ultime où la vision se transforme en autorité, et où la discipline devient grandeur."
        </h2>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          className="mt-16 h-[1px] bg-white/30 mx-auto" 
        />
      </motion.div>
    </section>
  );
};

export default Definition;
