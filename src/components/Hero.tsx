import React from 'react';

interface HeroProps {
  onOpenInspection?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInspection }) => {
  const heroImageUrl =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDhMzadCJjn-fB2sDTYAtb_AKvfG8C400Jq90nOvwo1Y_IYNN5UKx3v5qdH7T7Lz-PGrppCkwnmlEzZ6vZnf_KTAb3484wT7rgbV95AF7GJr_NtAdZgnJ6Djqd-dyDqhS576VSVGFfkFhAQY1YaMPvnlCs4TPggHfD6ORDZKlcBngJ0KI9Oj_0TwFyGSjefQbNtsXdygq4WOUxD4IT2IbntoRVbj3u3WFnP19XhIwX3u-el9NjssdYv';

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
    <section className="relative bg-[#fbf9f3] w-full overflow-hidden pt-4 sm:pt-6 lg:pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-8 items-center">
          {/* Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Top Regional Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#eae8e2] text-[#1b1c18] mb-4 sm:mb-6 max-w-full">
              <span className="w-2 h-2 rounded-full bg-[#1F4E79] shrink-0"></span>
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider truncate">
                AUSTIN &amp; CENTRAL TEXAS RESIDENTIAL ROOFING
              </span>
            </div>

            {/* H1 Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-[#1b1c18] tracking-tight uppercase max-w-2xl leading-[1.1] font-headline">
              BUILT FOR TEXAS.<br />
              <span className="text-[#1F4E79]">TRUSTED BY AUSTIN.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl lg:text-2xl text-[#444748] font-bold mt-3 sm:mt-4 mb-2 sm:mb-3 font-headline">
              Professional Roofing Services for Austin Homeowners
            </p>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg text-[#5e5e5c] max-w-xl leading-relaxed font-body">
              Roof repairs, replacements, inspections, and storm damage solutions
              designed to protect your home and give you peace of mind. Serving
              Austin homeowners and surrounding communities with upfront
              evaluations and enduring craftsmanship.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-6 sm:mt-8 w-full sm:w-auto">
              <button
                onClick={scrollToForm}
                className="w-full sm:w-auto inline-flex items-center justify-center px-5 sm:px-8 py-3.5 sm:py-4 rounded bg-[#1F4E79] hover:bg-[#183e61] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md transition-all active:translate-y-0.5 cursor-pointer text-center leading-snug whitespace-normal break-words sm:whitespace-nowrap"
              >
                GET A FREE ROOF INSPECTION
              </button>

              <a
                href="tel:5125550147"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 sm:gap-3 px-5 sm:px-7 py-3.5 sm:py-4 rounded bg-[#1c1b1b] hover:bg-black text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all whitespace-normal break-words sm:whitespace-nowrap text-center"
              >
                <span className="material-symbols-outlined text-[18px] sm:text-[20px] shrink-0">
                  phone_in_talk
                </span>
                <span>CALL NOW (512) 555-0147</span>
              </a>
            </div>

            {/* Value Trust Strip */}
            <div className="mt-6 sm:mt-8 flex items-center gap-2.5 py-2.5 px-3.5 sm:px-4 rounded bg-[#efeee7] text-[#444748] text-xs sm:text-sm font-medium max-w-full">
              <span className="material-symbols-outlined text-[#1F4E79] text-[18px] shrink-0">
                verified
              </span>
              <span className="leading-snug">
                Zero obligation &nbsp;·&nbsp; Clear photographic findings &nbsp;·&nbsp; Rapid Austin-area response
              </span>
            </div>
          </div>

          {/* Visual Hero Showcase Column */}
          <div className="lg:col-span-5 relative w-full">
            <div className="relative rounded-lg overflow-hidden shadow-2xl bg-[#eae8e2] border border-[#E2E0D8]">
              <img
                src={heroImageUrl}
                alt="High-end modern Austin home with architectural shingle roof and Texas limestone facade"
                className="w-full h-[280px] sm:h-[380px] md:h-[440px] lg:h-[560px] object-cover object-[center_30%] sm:object-[center_35%] lg:object-[center_38%]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent pointer-events-none"></div>

              {/* Floating Badge: Weather-Tough Protection */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 p-3 sm:p-4 rounded bg-white/95 backdrop-blur-md shadow-lg border border-[#E2E0D8] flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded bg-[#1F4E79] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <span className="material-symbols-outlined text-[22px] sm:text-[26px]">
                    shield_with_house
                  </span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#5e5e5c] truncate">
                    Texas Climate Engineering
                  </span>
                  <span className="text-sm sm:text-base lg:text-lg font-bold text-[#1b1c18] font-headline leading-tight truncate sm:whitespace-normal">
                    Austin Weather-Tough Protection
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
