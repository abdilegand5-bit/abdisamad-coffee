
import React from 'react';
import { CoffeeItem, FeaturedItem } from './types';

export const FEATURED_ITEMS: FeaturedItem[] = [
  {
    id: 'f1',
    name: 'Honey Lavender Latte',
    price: '$7.50',
    notes: 'Floral, Wild Honey, Velvet',
    intensity: 85,
    quote: '"A delicate balance of aromatic lavender and ethically sourced local honey."',
    label: 'Seasonal',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5nu4DWb3Md2aOV9OuT_hJNRgNaR2W5erJHg3H7L8xOlkXqBkoFN5oCCYcsQwxNx6TkHiaLvx_yIGzGA_D3sJG3h_X1MYeo45v-PjD1l8nCcc8q8dFFn5_lM8Wy5iJcPe44XuUAQG2ocHygWG52H_EgTzcLBMAilE9_Kxn0Seeb6pYDuVFOCo0A9rMyOO98tYNekih-0h34eDaHUXmdwblMWDu7VZrIBCT2cZ79_DdLEok9b-f7LgFhx-4HIsc0d7kDjA4XNLvigrT'
  },
  {
    id: 'f2',
    name: 'Cardamom Cold Brew',
    price: '$6.75',
    notes: 'Spice, Cacao, Citrus Peel',
    intensity: 95,
    quote: '"Steeped for 18 hours with hand-crushed green cardamom pods."',
    label: 'Top Pick',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAooxtzLoXJYLfZgH_hsjtFgY7OU-6nJutOs-m3Lgh1a21AY-e2L2bDIjYsbA93K72Wv0bAfnHWKnbdX4WwPhW6vSr1lEbaKPD8AwsTVnqLQGy13_Qq-JZOXzVUg7jyUeuAlksigZLe_ji-K_xYt_SBp0o8bVAd6ijd6H1f0aeJrlByMXeDiOUN7YiGpDorDYitxvwZcE0-5EeuvXXPMwcIqHMxzz-9A0CcC7fAvH9Ej8ydwzCGOTiwpTJUjyvobxyNwWw0VJhMO13Z'
  },
  {
    id: 'f3',
    name: 'Ethiopian V60',
    price: '$8.25',
    notes: 'Jasmine, Peach, Tea-like',
    intensity: 60,
    quote: '"Single origin heirloom beans from the Yirgacheffe region."',
    label: 'Specialty',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8cE8EAe_jCTkalTsCfQky-ALNNkN2tZ8nNMwCxX1ipOuURnQeJ2GglrDKejn-hAm-XoVpPAaSI-bOTakGIEVmsxnm8zoaJoDtz7OcPP0cpYdYI-07HX7W8zpxVux7OitmWXRZUWt_xS2AS2etF1XpJW_l9EppLhmc_BZ4yy5BNFOG3cqUin673f82pH9Cyz9ys3U1v6fLz_CDOmC2x8E7Qpx5hw-vPRtev7mXmo4rrHYhVyWGDggzcG3X6N1YNrtKW585SyOHJTqe'
  }
];

export const MENU_ITEMS: CoffeeItem[] = [
  { id: '1', name: 'Double Espresso', price: '$4.00', description: 'Pure concentrate of our house blend', category: 'coffee' },
  { id: '2', name: 'Flat White', price: '$5.50', description: 'Micro-foam over double ristretto shot', category: 'coffee' },
  { id: '3', name: 'Macchiato', price: '$4.50', description: 'Espresso marked with cloud-like foam', category: 'coffee' },
  { id: '4', name: 'Cortado', price: '$5.00', description: 'Equal parts espresso and steamed milk', category: 'coffee' },
  { id: '5', name: 'Nitro Cold Brew', price: '$6.50', description: 'Creamy texture infused with nitrogen', category: 'coffee' },
  { id: '6', name: 'Aeropress', price: '$6.00', description: 'Full-bodied immersion brew', category: 'coffee' },
  { id: '7', name: 'Earl Grey Reserve', price: '$5.00', description: 'Bergamot infused black tea with blue cornflowers', category: 'tea' },
  { id: '8', name: 'Jasmine Pearls', price: '$6.50', description: 'Hand-rolled green tea scented with jasmine', category: 'tea' },
  { id: '9', name: 'Butter Croissant', price: '$4.50', description: 'Flaky, golden-brown French pastry', category: 'pastry' },
  { id: '10', name: 'Almond Twice-Baked', price: '$5.75', description: 'Filled with frangipane and topped with sliced almonds', category: 'pastry' }
];

export const Logo = () => (
  <div className="flex items-center gap-4 text-primary">
    <div className="size-6">
      <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"></path>
      </svg>
    </div>
    <h2 className="text-[#1b130e] dark:text-white text-xl font-black leading-tight tracking-tight uppercase">Abdisamad</h2>
  </div>
);
