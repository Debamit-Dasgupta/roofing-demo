import React from 'react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: 'chat_bubble_outline',
      iconColor: 'text-[#1c1b1b]',
      title: 'Clear Communication',
      description:
        'Prompt updates, on-time arrivals, and clear explanations at every phase so you’re never left wondering about timing or materials.',
    },
    {
      icon: 'visibility',
      iconColor: 'text-[#1F4E79]',
      title: 'Straightforward Advice',
      description:
        'We show you real photos and only recommend work your roof actually needs—never inventing urgency or replacement scope.',
    },
    {
      icon: 'pin_drop',
      iconColor: 'text-[#1c1b1b]',
      title: 'Local Focus',
      description:
        'Native understanding of Austin neighborhood codes, strict HOA guidelines, Hill Country winds, and regional storm corridors.',
    },
    {
      icon: 'cleaning_services',
      iconColor: 'text-[#1c1b1b]',
      title: 'Professional Process',
      description:
        'Meticulous landscaping protection, multiple magnetic nail sweeps, and disciplined execution from arrival through inspection.',
    },
  ];

  return (
    <section id="why-us-section" className="w-full bg-[#fbf9f3] py-20 lg:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1F4E79]">
            HONEST ROOFING CRAFTSMANSHIP
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1b1c18] mt-2 mb-4 uppercase tracking-tight font-headline">
            A Better Roofing Experience Starts With Clarity.
          </h2>
          <p className="text-base text-[#5e5e5c] leading-relaxed">
            We believe in straightforward answers, clean job sites, and building
            roofs capable of weathering Texas seasons for decades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-[#efeee7] p-8 rounded border border-[#E2E0D8] shadow-sm flex flex-col justify-between hover:shadow-md hover:border-[#1F4E79]/40 transition-all"
            >
              <div>
                <div
                  className={`w-12 h-12 rounded bg-white border border-[#E2E0D8] flex items-center justify-center ${pillar.iconColor} mb-6 shadow-sm`}
                >
                  <span className="material-symbols-outlined text-[24px]">
                    {pillar.icon}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#1b1c18] mb-3 font-headline">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#444748] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
