import React from 'react';

interface ConversionBannerProps {
  onOpenInspection?: () => void;
}

export const ConversionBanner: React.FC<ConversionBannerProps> = ({
  onOpenInspection,
}) => {
  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onOpenInspection) {
      onOpenInspection();
      return;
    }
    const target = document.getElementById('inspection-form');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-[#1c1b1b] text-white py-14 sm:py-16 lg:py-20 relative overflow-hidden border-y border-[#30312d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-10">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[#B53A32]">
            TAKE THE FIRST STEP
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mt-2 mb-3 sm:mb-4 uppercase tracking-tight font-headline">
            Not Sure What Your Roof Needs?
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-[#c8c6c5] leading-relaxed font-body">
            Start with a professional roof inspection and get a clear, honest picture
            of your home’s condition—documented with high-resolution photos and zero
            pressure.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 shrink-0 w-full sm:w-auto max-w-full">
          <button
            onClick={scrollToForm}
            className="w-full sm:w-auto max-w-full inline-flex items-center justify-center px-5 sm:px-8 py-3.5 sm:py-4 rounded bg-[#B53A32] hover:bg-[#9B2E27] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg transition-all active:translate-y-0.5 cursor-pointer text-center leading-snug whitespace-normal break-words sm:whitespace-nowrap"
          >
            GET A FREE ROOF INSPECTION
          </button>
          <a
            href="tel:5125550147"
            className="w-full sm:w-auto max-w-full inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 rounded bg-[#eae8e2] text-[#1b1c18] hover:bg-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors text-center leading-snug whitespace-normal break-words sm:whitespace-nowrap"
          >
            <span className="material-symbols-outlined text-[18px]">phone</span>
            <span>OR CALL (512) 555-0147</span>
          </a>
        </div>
      </div>
    </section>
  );
};
