import React from 'react';

interface ServicesProps {
  onSelectService?: (serviceKey: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const servicesList = [
    {
      id: 'replacement',
      icon: 'roofing',
      title: 'Roof Replacement',
      description:
        'Complete architectural shingle and standing seam replacement engineered for Texas heat reflection, maximum airflow, and wind-storm resilience.',
      actionLabel: 'GET REPLACEMENT ESTIMATE',
      isPhone: false,
    },
    {
      id: 'repair',
      icon: 'handyman',
      title: 'Roof Repair',
      description:
        'Surgical repair of active leaks, damaged valleys, compromised pipe flashing, loose ridge caps, and isolated wind-displaced shingles.',
      actionLabel: 'REQUEST LEAK REPAIR',
      isPhone: false,
    },
    {
      id: 'inspection',
      icon: 'checklist',
      title: 'Roof Inspection',
      description:
        'Thorough 21-point exterior and attic inspection with clear digital photo reports and honest recommendations with zero pushy sales tactics.',
      actionLabel: 'BOOK FREE 21-PT INSPECTION',
      isPhone: false,
    },
    {
      id: 'storm',
      icon: 'thunderstorm',
      title: 'Storm Damage Roofing',
      description:
        'Rapid post-storm roof condition evaluations and storm restoration planning after hail or wind events across Travis & Williamson counties.',
      actionLabel: 'POST-STORM EVALUATION',
      isPhone: false,
    },
    {
      id: 'emergency',
      icon: 'emergency_home',
      title: 'Emergency Roofing',
      description:
        'Fast-response tarping and urgent weatherproofing to safeguard your interior ceilings and subfloors during severe active water penetration.',
      actionLabel: 'CALL EMERGENCY LINE',
      isPhone: true,
      phone: '5125550147',
    },
    {
      id: 'gutters',
      icon: 'water',
      title: 'Gutter Installation & Guards',
      description:
        'Seamless 6-inch aluminum gutters and leaf mitigation systems custom pitched to redirect torrential Central Texas downpours away from foundations.',
      actionLabel: 'EXPLORE GUTTER SYSTEMS',
      isPhone: false,
    },
  ];

  const handleServiceClick = (serviceId: string, isPhone?: boolean, phone?: string) => {
    if (isPhone && phone) {
      window.location.href = `tel:${phone}`;
      return;
    }

    if (onSelectService) {
      onSelectService(serviceId);
    }

    const formEl = document.getElementById('inspection-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
      // Set service select value if available
      const select = document.getElementById('service-select') as HTMLSelectElement;
      if (select) {
        select.value = serviceId;
      }
    }
  };

  return (
    <section id="services-section" className="w-full bg-[#f5f4ed] py-20 lg:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1F4E79]">
              TAILORED CENTRAL TEXAS SOLUTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1b1c18] mt-2 uppercase tracking-tight font-headline">
              Roofing Services Built Around Your Home
            </h2>
          </div>
          <p className="text-base text-[#5e5e5c] max-w-md leading-relaxed">
            From targeted leak repairs to full architectural roof replacements, we
            deliver precision solutions tailored to Texas climate requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service) => (
            <div
              key={service.id}
              className="bg-white p-8 rounded border border-[#E2E0D8] shadow-sm flex flex-col justify-between hover:shadow-md hover:border-[#1F4E79]/40 transition-all group"
            >
              <div>
                <div className="w-12 h-12 rounded bg-[#efeee7] flex items-center justify-center text-[#1F4E79] mb-6 group-hover:bg-[#1F4E79] group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[28px]">
                    {service.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#1b1c18] mb-3 font-headline">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-[#5e5e5c] leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <button
                onClick={() =>
                  handleServiceClick(service.id, service.isPhone, service.phone)
                }
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm uppercase tracking-wider text-[#1F4E79] hover:text-[#183e61] transition-colors font-bold text-left cursor-pointer group-hover:translate-x-1 duration-150"
              >
                <span>{service.actionLabel}</span>
                <span className="material-symbols-outlined text-[16px]">
                  {service.isPhone ? 'phone' : 'chevron_right'}
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
