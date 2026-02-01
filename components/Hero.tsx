
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col lg:flex-row min-h-[85vh] w-full items-stretch overflow-hidden">
      <div 
        className="w-full lg:w-1/2 bg-center bg-no-repeat bg-cover min-h-[400px] transition-transform duration-700 hover:scale-105" 
        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAEio5Zuk357Fah6iivE6_1fM77wWChVIXD85sI1t4P1kNjIHiA_x_Ygp_6Jp2Ame1Z7P4SRCP7H1shJBR-PXpPgaWzT1wk4jIz4bfunb1kvN4ir9RoQwFCE65Go7OVjtw1CFG-nZ4i3cTqO4W_otLI2_TV6Wkgje-FfK8gA2QULBHitONX3A8c7KamtqJrGNAKsXRVz2PGF8UtKtNf6ljACjwfmP8bglz607npqH23NVWrOv2w77GQhc5_B_DS6G_baziBf4Wa5B4i")' }}
      >
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-start px-8 lg:px-20 py-20 bg-background-light dark:bg-background-dark">
        <div className="max-w-md">
          <h4 className="text-primary font-bold tracking-[0.3em] uppercase mb-4 text-sm">Since 1998</h4>
          <h1 className="text-coffee-dark dark:text-white text-5xl lg:text-7xl font-black leading-[1.1] tracking-[-0.04em] mb-6 animate-fade-in">
            THE ART OF THE PERFECT POUR
          </h1>
          <p className="text-coffee-tan dark:text-coffee-muted text-lg lg:text-xl font-light leading-relaxed mb-10">
            Experience the fusion of tradition and contemporary brewing at Abdisamad Coffee House. Every bean is a story.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-14 px-8 bg-primary text-white text-base font-bold uppercase tracking-widest hover:shadow-xl hover:-translate-y-1 transition-all">
              Order Online
            </button>
            <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-14 px-8 border-2 border-primary text-primary text-base font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
              View Menu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
