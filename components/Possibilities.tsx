
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Possibilities: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Innovation');
  const tabs = ['Innovation', 'Technology', 'Experience'];

  return (
    <section className="py-32 px-8 max-w-7xl mx-auto">
      <h2 className="text-5xl md:text-6xl font-light tracking-tighter uppercase mb-24 max-w-3xl">
        POSSIBILITÉS ILLIMITÉES <br /> AVEC STRATOVISION
      </h2>
      
      <div className="flex flex-col md:flex-row gap-20 items-center">
        <div className="w-48 flex flex-col gap-8 text-[10px] font-tech uppercase tracking-[0.4em]">
          {tabs.map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-left transition-all ${activeTab === tab ? 'text-white' : 'text-gray-600'}`}
            >
              {tab}
            </button>
          ))}
        </div>
        
        <div className="flex-1 relative aspect-video rounded-[40px] overflow-hidden bg-white/5 border border-white/10 group">
          <img 
            src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80&w=1200" 
            className="w-full h-full object-cover grayscale brightness-50 group-hover:scale-105 transition-transform duration-1000"
            alt="Possibilities"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
        </div>
        
        <div className="w-full md:w-80">
          <h3 className="text-2xl font-medium mb-6">Comment la Strato transforme le monde</h3>
          <p className="text-gray-500 text-sm font-light leading-relaxed mb-8">
            Nous intégrons l'intelligence artificielle au cœur de nos processus décisionnels pour garantir une croissance durable et une vision sans failles.
          </p>
          <button className="text-[10px] font-bold uppercase tracking-widest border-b border-white/20 pb-2 hover:border-white transition-all">
            Learn More
          </button>
          
          <div className="mt-20 flex justify-between items-center text-[9px] text-gray-600 uppercase tracking-widest">
            <span>08 February 2025</span>
            <span>Henry Leonardo</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Possibilities;
