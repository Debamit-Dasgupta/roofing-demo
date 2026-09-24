import React, { useState } from 'react';

export const ProjectShowcase: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<null | {
    title: string;
    location: string;
    image: string;
    description: string;
    spec1: string;
    spec2: string;
    material: string;
    warranty: string;
  }>(null);

  const projects = [
    {
      title: 'Modern Architectural Shingle Replacement',
      location: 'Austin, TX (Zilker Area)',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCoI6HT9jI0xqCiX_GRdtT0lL9XmsG0fClZQ7GmctHqBbyAIiYS7TVr5Q1dHFUAyxkprpVCSz6J9-FGcQ5pIFyBPWlfdoHrEsyT_X3bUWiU5FsujMbAePDnnkFeOG0MsMtWag3FVRuELQRPE7pIK3ZwHSpyT5iL8yEsnX72KgditCvxh6I7lcz0-BsXE3fyQU1fpT9rMwwjp-KvC-h73NWKqn3MYYa7MTiYUZBjwwezWI9g8ZYalQE1',
      description:
        'Full tear-off and installation of high-definition charcoal architectural shingles with upgraded continuous ridge ventilation and leak barriers.',
      spec1: 'Wind Spec: 130 MPH',
      spec2: 'Duration: 2 Days',
      material: 'GAF Timberline HDZ Charcoal Architectural Shingles',
      warranty: '50-Year Non-Prorated Lifetime Manufacturer Warranty',
    },
    {
      title: 'Post-Storm Shingle & Ridge Restoration',
      location: 'Austin, TX (Mueller Area)',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDNO-2WhQvvymSCfAzsvYGiL0BXo0quG22Iq6PL7kmRWL2O9qm1yZOmv3WsUo3DOsT1Yq9JEyqBljiQMycaDwRHrwe75xHxixUD8y-3HK2ftyTi4wAyHS5zXETxVgfQ9szVq-DhnjNqFLiDKlgdwwmbweXme21JCEbYZgkvNrEEi6JZqgk3lnvesSQe39nD70Inpa7rnfpCnnA05glSpifR56UI7871VUH2HEF1fNe0Sv_6sGjl7flq',
      description:
        'Hail damage assessment, targeted flashing repairs, and complete Class-4 impact-resistant shingle upgrade for enhanced storm defense.',
      spec1: 'Class 4 Impact',
      spec2: 'Duration: 1.5 Days',
      material: 'Class 4 SBS Modified Hail-Resistant Shingles + New Drip Edge',
      warranty: 'Qualifies for up to 25% Texas Homeowner Insurance Discount',
    },
    {
      title: 'Standing Seam Metal & Shingle Upgrade',
      location: 'Round Rock, TX',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDzPucnPRpJT3HwoX80rzlQLPgjl87EPLMDDycAN0-_IuuARdKudsbp1Qle3aRWLYRmnu5DfnzcWYSjkSXi1RQ1Hw4vlyUMKVCTediDvs6sFn0TrJCIyKT_qaNALRHOV15blJ0NmCS-shdEK3rSm6EbCPqA4tzNpw93QduQ3E_MLEXRM350hYCUUgnD-2qjy3yiaUZN7dEgD3k5ze-V2U6HDOw7Mdjm42CQL4jHerz2N2OI_FkCY_BU',
      description:
        'Replacement of aging 20-year 3-tab roof with heavy-duty architectural shingles and enhanced ice & water shield in all critical roof valleys.',
      spec1: 'Standing Seam Metal',
      spec2: 'Duration: 3 Days',
      material: '24-Gauge Galvalume Standing Seam Metal + High-Temp Underlayment',
      warranty: 'Energy Star Rated Cool Roof Reflective Coating',
    },
  ];

  return (
    <section id="projects-section" className="w-full bg-[#fbf9f3] py-20 lg:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1F4E79]">
              DEMONSTRATION PORTFOLIO
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1b1c18] mt-2 uppercase tracking-tight font-headline">
              Roofing Work That Speaks for Itself.
            </h2>
          </div>
          <p className="text-base text-[#5e5e5c] max-w-md leading-relaxed">
            Selected demonstration case studies highlighting residential
            craftsmanship across Central Texas neighborhoods.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-[#efeee7] rounded-lg border border-[#E2E0D8] overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md hover:border-[#1F4E79]/50 transition-all cursor-pointer group"
              onClick={() => setSelectedProject(project)}
            >
              <div>
                <div className="relative h-64 w-full bg-[#eae8e2] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-4 left-4 px-2.5 py-1 rounded bg-black/80 backdrop-blur-xs text-white text-[11px] font-bold uppercase tracking-wider">
                    DEMO PROJECT
                  </span>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 text-[#1b1c18] text-xs font-bold uppercase px-3 py-1.5 rounded shadow">
                      View Specs &amp; Details
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#5e5e5c]">
                    {project.location}
                  </span>
                  <h3 className="text-lg font-bold text-[#1b1c18] mt-1 mb-2 font-headline group-hover:text-[#1F4E79] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#5e5e5c] leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-3 border-t border-[#c4c7c7]/30 flex items-center justify-between text-xs text-[#444748] uppercase font-semibold">
                <span>{project.spec1}</span>
                <span>{project.spec2}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#E2E0D8]">
            <div className="relative h-64 sm:h-80 w-full bg-neutral-900">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <span className="material-symbols-outlined text-[20px]">
                  close
                </span>
              </button>
              <div className="absolute bottom-4 left-4">
                <span className="px-2.5 py-1 rounded bg-[#1F4E79] text-white text-xs font-bold uppercase tracking-wider">
                  {selectedProject.location}
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-[#1b1c18] font-headline">
                  {selectedProject.title}
                </h3>
                <p className="text-sm text-[#5e5e5c] mt-2 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#E2E0D8]">
                <div className="p-3.5 bg-[#f5f4ed] rounded border border-[#E2E0D8]">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#5e5e5c] block mb-1">
                    ENGINEERING SPECIFICATION
                  </span>
                  <span className="text-sm font-bold text-[#1b1c18]">
                    {selectedProject.spec1} &bull; {selectedProject.spec2}
                  </span>
                </div>

                <div className="p-3.5 bg-[#f5f4ed] rounded border border-[#E2E0D8]">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#5e5e5c] block mb-1">
                    MATERIAL SPECIFICATION
                  </span>
                  <span className="text-sm font-bold text-[#1b1c18]">
                    {selectedProject.material}
                  </span>
                </div>
              </div>

              <div className="p-4 rounded bg-[#efeee7] text-xs sm:text-sm text-[#444748] flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[#1F4E79] text-[20px] shrink-0">
                  verified
                </span>
                <div>
                  <span className="font-bold text-[#1b1c18] block mb-0.5">
                    Austin Regional Standard:
                  </span>
                  <span>{selectedProject.warranty}</span>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-[#E2E0D8]">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded bg-[#f5f4ed] hover:bg-[#eae8e2] text-[#1b1c18] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Close
                </button>
                <a
                  href="#inspection-form"
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2.5 rounded bg-[#1F4E79] hover:bg-[#183e61] text-white text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Request Similar Roof
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
