import React from 'react';

export const EBookSection = () => (
  <section className="py-20 bg-[#FDFBF7]">
    <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
      <img src="https://placehold.co/400x600/b91c1c/f5f5f4?text=Navratri+Puja+Guide+Cover" alt="Navratri Puja Guide eBook" className="rounded-lg shadow-2xl mx-auto border-4 border-[#D4AF37]" />
      <div>
        <h3 className="text-4xl font-serif font-bold text-[#8B0000] mb-6">Navratri Puja Guide</h3>
        <p className="text-lg text-stone-700 mb-6">
          A comprehensive 50-page digital guide covering all 9 days of Navratri. Rituals, mantras, and easy-to-follow steps.
        </p>
        <ul className="space-y-3 text-stone-700 mb-8">
          <li>✨ Step-by-step Puja Vidhi for each day</li>
          <li>✨ Essential Mantras with pronunciation guide</li>
          <li>✨ Meaning of rituals</li>
          <li>✨ <span className="font-semibold italic text-[#8B0000]">Digital PDF - Instant Access</span></li>
        </ul>
        <a href="#buy" className="bg-[#8B0000] text-white px-8 py-3 rounded-full font-bold hover:bg-[#A52A2A] transition shadow-md">
          Buy Now for ₹149
        </a>
      </div>
    </div>
  </section>
);
