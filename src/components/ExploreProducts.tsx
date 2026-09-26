import React from 'react';
import ebookCover from '../assets/navratri-ebook.png';

const SectionHeader = ({ title }: { title: string }) => (
  <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#8B0000] text-center mb-12">{title}</h2>
);

const ProductCard = ({ title, price, image, isNavratri, onOpenPayment }: { title: string, price?: string, image?: string, isNavratri?: boolean, onOpenPayment?: () => void }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all hover:shadow-lg flex flex-col">
    <div className="aspect-[3/4] bg-stone-100 rounded-lg mb-4 overflow-hidden flex items-center justify-center">
      {image ? (
        <img src={image} alt={title} className="w-full h-full object-cover" />
      ) : (
        <span className="text-stone-400 font-serif italic">Guide Cover</span>
      )}
    </div>
    <h4 className="text-xl font-bold text-[#8B0000] mb-2">{title}</h4>
    <p className="text-stone-600 mb-4 flex-grow">Digital PDF eBook</p>
    {price && <p className="text-2xl font-bold text-stone-800 mb-4">{price}</p>}
    <button 
      onClick={isNavratri ? onOpenPayment : undefined}
      className={`w-full py-3 rounded-full font-bold transition ${isNavratri ? 'bg-[#E34234] text-white hover:bg-[#C2332A]' : 'bg-stone-200 text-stone-600 cursor-not-allowed'}`}
    >
      {isNavratri ? 'Get This eBook' : 'Coming Soon'}
    </button>
  </div>
);

export const ExploreProducts = ({ onOpenPayment }: { onOpenPayment: () => void }) => (
  <section id="explore" className="py-20 bg-[#FDFBF7]">
    <div className="max-w-6xl mx-auto px-4">
      <SectionHeader title="Explore Our Devotional eBooks" />
      <div className="grid md:grid-cols-3 gap-8">
        <ProductCard title="Navratri Puja Vidhi Kit" price="₹149" image={ebookCover} isNavratri onOpenPayment={onOpenPayment} />
        <ProductCard title="Lakshmi Puja Guide" />
        <ProductCard title="Kali Puja Guide" />
        <ProductCard title="Home Puja Guide" />
        <ProductCard title="Vastu eBooks" />
        <ProductCard title="Other Devotional Guides" />
      </div>
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-serif font-bold text-[#8B0000] mb-4">More Sacred Guides Coming Soon</h3>
        <p className="text-stone-600 max-w-xl mx-auto">
          We are continuously adding simple and practical digital guides for Puja, festivals, Vastu and devotional living.
        </p>
      </div>
    </div>
  </section>
);
