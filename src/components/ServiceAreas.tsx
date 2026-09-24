import React, { useState } from 'react';

export const ServiceAreas: React.FC = () => {
  const [zipInput, setZipInput] = useState('');
  const [zipResult, setZipResult] = useState<string | null>(null);

  const areas = [
    { city: 'Austin, TX', subtext: 'All Districts' },
    { city: 'Round Rock', subtext: 'Williamson Co.' },
    { city: 'Cedar Park', subtext: 'Active Crews' },
    { city: 'Pflugerville', subtext: 'North Corridor' },
    { city: 'Georgetown', subtext: 'North Metro' },
    { city: 'Leander', subtext: 'NW Corridor' },
    { city: 'Lakeway', subtext: 'West Travis Co.' },
    { city: 'West Lake Hills', subtext: 'Eanes Area' },
  ];

  const handleZipCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanZip = zipInput.trim();
    if (!cleanZip) return;

    if (
      cleanZip.startsWith('787') ||
      cleanZip.startsWith('786') ||
      ['78701', '78702', '78703', '78704', '78745', '78748', '78749', '78759', '78613', '78681', '78660', '78626'].includes(cleanZip)
    ) {
      setZipResult(
        `✓ ZIP Code ${cleanZip} is in our primary Central Texas dispatch zone. Same-day & 24–48 hr inspections available.`
      );
    } else {
      setZipResult(
        `📍 ZIP Code ${cleanZip} is evaluated on request. We often service neighboring counties—call us directly at (512) 555-0147.`
      );
    }
  };

  return (
    <section id="service-areas-section" className="w-full bg-[#fbf9f3] py-20 lg:py-28 scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-4 sm:gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1F4E79]">
              COVERING CENTRAL TEXAS
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#1b1c18] mt-2 uppercase tracking-tight font-headline">
              Serving Austin and Nearby Communities
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#5e5e5c]">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse shrink-0"></span>
            <span>Standard 24-48 hr inspection turnaround</span>
          </div>
        </div>

        {/* 8 Areas Grid - Responsive 1-col on mobile, 2-col on sm, 3-col on md, 4-col on lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {areas.map((area, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded bg-[#efeee7] border border-[#E2E0D8] flex items-center justify-between gap-3 hover:border-[#1F4E79]/40 hover:bg-[#eae8e2] transition-colors min-w-0"
            >
              <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                <span className="material-symbols-outlined text-[#1F4E79] text-[20px] shrink-0">
                  location_city
                </span>
                <span className="text-sm sm:text-base font-bold text-[#1b1c18] font-headline truncate">
                  {area.city}
                </span>
              </div>
              <span className="text-[11px] text-[#5e5e5c] uppercase font-semibold shrink-0 text-right whitespace-nowrap">
                {area.subtext}
              </span>
            </div>
          ))}
        </div>

        {/* Interactive ZIP Verification */}
        <div className="mb-6 p-4 rounded bg-[#f5f4ed] border border-[#E2E0D8] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#1b1c18]">
            <span className="material-symbols-outlined text-[#1F4E79] text-[20px] shrink-0">
              my_location
            </span>
            <span>Check your Austin metro ZIP code:</span>
          </div>
          <form onSubmit={handleZipCheck} className="flex items-center gap-2 w-full sm:w-auto">
            <input
              type="text"
              value={zipInput}
              onChange={(e) => setZipInput(e.target.value)}
              placeholder="e.g. 78704"
              maxLength={5}
              className="h-10 px-3 rounded bg-white border border-[#c4c7c7] text-sm text-[#1b1c18] w-full sm:w-28 focus:outline-none focus:border-[#1F4E79]"
            />
            <button
              type="submit"
              className="h-10 px-4 rounded bg-[#1F4E79] hover:bg-[#183e61] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shrink-0"
            >
              Check
            </button>
          </form>
        </div>

        {zipResult && (
          <div className="mb-6 p-3.5 rounded bg-[#eae8e2] text-xs sm:text-sm font-medium text-[#1b1c18] border border-[#c4c7c7]/40 animate-in fade-in duration-150">
            {zipResult}
          </div>
        )}

        <div className="p-4 rounded bg-[#eae8e2] border border-[#E2E0D8] text-xs sm:text-sm text-[#1b1c18] flex items-start sm:items-center gap-3">
          <span className="material-symbols-outlined text-[#1F4E79] text-[20px] shrink-0 mt-0.5 sm:mt-0">
            info
          </span>
          <span className="leading-relaxed">
            Outside these primary cities? We frequently service Buda, Kyle,
            Dripping Springs, and surrounding Hill Country communities. Call us
            directly to verify immediate dispatch.
          </span>
        </div>
      </div>
    </section>
  );
};
