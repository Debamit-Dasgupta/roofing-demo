import React from 'react';

interface ProblemValueProps {
  onOpenInspection?: () => void;
}

export const ProblemValue: React.FC<ProblemValueProps> = ({ onOpenInspection }) => {
  const inspectorImageUrl =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDP4BDOwrk2jQCfPcqIpLzdJIKgodxjTbgfshFDdWyCdIrOGwvdtSElXeqaR4ZlElDXyWxFxVLMDXmhJ7CZFqeux_k46kJqsucTDrF2NFUm_o1Ko0xFFUPbb0QupLrEoh38-QH2zcyKcnuW6v03aFjKOJqlW1jI_gN6qGT9PM05MtQH-i9V3s2JMt-aX425-iYSWXYAdSSZZen3pOyzQVg43WTFrtI6YeuoUAV3BboE57rlaFcxWXIP';

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
    <section className="w-full bg-[#fbf9f3] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1F4E79]">
            PROTECT YOUR BIGGEST INVESTMENT
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1b1c18] mt-2 mb-4 uppercase tracking-tight font-headline">
            Your Roof Protects Everything Under It.
          </h2>
          <p className="text-base sm:text-lg text-[#5e5e5c] leading-relaxed">
            Texas weather cycles—from scorching summer heatwaves to sudden hail
            fronts—take a heavy toll on residential roofs. Small vulnerabilities
            quickly turn into costly interior damage if left unchecked.
          </p>
        </div>

        {/* 4 Risk Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Card 1 */}
          <div className="bg-[#efeee7] p-6 rounded border border-[#E2E0D8] shadow-sm flex flex-col justify-between hover:border-[#1F4E79]/50 transition-colors">
            <div>
              <div className="w-10 h-10 rounded bg-[#1c1b1b] text-white flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[22px]">
                  water_drop
                </span>
              </div>
              <h4 className="text-lg font-bold text-[#1b1c18] mb-2 font-headline">
                Hidden Roof Leaks
              </h4>
              <p className="text-sm text-[#444748] leading-relaxed">
                Moisture intrusion around pipe boots, valleys, and skylights
                deteriorating decking before water stains ever become visible on
                your ceiling drywall.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-[#c4c7c7]/30 text-xs font-bold text-[#1b1c18] uppercase tracking-wider">
              RISK: DECKING ROT
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#efeee7] p-6 rounded border border-[#E2E0D8] shadow-sm flex flex-col justify-between hover:border-[#1F4E79]/50 transition-colors">
            <div>
              <div className="w-10 h-10 rounded bg-[#1F4E79] text-white flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[22px]">
                  weather_hail
                </span>
              </div>
              <h4 className="text-lg font-bold text-[#1b1c18] mb-2 font-headline">
                Hail &amp; Wind Damage
              </h4>
              <p className="text-sm text-[#444748] leading-relaxed">
                Micro-fractured shingle mats and displaced granules that silently
                diminish roof longevity following Central Texas spring hail
                corridors.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-[#c4c7c7]/30 text-xs font-bold text-[#1F4E79] uppercase tracking-wider">
              RISK: ACCELERATED FAILURE
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#efeee7] p-6 rounded border border-[#E2E0D8] shadow-sm flex flex-col justify-between hover:border-[#1F4E79]/50 transition-colors">
            <div>
              <div className="w-10 h-10 rounded bg-[#1c1b1b] text-white flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[22px]">
                  wb_sunny
                </span>
              </div>
              <h4 className="text-lg font-bold text-[#1b1c18] mb-2 font-headline">
                Aging Shingles
              </h4>
              <p className="text-sm text-[#444748] leading-relaxed">
                Curling, granule shedding, brittleness, and thermal shock
                degradation common in 15+ year roofs under unrelenting 105°
                Texas sun cycles.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-[#c4c7c7]/30 text-xs font-bold text-[#1b1c18] uppercase tracking-wider">
              RISK: WIND BLOW-OFF
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-[#efeee7] p-6 rounded border border-[#E2E0D8] shadow-sm flex flex-col justify-between hover:border-[#1F4E79]/50 transition-colors">
            <div>
              <div className="w-10 h-10 rounded bg-[#1c1b1b] text-white flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[22px]">
                  home_repair_service
                </span>
              </div>
              <h4 className="text-lg font-bold text-[#1b1c18] mb-2 font-headline">
                Flashing &amp; Valley Failure
              </h4>
              <p className="text-sm text-[#444748] leading-relaxed">
                Compromised step flashing and chimney seals allowing slow water
                seeps straight into structural framing cavities and framing
                headers.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-[#c4c7c7]/30 text-xs font-bold text-[#1b1c18] uppercase tracking-wider">
              RISK: STRUCTURAL MOLD
            </div>
          </div>
        </div>

        {/* Feature Inspection Callout with Inspector Photo */}
        <div className="rounded-lg bg-[#eae8e2] border border-[#E2E0D8] overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5 h-72 lg:h-full relative overflow-hidden bg-neutral-800">
            <img
              src={inspectorImageUrl}
              alt="Lone Star roofing inspector carefully inspecting shingle flashing, chimney boots, and metal valley integrity"
              className="w-full h-full object-cover min-h-[300px] lg:min-h-[380px]"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="lg:col-span-7 p-8 lg:p-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1F4E79]">
              THE PREVENTATIVE DIFFERENCE
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1b1c18] mt-2 mb-4 font-headline">
              How Professional Inspections Prevent Costly Surprises
            </h3>
            <p className="text-base text-[#5e5e5c] mb-6 leading-relaxed">
              A 30-minute roof inspection gives you photographic evidence and
              straightforward repair options before leaks reach your ceilings.
              Our inspectors verify shingle adhesive lines, valley flashing,
              plumbing jacks, and attic ventilation under direct sunlight.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <button
                onClick={scrollToForm}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded bg-[#1c1b1b] text-white text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-[#1F4E79] transition-colors cursor-pointer"
              >
                <span>SCHEDULE AN INSPECTION</span>
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </button>
              <span className="text-xs uppercase tracking-wider text-[#444748] font-bold">
                100% Free · Travis &amp; Williamson Counties
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
