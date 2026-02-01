
import React from 'react';
import { Logo } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-[#e6dad1] dark:border-[#3d2b1f] bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md px-6 py-4 lg:px-40">
      <Logo />
      <div className="flex flex-1 justify-end gap-6 lg:gap-10">
        <nav className="hidden md:flex items-center gap-10">
          <a className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest" href="#menu">Menu</a>
          <a className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest" href="#about">About</a>
          <a className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest" href="#locations">Locations</a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="flex min-w-[120px] cursor-pointer items-center justify-center rounded-lg h-10 px-6 bg-primary text-white text-sm font-bold uppercase tracking-wider hover:bg-primary/90 transition-all shadow-sm">
            <span>Order Online</span>
          </button>
          <div className="size-10 rounded-full border border-[#e6dad1] dark:border-[#3d2b1f] flex items-center justify-center cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 transition-all">
            <span className="material-symbols-outlined text-xl">shopping_bag</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
