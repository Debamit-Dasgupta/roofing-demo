import React from 'react';

export const Process: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'REQUEST AN INSPECTION',
      stepLabel: 'STEP ONE',
      description:
        'Fill out our simple online form or call directly to pick a convenient, punctual inspection window.',
    },
    {
      num: '02',
      title: 'ASSESS THE ROOF',
      stepLabel: 'STEP TWO',
      description:
        'A roofing technician conducts a thorough attic-to-ridge check, documenting all findings with high-res photos.',
    },
    {
      num: '03',
      title: 'REVIEW YOUR OPTIONS',
      stepLabel: 'STEP THREE',
      description:
        'We sit down and review your detailed photo report together with plain-English recommendations and transparent pricing.',
    },
    {
      num: '04',
      title: 'MOVE FORWARD',
      stepLabel: 'COMPLETION',
      description:
        'Whether it’s minor repairs or a full roof replacement, work is scheduled efficiently with immaculate daily cleanup.',
    },
  ];

  return (
    <section className="w-full bg-[#f5f4ed] py-20 lg:py-28 border-y border-[#c4c7c7]/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1F4E79]">
            SIMPLE &amp; TRANSPARENT
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1b1c18] mt-2 mb-4 uppercase tracking-tight font-headline">
            Our Simple, Transparent Process
          </h2>
          <p className="text-base text-[#5e5e5c] leading-relaxed">
            No jargon, no pushy tactics—just straightforward evaluation, clear
            photographic documentation, and honest solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded border border-[#E2E0D8] shadow-sm flex flex-col justify-between relative hover:border-[#1F4E79]/40 transition-colors"
            >
              <div>
                <span className="text-4xl sm:text-5xl font-extrabold text-[#c4c7c7]/60 leading-none block font-headline">
                  {step.num}
                </span>
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#1b1c18] mt-4 mb-2 font-headline">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#444748] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-1.5 text-xs uppercase font-bold text-[#1F4E79]">
                <span>{step.stepLabel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
