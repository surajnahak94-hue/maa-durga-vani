/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header, Hero } from './components/Layout';
import { WhatYouWillGet, WhyChooseThisGuide, HowItWorks, AboutBrand } from './components/ContentSections';
import { FAQSection, FinalCTA, Footer } from './components/ExtraSections';
import { PaymentModal } from './components/PaymentModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ExploreProducts } from './components/ExploreProducts';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({ name: 'Navratri Puja Vidhi Kit', price: '₹149' });

  const openModal = (name = 'Navratri Puja Vidhi Kit', price = '₹149') => {
    setCurrentProduct({ name, price });
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      <Header onOpenPayment={openModal} />
      <Hero onOpenPayment={openModal} />
      <ExploreProducts onOpenPayment={openModal} />
      <WhatYouWillGet />
      <WhyChooseThisGuide />
      <HowItWorks />
      <AboutBrand />
      <FAQSection />
      <FinalCTA onOpenPayment={openModal} />
      <Footer />
      <PaymentModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        productName={currentProduct.name} 
        price={currentProduct.price}
        whatsappMessage={`Namaste! I have paid ${currentProduct.price} for the ${currentProduct.name}. I am sending my payment screenshot. Please verify my payment and send me the PDF. Thank you!`}
      />
      <FloatingWhatsApp />
    </div>
  );
}
