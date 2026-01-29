
import React from 'react';
import { Hexagon, Zap, Shield, Globe, Circle } from 'lucide-react';

const Partners: React.FC = () => {
  const logos = [
    { name: 'StratoFX', icon: <Zap size={20} /> },
    { name: 'GlobalSafe', icon: <Shield size={20} /> },
    { name: 'AeroLink', icon: <Globe size={20} /> },
    { name: 'EliteClub', icon: <Hexagon size={20} /> },
    { name: 'OmniVision', icon: <Circle size={20} /> },
  ];

  return (
    <section className="py-12 px-8 flex justify-center flex-wrap gap-12 md:gap-24 opacity-40 hover:opacity-100 transition-opacity">
      {logos.map(logo => (
        <div key={logo.name} className="flex items-center gap-3 grayscale">
          {logo.icon}
          <span className="font-tech text-xs tracking-widest uppercase">{logo.name}</span>
        </div>
      ))}
    </section>
  );
};

export default Partners;
