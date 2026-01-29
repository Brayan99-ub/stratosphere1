
import React from 'react';
import { Search } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/5 px-8 py-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <div className="w-4 h-4 bg-black rotate-45" />
        </div>
        <span className="font-tech text-sm tracking-tighter uppercase font-bold">StratoVision</span>
      </div>
      
      <div className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.2em] font-medium text-gray-400">
        <a href="#" className="hover:text-white transition-colors">Home</a>
        <a href="#" className="hover:text-white transition-colors">About</a>
        <a href="#" className="hover:text-white transition-colors">Entities</a>
        <a href="#" className="hover:text-white transition-colors">Contact</a>
      </div>
      
      <div className="relative hidden md:block w-64">
        <input 
          type="text" 
          placeholder="I am looking for..."
          className="w-full bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-[10px] focus:outline-none focus:border-white/30 transition-all"
        />
        <Search size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
      </div>
    </nav>
  );
};

export default Navbar;
