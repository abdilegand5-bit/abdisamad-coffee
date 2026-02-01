
import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';
import { TabType } from '../types';

const Offerings: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>(TabType.COFFEE);

  const filteredItems = MENU_ITEMS.filter(item => item.category === activeTab);

  const tabs = [
    { id: TabType.COFFEE, label: 'Specialty Coffee', icon: 'coffee' },
    { id: TabType.TEA, label: 'Artisanal Tea', icon: 'local_drink' },
    { id: TabType.PASTRIES, label: 'Pastries', icon: 'bakery_dining' },
  ];

  return (
    <section id="menu" className="bg-[#f3ece8] dark:bg-[#1a130e] py-24 px-6 lg:px-40">
      <div className="max-w-[1000px] mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-black mb-10 uppercase tracking-widest text-center">Our Offerings</h2>
          <div className="flex border-b border-[#e6dad1] dark:border-[#3d2b1f] w-full max-w-xl">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center justify-center gap-2 pb-4 flex-1 transition-all border-b-2 ${
                  activeTab === tab.id 
                    ? 'border-primary text-primary opacity-100' 
                    : 'border-transparent text-coffee-tan dark:text-coffee-muted opacity-60 hover:opacity-100'
                }`}
              >
                <span className="material-symbols-outlined text-2xl">{tab.icon}</span>
                <p className="text-[10px] font-bold uppercase tracking-widest">{tab.label}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 min-h-[300px]">
          {filteredItems.map(item => (
            <div key={item.id} className="flex justify-between items-end border-b border-[#e6dad1] dark:border-[#3d2b1f] pb-3 group cursor-pointer">
              <div className="flex flex-col gap-1">
                <span className="text-lg font-bold group-hover:text-primary transition-colors">{item.name}</span>
                <span className="text-sm text-coffee-tan dark:text-coffee-muted font-light italic">{item.description}</span>
              </div>
              <span className="text-primary font-bold text-lg">{item.price}</span>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="text-sm font-bold uppercase tracking-[0.2em] text-primary border-b-2 border-primary pb-1 hover:text-opacity-70 transition-all hover:border-transparent">
            View Full Digital Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default Offerings;
