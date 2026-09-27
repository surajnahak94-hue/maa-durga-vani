import React from 'react';
import navratriEbookCover from '../assets/navratri-ebook.png';
import laxmiEbookCover from '../assets/lakshmi-yellow.png';
import kaliEbookCover from '../assets/kali-ebook.png';
import homePujaEbookCover from '../assets/home-puja-guide-149.png';

const SectionHeader = ({ title }: { title: string }) => (
  <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#8B0000] text-center mb-12">{title}</h2>
);

const ProductCard = ({ title, price, originalPrice, image, objectFit = 'object-cover', showBadge = false, onOpenPayment }: { title: string, price?: string, originalPrice?: string, image?: string, objectFit?: string, showBadge?: boolean, onOpenPayment?: (productName: string, price: string) => void }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all hover:shadow-lg flex flex-col">
    <div className="relative aspect-[3/4] bg-stone-100 rounded-lg mb-4 overflow-hidden flex items-center justify-center">
      {image ? (
        <img src={image} alt={title} className={`w-full h-full ${objectFit}`} />
      ) : (
        <span className="text-stone-400 font-serif italic">Guide Cover</span>
      )}
{showBadge && (
  <div
    style={{
      position: 'absolute',
      right: '12px',
      bottom: '12px',
      zIndex: 9999,
      background: '#FFF4D6',
      border: '3px solid #D4AF37',
      borderRadius: '50%',
      width: '90px',
      height: '90px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 12px rgba(0,0,0,0.25)'
    }}
  >
    <span style={{fontSize:'13px', textDecoration:'line-through', color:'#666'}}>
      ₹999
    </span>
    <span style={{fontSize:'27px', fontWeight:'bold', color:'#8B0000'}}>
      ₹149
    </span>
  </div>
)}
    </div>
    <h4 className="text-xl font-bold text-[#8B0000] mb-2">{title}</h4>
    <p className="text-stone-600 mb-4 flex-grow">Hindi Digital PDF eBook</p>
    {price && (
      <div className="flex items-center gap-2 mb-4">
        {originalPrice && <span className="text-lg text-stone-400 line-through">{originalPrice}</span>}
        <span className="text-2xl font-bold text-stone-800">{price}</span>
      </div>
    )}
    <button 
      onClick={price ? () => onOpenPayment!(title, price) : undefined}
      className={`w-full py-3 rounded-full font-bold transition ${price ? 'bg-[#E34234] text-white hover:bg-[#C2332A]' : 'bg-stone-200 text-stone-600 cursor-not-allowed'}`}
    >
      {price ? 'Get This eBook' : 'Coming Soon'}
    </button>
  </div>
);

export const ExploreProducts = ({ onOpenPayment }: { onOpenPayment: (productName: string, price: string) => void }) => (
  <section id="explore" className="py-20 bg-[#FDFBF7]">
    <div className="max-w-6xl mx-auto px-4">
      <SectionHeader title="Explore Our Devotional eBooks" />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <ProductCard title="Navratri Puja Vidhi Kit" price="₹149" image={navratriEbookCover} onOpenPayment={onOpenPayment} />
        <ProductCard title="Lakshmi Puja Guide" price="₹199" originalPrice="₹999" image={laxmiEbookCover} onOpenPayment={onOpenPayment} />
        <ProductCard title="Kali Puja Guide" price="₹199" originalPrice="₹999" image={kaliEbookCover} onOpenPayment={onOpenPayment} />
        <ProductCard title="Home Puja Guide" price="₹149" originalPrice="₹999" image={homePujaEbookCover} objectFit="object-contain" showBadge={true} onOpenPayment={onOpenPayment} />
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
