import React from 'react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      quote:
        'The photo report they provided after the inspection was eye-opening. They pointed out two minor pipe boot cracks that were an easy fix instead of pushing for a full replacement. That honesty is rare.',
      author: 'Marcus T.',
      detail: 'Austin Homeowner · Roof Repair Demo',
    },
    {
      quote:
        'After spring storms hit Travis County, Lone Star was out within 48 hours. They walked me through the entire condition of our roof with photos. Professional, tidy, and zero pressure.',
      author: 'Elena R.',
      detail: 'North Austin · Storm Inspection Demo',
    },
    {
      quote:
        'Our new architectural shingle roof looks stunning against our limestone exterior. The crew showed up on time, protected our landscaping, and swept for nails thoroughly before leaving.',
      author: 'David & Sarah M.',
      detail: 'Round Rock · Replacement Demo',
    },
  ];

  return (
    <section className="w-full bg-[#f5f4ed] py-20 lg:py-28 border-y border-[#c4c7c7]/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1F4E79]">
            SAMPLE TESTIMONIALS · DEMO CONTENT
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1b1c18] mt-2 mb-4 uppercase tracking-tight font-headline">
            What Homeowners Look for in a Roofing Partner
          </h2>
          <p className="text-base text-[#5e5e5c] leading-relaxed">
            Real feedback principles centered on clarity, integrity, and
            disciplined job site care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded border border-[#E2E0D8] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center gap-1 text-[#1F4E79] mb-4">
                  {[...Array(5)].map((_, sIdx) => (
                    <span
                      key={sIdx}
                      className="material-symbols-outlined text-[18px] select-none"
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="text-sm sm:text-base text-[#1b1c18] italic leading-relaxed mb-6">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#c4c7c7]/20">
                <div className="text-base font-bold text-[#1b1c18] font-headline">
                  {rev.author}
                </div>
                <div className="text-xs text-[#5e5e5c] uppercase font-medium mt-0.5">
                  {rev.detail}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
