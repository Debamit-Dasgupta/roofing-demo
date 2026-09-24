import React, { useState } from 'react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

  const faqs = [
    {
      q: 'How often should I have my roof inspected in Austin?',
      a: 'In Central Texas, we recommend a roof inspection once every 12 to 18 months, as well as immediately following any severe hail storm or high-wind squall. Thermal expansion from Austin summer heat combined with sudden cold fronts can degrade sealants rapidly.',
    },
    {
      q: 'How do I know if my roof needs repair or a complete replacement?',
      a: "If damage is confined to a localized area—like a cracked pipe jack boot, displaced chimney flashing, or a few missing shingles—a targeted repair is typically all that's required. Complete replacement is only advised when shingle matting has lost adhesion across multiple slopes or when the roof has reached its physical lifespan (typically 18–25 years).",
    },
    {
      q: 'Can you inspect storm damage after hail or wind events?',
      a: 'Yes. Our storm evaluation includes checking metal soft metals (gutters, downspouts, roof vents), identifying bruised fiberglass mats beneath asphalt shingles, and documenting directional impact marks with date-stamped high-definition photos.',
    },
    {
      q: 'What happens during a free roof inspection?',
      a: 'Our technician arrives at your scheduled time, inspects all roof slopes, checks valley flashings, boots, and ridge caps, and (if accessible) examines the attic for moisture signals or decking sag. You receive an annotated photo report on the spot.',
    },
    {
      q: 'How long does a typical Austin roof replacement take?',
      a: 'Most residential architectural shingle replacements in Travis and Williamson counties are completed in 1 to 2 days, weather permitting. We perform thorough magnetic sweeps around the perimeter daily before packing up.',
    },
    {
      q: 'Do you work on residential roofs throughout the entire Austin metro?',
      a: 'Yes. We routinely serve Central Austin, South Congress, Zilker, Mueller, North Austin, Round Rock, Cedar Park, Pflugerville, Leander, Georgetown, Lakeway, and West Lake Hills.',
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq-section" className="w-full bg-[#f5f4ed] py-20 lg:py-28 border-y border-[#c4c7c7]/20 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1F4E79]">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1b1c18] mt-2 mb-4 uppercase tracking-tight font-headline">
            Got Questions About Your Roof?
          </h2>
          <p className="text-base text-[#5e5e5c] leading-relaxed">
            Direct, professional answers to help you make informed decisions about
            your Austin home.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded border border-[#E2E0D8] shadow-sm transition-all overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-base sm:text-lg text-[#1b1c18] font-headline hover:bg-[#faf8f5] transition-colors focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{faq.q}</span>
                  <span
                    className={`material-symbols-outlined text-[#1F4E79] transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  >
                    expand_more
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm sm:text-base text-[#5e5e5c] leading-relaxed border-t border-[#E2E0D8]/60 animate-in fade-in duration-150">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
