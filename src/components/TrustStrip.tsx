import React from 'react';

export const TrustStrip: React.FC = () => {
  const trustItems = [
    {
      icon: 'search_check',
      title: 'FREE ROOF INSPECTIONS',
      description:
        'Comprehensive attic, shingle, and flashing checks at no upfront cost or obligation.',
    },
    {
      icon: 'location_on',
      title: 'LOCAL AUSTIN SERVICE',
      description:
        'Dedicated solely to Travis, Williamson, and Hays county residential homeowners.',
    },
    {
      icon: 'thunderstorm',
      title: 'STORM DAMAGE SUPPORT',
      description:
        'Guidance navigating hail impact, severe winds, and Texas thunderstorm effects.',
    },
    {
      icon: 'construction',
      title: 'QUALITY WORKMANSHIP',
      description:
        'Architectural-grade materials installed rigorously to Texas manufacturer standards.',
    },
  ];

  return (
    <section className="w-full bg-[#f5f4ed] py-8 border-y border-[#c4c7c7]/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded border border-[#E2E0D8] shadow-sm flex flex-col justify-start hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <span className="material-symbols-outlined text-[#1F4E79] text-[22px] shrink-0">
                  {item.icon}
                </span>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#1b1c18] font-headline">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#444748] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
