
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BaristaChoice from './components/BaristaChoice';
import Offerings from './components/Offerings';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import AIConsultant from './components/AIConsultant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      
      <main className="flex-1">
        <Hero />
        
        <div className="bg-white/50 dark:bg-white/[0.02]">
           <BaristaChoice />
        </div>
        
        <Offerings />
        
        <Newsletter />
      </main>
      
      <Footer />

      {/* Interactive AI Sommelier Layer */}
      <AIConsultant />
      
      {/* Scroll to Top Hint (Optional) */}
      <div className="hidden lg:block fixed left-10 bottom-10 rotate-90 origin-left">
        <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] text-coffee-tan opacity-40">
           <div className="w-12 h-px bg-coffee-tan"></div>
           EST. 1998 — NY
        </div>
      </div>
    </div>
  );
};

export default App;
