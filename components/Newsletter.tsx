
import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <section className="py-24 px-6 lg:px-40 flex flex-col items-center bg-background-light dark:bg-background-dark">
      <div className="max-w-xl w-full text-center">
        <h3 className="text-2xl lg:text-3xl font-black mb-6 uppercase tracking-widest">Stay Brewed</h3>
        <p className="text-coffee-tan dark:text-coffee-muted mb-10 font-light">
          Subscribe for exclusive early access to new seasonal blends, community cuppings, and brewing workshops.
        </p>
        
        {subscribed ? (
          <div className="bg-green-50 dark:bg-green-900/10 text-green-700 dark:text-green-400 p-6 rounded-xl animate-bounce-short">
            <span className="material-symbols-outlined text-3xl mb-2">check_circle</span>
            <p className="font-bold uppercase text-xs tracking-widest">Welcome to the inner circle!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row w-full gap-3 group">
            <input 
              required
              className="flex-1 bg-white dark:bg-[#2d2118] border border-[#e6dad1] dark:border-[#3d2b1f] rounded-lg px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm" 
              placeholder="Email Address" 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="bg-primary text-white px-10 py-4 rounded-lg font-bold uppercase text-xs tracking-[0.2em] hover:bg-primary/90 hover:shadow-lg transition-all active:scale-95 whitespace-nowrap">
              Join Us
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
