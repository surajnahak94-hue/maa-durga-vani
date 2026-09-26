import React from 'react';
import qrCode from '../assets/payment-qr.jpg';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-[#FDFBF7] p-8 rounded-2xl max-w-md w-full shadow-2xl border-2 border-[#D4AF37]">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-serif font-bold text-[#8B0000]">Complete Your Purchase</h3>
          <button onClick={onClose} className="text-stone-500 hover:text-stone-800 text-2xl">&times;</button>
        </div>
        
        <div className="space-y-4 mb-6">
          <p className="font-bold text-lg">Navratri Puja Vidhi Kit – Digital PDF eBook</p>
          <p className="text-xl font-bold text-[#E34234]">Amount to Pay: ₹149</p>
          
          <img src={qrCode} alt="PhonePe QR Code" className="w-full max-w-[250px] mx-auto rounded-lg border-2 border-[#D4AF37]" />
        </div>

        <div className="text-sm text-stone-700 space-y-2 mb-6 text-left bg-white p-4 rounded-lg border border-[#D4AF37]/20">
          <p>1. Scan the QR using any UPI app.</p>
          <p>2. Pay exactly ₹149.</p>
          <p>3. Save the successful payment screenshot.</p>
          <p>4. Contact us with the payment screenshot to receive the PDF.</p>
        </div>

        <a 
          href="https://wa.me/918117860911?text=Namaste! I have paid ₹149 for the Navratri Puja Vidhi Kit. I am sending my payment screenshot. Please verify my payment and send me the PDF. Thank you!"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-3 px-4 rounded-lg hover:bg-[#128C7E] transition mb-6"
        >
          Send Payment Screenshot on WhatsApp
        </a>

        <p className="text-center font-bold text-[#8B0000] text-sm italic">
          Payment is manually verified. PDF delivery is not automatic.
        </p>
      </div>
    </div>
  );
};
