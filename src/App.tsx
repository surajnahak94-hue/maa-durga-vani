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
  const openModal = () => setIsModalOpen(true);
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
      <PaymentModal isOpen={isModalOpen} onClose={closeModal} />
      <FloatingWhatsApp />
    </div>
  );
}
