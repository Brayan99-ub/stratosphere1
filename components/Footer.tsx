
import React from 'react';
import { Twitter, Linkedin, Github, Disc as Discord } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="pt-32 pb-12 px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20 mb-32">
        <div className="col-span-1">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-black rotate-45" />
            </div>
            <span className="font-tech text-xs tracking-tighter uppercase font-bold">StratoVision</span>
          </div>
          <div className="space-y-4 text-xs font-light text-gray-500">
            <p>Email: <span className="text-white">contact@stratovision.com</span></p>
            <p>Phone: <span className="text-white">+33 (0)1 45 67 89 00</span></p>
            <p className="mt-8">123 Champs-Élysées, <br /> 75008 Paris, France</p>
          </div>
        </div>
        
        <div>
          <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-8 text-white/40">Quick Links</h4>
          <ul className="space-y-4 text-xs font-light text-gray-500">
            <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-8 text-white/40">Explore</h4>
          <ul className="space-y-4 text-xs font-light text-gray-500">
            <li><a href="#" className="hover:text-white transition-colors">Product Demos</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Testimonials</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Media & Press</a></li>
          </ul>
        </div>
        
        <div className="col-span-1">
          <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-8 text-white/40">FUTURISTIC TECH & HOLDING</h4>
          <p className="text-xs font-light text-gray-500 leading-relaxed mb-8">
            Entrez dans un monde où technologie et réalité convergent pour créer des expériences à couper le souffle.
          </p>
          <div className="flex gap-6">
            <Twitter size={16} className="text-gray-500 hover:text-white cursor-pointer transition-colors" />
            <Linkedin size={16} className="text-gray-500 hover:text-white cursor-pointer transition-colors" />
            <Discord size={16} className="text-gray-500 hover:text-white cursor-pointer transition-colors" />
            <Github size={16} className="text-gray-500 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-12 border-t border-white/5 flex flex-wrap justify-between items-center gap-8 opacity-40">
        {[1,2,3,4,5].map(i => (
          <div key={i} className="flex items-center gap-2 grayscale">
            <div className="w-4 h-4 rounded-full border border-white" />
            <span className="text-[9px] font-tech uppercase tracking-widest">Logoipsum</span>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
