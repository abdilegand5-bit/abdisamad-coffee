
export interface CoffeeItem {
  id: string;
  name: string;
  price: string;
  description: string;
  category: 'coffee' | 'tea' | 'pastry';
}

export interface FeaturedItem {
  id: string;
  name: string;
  price: string;
  notes: string;
  intensity: number;
  quote: string;
  imageUrl: string;
  label: 'Seasonal' | 'Top Pick' | 'Specialty';
}

export enum TabType {
  COFFEE = 'coffee',
  TEA = 'tea',
  PASTRIES = 'pastry'
}
