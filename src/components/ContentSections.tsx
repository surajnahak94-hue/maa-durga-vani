import React from 'react';

const SectionHeader = ({ title }: { title: string }) => (
  <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#8B0000] text-center mb-12">{title}</h2>
);

export const WhatYouWillGet = () => (
  <section className="py-20 bg-[#FDFBF7]">
    <div className="max-w-6xl mx-auto px-4">
      <SectionHeader title="What You Will Get" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: "Day-by-Day Puja Vidhi", desc: "Complete rituals for all 9 days, simplified." },
          { title: "Essential Mantras", desc: "Authentic mantras with clear pronunciation guides." },
          { title: "Puja Samagri List", desc: "A checklist of all required items for convenience." },
          { title: "Meaning & Significance", desc: "Understand the deep spiritual meaning of each ritual." },
          { title: "Aarti Collection", desc: "Lyrics for all important Aartis to perform daily." },
          { title: "Digital Convenience", desc: "Access anywhere from your phone or tablet." }
        ].map((item, i) => (
          <div key={i} className="bg-white p-8 rounded-lg shadow-sm border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition">
            <h4 className="text-xl font-bold text-[#8B0000] mb-3">{item.title}</h4>
            <p className="text-stone-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const WhyChooseThisGuide = () => (
  <section className="py-20 bg-[#FDFBF7]">
    <div className="max-w-6xl mx-auto px-4">
      <SectionHeader title="Why Choose This Guide?" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {["Digital PDF", "Mobile Friendly", "Easy to Follow", "Instant Access"].map((item, i) => (
          <div key={i} className="p-6">
            <div className="w-16 h-16 bg-[#8B0000] text-[#D4AF37] rounded-full flex items-center justify-center text-2xl mx-auto mb-4 font-serif">✓</div>
            <p className="font-bold text-[#8B0000]">{item}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const HowItWorks = () => (
  <section className="py-20 bg-[#FFF5E6]">
    <div className="max-w-4xl mx-auto px-4">
      <SectionHeader title="How It Works" />
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { step: "1", title: "Buy the eBook", desc: "Select and click the Buy Now button." },
          { step: "2", title: "Complete Payment", desc: "Securely pay the amount." },
          { step: "3", title: "Get Instant Access", desc: "Receive the PDF file directly." }
        ].map((item, i) => (
          <div key={i} className="text-center">
            <div className="w-12 h-12 bg-[#8B0000] text-white rounded-full flex items-center justify-center font-bold mx-auto mb-4">{item.step}</div>
            <h4 className="font-bold text-[#8B0000] mb-2">{item.title}</h4>
            <p className="text-stone-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const AboutBrand = () => (
  <section className="py-20 bg-[#FDFBF7]">
    <div className="max-w-3xl mx-auto px-4 text-center">
      <SectionHeader title="About Maa Durga Vani" />
      <p className="text-lg text-stone-700 leading-relaxed">
        Maa Durga Vani is dedicated to preserving and simplifying ancient Vedic traditions for the modern world. 
        We create authentic, accessible digital content to help families connect with their roots and perform sacred 
        rituals with devotion and ease, even in their busy lives.
      </p>
    </div>
  </section>
);
