
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Definition from './components/Definition';
import MissionValues from './components/MissionValues';
import Entities from './components/Entities';
import Clubs from './components/Clubs';
import Vision from './components/Vision';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Definition />
        <MissionValues />
        <Entities />
        <Clubs />
        <Vision />
      </main>
      <Footer />
    </div>
  );
};

export default App;
