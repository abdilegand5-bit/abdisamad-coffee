
import React from 'react';
import { Logo } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-background-dark border-t border-[#e6dad1] dark:border-[#3d2b1f] py-16 px-6 lg:px-40">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 max-w-[1200px] mx-auto">
        <div className="flex flex-col gap-6">
          <Logo />
          <p className="text-sm text-coffee-tan dark:text-coffee-muted font-light leading-relaxed">
            Redefining the coffee ritual through artisanal precision and sustainable sourcing.
          </p>
        </div>
        <div>
          <h4 className="font-bold uppercase text-[10px] tracking-[0.3em] mb-6 text-primary">Locations</h4>
          <ul className="flex flex-col gap-3 text-sm text-coffee-tan dark:text-coffee-muted">
            <li className="hover:text-primary cursor-pointer transition-colors">Downtown Arts District</li>
            <li className="hover:text-primary cursor-pointer transition-colors">Westside Heights</li>
            <li className="hover:text-primary cursor-pointer transition-colors">Harbor Terminal</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold uppercase text-[10px] tracking-[0.3em] mb-6 text-primary">Connect</h4>
          <ul className="flex flex-col gap-3 text-sm text-coffee-tan dark:text-coffee-muted">
            <li className="hover:text-primary cursor-pointer transition-colors">Instagram</li>
            <li className="hover:text-primary cursor-pointer transition-colors">Twitter</li>
            <li className="hover:text-primary cursor-pointer transition-colors">Brewing Guides</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold uppercase text-[10px] tracking-[0.3em] mb-6 text-primary">Hours</h4>
          <ul className="flex flex-col gap-2 text-sm text-coffee-tan dark:text-coffee-muted">
            <li>Mon - Fri: 7am - 8pm</li>
            <li>Sat - Sun: 8am - 9pm</li>
            <li className="mt-4">
              <div className="flex items-center gap-2 text-primary font-bold cursor-pointer group">
                <span className="material-symbols-outlined text-sm group-hover:animate-bounce">location_on</span>
                <span className="uppercase text-[10px] tracking-widest border-b border-primary">Map Views</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-[#f3ece8] dark:border-[#3d2b1f] text-center">
        <p className="text-[10px] text-coffee-tan dark:text-coffee-muted uppercase tracking-[0.4em] font-medium">
          © {new Date().getFullYear()} Abdisamad Coffee Roasters. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
