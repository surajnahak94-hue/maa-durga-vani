import React from 'react';

export const BenefitsSection = () => (
  <section className="py-20 bg-[#FFF5E6]">
    <div className="max-w-6xl mx-auto px-4">
      <h3 className="text-3xl font-serif font-bold text-[#8B0000] text-center mb-12">Why This Guide?</h3>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { title: "Authentic", desc: "Based on ancient Vedic traditions." },
          { title: "Easy to Use", desc: "Structured for busy modern lifestyles." },
          { title: "Digital Access", desc: "Carry it with you anywhere on your phone." }
        ].map((item, i) => (
          <div key={i} className="bg-white p-8 rounded-lg shadow-sm border border-[#D4AF37]/20">
            <h4 className="text-xl font-bold text-[#8B0000] mb-2">{item.title}</h4>
            <p className="text-stone-700">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
