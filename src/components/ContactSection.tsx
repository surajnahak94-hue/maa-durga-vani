import React from 'react';

export const AboutContactSection = () => (
  <section className="py-20 bg-red-950 text-stone-100">
    <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-12">
      <div>
        <h3 className="text-2xl font-bold mb-4">About Maa Durga Vani</h3>
        <p className="text-stone-300">
          We bring authentic spiritual guidance to your fingertips, helping you connect with the divine in the comfort of your home.
        </p>
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-4">Need Help?</h3>
        <p className="text-stone-300 mb-6">Have questions about your order or the guide? Contact us on WhatsApp.</p>
        <a href="#" className="inline-block bg-green-600 text-white px-6 py-3 rounded-full font-bold hover:bg-green-700 transition">
          WhatsApp Us
        </a>
      </div>
    </div>
  </section>
);
