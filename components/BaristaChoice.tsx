
import React from 'react';
import { FEATURED_ITEMS } from '../constants';
import { FeaturedItem } from '../types';

const FeaturedCard: React.FC<{ item: FeaturedItem }> = ({ item }) => {
  return (
    <div className="group flex flex-col gap-6 bg-white dark:bg-[#2d2118] p-4 rounded-xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-primary/20">
      <div 
        className="relative w-full aspect-[4/5] bg-center bg-cover rounded-lg overflow-hidden" 
        style={{ backgroundImage: `url("${item.imageUrl}")` }}
      >
        <div className="absolute top-4 right-4 bg-white/95 dark:bg-background-dark/95 backdrop-blur px-3 py-1 rounded text-[10px] font-bold uppercase tracking-[0.2em] text-primary shadow-sm">
          {item.label}
        </div>
      </div>
      <div className="px-2 pb-4">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{item.name}</h3>
          <span className="text-primary font-bold">{item.price}</span>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-coffee-tan">
            <span className="font-bold">Notes:</span>
            <span>{item.notes}</span>
          </div>
          <div className="w-full bg-[#f3ece8] dark:bg-[#3d2b1f] h-1.5 rounded-full overflow-hidden">
            <div className="bg-primary h-full transition-all duration-1000" style={{ width: `${item.intensity}%` }}></div>
          </div>
          <p className="text-sm text-coffee-tan dark:text-coffee-muted leading-relaxed italic mt-2">
            {item.quote}
          </p>
        </div>
      </div>
    </div>
  );
};

const BaristaChoice: React.FC = () => {
  return (
    <main className="flex flex-col items-center py-24 px-6 lg:px-40">
      <div className="text-center mb-16 max-w-2xl">
        <h2 className="text-3xl lg:text-4xl font-black mb-4 tracking-tight uppercase">Barista's Choice</h2>
        <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
        <p className="text-coffee-tan dark:text-coffee-muted text-lg font-light italic">
          Hand-selected seasonal brews with sophisticated flavor profiles.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-[1200px]">
        {FEATURED_ITEMS.map(item => (
          <FeaturedCard key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};

export default BaristaChoice;
