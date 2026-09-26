import React from 'react';

const SectionHeader = ({ title }: { title: string }) => (
  <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#8B0000] text-center mb-12">{title}</h2>
);

export const FAQSection = () => (
  <section className="py-20 bg-[#FDFBF7]">
    <div className="max-w-3xl mx-auto px-4">
      <SectionHeader title="Frequently Asked Questions" />
      <div className="space-y-8">
        {[
          { q: "Is this a physical book?", a: "No, this is a digital PDF eBook delivered instantly." },
          { q: "How will I receive the PDF?", a: "After payment, you will receive a download link via email." },
          { q: "Can I read it on mobile?", a: "Yes, it is designed for comfortable reading on phones and tablets." },
          { q: "What language is available?", a: "Currently, this guide is available in Hindi." },
          { q: "How can I contact support?", a: "You can email us at support@maadurgavani.com." }
        ].map((faq, i) => (
          <div key={i} className="border-b border-[#D4AF37]/30 pb-6">
            <h4 className="font-bold text-[#8B0000] mb-2">{faq.q}</h4>
            <p className="text-stone-700">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const FinalCTA = ({ onOpenPayment }: { onOpenPayment: () => void }) => (
  <section className="py-20 bg-[#8B0000] text-white text-center">
    <div className="max-w-3xl mx-auto px-4">
      <h3 className="text-3xl font-bold mb-4">Navratri Puja Vidhi Kit</h3>
      <p className="text-xl mb-8 opacity-90">Digital PDF eBook • Only ₹149</p>
      <button onClick={onOpenPayment} className="inline-block bg-[#E34234] text-white text-xl font-bold px-10 py-4 rounded-full hover:bg-[#C2332A] transition shadow-lg">
        Get Instant Access ₹149
      </button>
    </div>
  </section>
);

export const Footer = () => (
  <footer className="bg-[#4A0404] text-[#D4AF37] pt-16 pb-8 px-4 border-t-4 border-[#D4AF37]">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
      <div>
        <h5 className="font-serif font-bold text-xl mb-4">Maa Durga Vani</h5>
        <p className="text-stone-400 text-sm">Dedicated to spiritual simplicity and authentic traditions.</p>
      </div>
      <div className="grid grid-cols-2 gap-4 text-sm text-stone-400">
        <a href="#" className="hover:text-white">Contact Us</a>
        <a href="#" className="hover:text-white">Privacy Policy</a>
        <a href="#" className="hover:text-white">Terms & Conditions</a>
        <a href="#" className="hover:text-white">Refund Policy</a>
        <a href="#" className="hover:text-white">Digital Delivery Policy</a>
        <a href="#" className="hover:text-white">Disclaimer</a>
      </div>
    </div>
    <p className="text-center text-xs text-stone-600">&copy; {new Date().getFullYear()} Maa Durga Vani. All rights reserved.</p>
  </footer>
);
