import React from 'react';

interface StormProtocolProps {
  onOpenInspection?: () => void;
}

export const StormProtocol: React.FC<StormProtocolProps> = ({
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
      // pre-select storm
      const select = document.getElementById('service-select') as HTMLSelectElement;
      if (select) {
        select.value = 'storm';
      }
    }
  };

  return (
    <section id="storm-section" className="w-full bg-[#efeee7] py-16 lg:py-24 scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="rounded-lg bg-[#1c1b1b] text-white p-5 sm:p-8 lg:p-14 shadow-xl border border-[#30312d] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#B53A32] text-white text-[11px] font-bold uppercase tracking-wider mb-4">
              <span className="material-symbols-outlined text-[16px]">warning</span>
              <span>TEXAS HAIL &amp; WIND RAPID PROTOCOL</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 uppercase tracking-tight font-headline">
              After the Storm, Start With the Roof.
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-[#c8c6c5] leading-relaxed font-body">
              Texas thunderstorms and hail can cause granule loss, mat bruising, and
              hidden leaks that are invisible from the ground. Left untreated, water
              penetrates the roof deck over months. Our inspection provides clear
              photographic documentation of your roof condition.
            </p>
          </div>

          <div className="w-full lg:w-auto shrink-0 max-w-full">
            <button
              onClick={scrollToForm}
              className="w-full sm:w-auto max-w-full inline-flex items-center justify-center px-4 py-3.5 sm:px-8 sm:py-4 rounded bg-[#B53A32] hover:bg-[#9B2E27] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg transition-all active:translate-y-0.5 cursor-pointer text-center leading-snug whitespace-normal break-words sm:whitespace-nowrap"
            >
              REQUEST A STORM DAMAGE INSPECTION
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
