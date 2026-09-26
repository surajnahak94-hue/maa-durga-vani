import React from 'react';
import ebookCover from '../assets/navratri-ebook.png';


export const Header = ({ onOpenPayment }: { onOpenPayment: () => void }) => (
  <header className="sticky top-0 z-50 bg-[#FDFBF7] border-b border-[#D4AF37]/30">
    <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
      <h1 className="text-xl md:text-2xl font-serif font-bold text-[#8B0000] tracking-tight">Maa Durga Vani</h1>
      <nav className="hidden md:flex gap-6 font-medium text-stone-700">
        {['Home', 'Puja Guides', 'Vastu eBooks', 'All eBooks', 'Contact'].map(item => (
          <a key={item} href="#" className="hover:text-[#8B0000] transition">{item}</a>
        ))}
      </nav>
      <a href="#explore" className="bg-[#8B0000] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#A52A2A] transition shadow-md">
        Browse eBooks
      </a>
    </div>
  </header>
);

export const Hero = ({ onOpenPayment }: { onOpenPayment: () => void }) => (
  <section className="bg-[#FDFBF7] py-16 md:py-24 px-4 relative overflow-hidden">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div className="text-left">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#8B0000] mb-4 leading-tight">
          Experience the Divine Blessings of <span className="text-[#E34234]">Navratri</span>
        </h2>
        <div className="space-y-2 mb-6">
          <p className="text-2xl font-bold text-stone-800">Navratri Puja Vidhi Kit</p>
          <p className="text-xl text-stone-600 font-medium">Digital PDF eBook</p>
          <p className="text-2xl font-bold text-[#E34234]">Only ₹149</p>
        </div>
        <button onClick={onOpenPayment} className="inline-block bg-[#E34234] text-white text-xl font-bold px-10 py-4 rounded-full hover:bg-[#C2332A] transition shadow-lg mb-6">
          Get Instant Access ₹149
        </button>
        <div className="flex gap-4 text-sm text-stone-600 font-medium">
          <span className="flex items-center gap-1">✓ Digital PDF</span>
          <span className="flex items-center gap-1">✓ Mobile Friendly</span>
          <span className="flex items-center gap-1">✓ Easy to Read</span>
        </div>
      </div>
      <div className="relative flex justify-center md:justify-end">
        <img 
          src={ebookCover}
          alt="Navratri Puja Vidhi Kit eBook" 
          className="w-full max-w-sm rounded-lg shadow-2xl transition-transform hover:scale-105"
        />
      </div>
    </div>
  </section>
);

export const Footer = () => (
  <footer className="bg-[#4A0404] text-[#D4AF37] py-12 px-4 text-center border-t-4 border-[#D4AF37]">
    <p>&copy; {new Date().getFullYear()} Maa Durga Vani. All rights reserved.</p>
    <p className="mt-2 text-sm text-stone-400">Dedicated to spiritual simplicity and authentic traditions.</p>
  </footer>
);
