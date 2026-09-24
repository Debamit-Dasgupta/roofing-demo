import React, { useState } from 'react';
import { Logo } from './Logo.tsx';

export const Footer: React.FC = () => {
  const [legalModal, setLegalModal] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-[#f5f4ed] border-t border-[#c4c7c7]/30 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand & Credentials */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Logo
                className="w-[145px] sm:w-[165px] h-auto object-contain max-h-[44px]"
                variant="light"
              />
            </div>
            <p className="text-sm font-bold text-[#1b1c18] font-headline">
              Built for Texas. Trusted by Austin.
            </p>
            <p className="text-xs sm:text-sm text-[#444748] leading-relaxed">
              Fully licensed, bonded, and certified Austin residential roofing
              contractors specializing in hail mitigation, standing seam metal, and
              architectural shingles.
            </p>
            <p className="text-[11px] text-[#747878] leading-tight pt-2">
              Demonstration website prepared for Austin residential design
              specifications. All testimonials and portfolio metrics are illustrative
              demo data.
            </p>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1b1c18] font-headline">
              Roofing Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#444748]">
              <li>
                <button
                  onClick={() => scrollToSection('services-section')}
                  className="hover:text-[#1F4E79] transition-colors cursor-pointer text-left"
                >
                  Roof Replacement
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services-section')}
                  className="hover:text-[#1F4E79] transition-colors cursor-pointer text-left"
                >
                  Roof Repair
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services-section')}
                  className="hover:text-[#1F4E79] transition-colors cursor-pointer text-left"
                >
                  Roof Inspection
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('storm-section')}
                  className="hover:text-[#1F4E79] transition-colors cursor-pointer text-left"
                >
                  Storm Damage Roofing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services-section')}
                  className="hover:text-[#1F4E79] transition-colors cursor-pointer text-left"
                >
                  Emergency Roofing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services-section')}
                  className="hover:text-[#1F4E79] transition-colors cursor-pointer text-left"
                >
                  Gutter Installation
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Service Areas */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1b1c18] font-headline">
              Service Areas
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#444748]">
              <li>
                <button
                  onClick={() => scrollToSection('service-areas-section')}
                  className="hover:text-[#1F4E79] transition-colors cursor-pointer text-left"
                >
                  Austin, TX
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('service-areas-section')}
                  className="hover:text-[#1F4E79] transition-colors cursor-pointer text-left"
                >
                  Round Rock, TX
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('service-areas-section')}
                  className="hover:text-[#1F4E79] transition-colors cursor-pointer text-left"
                >
                  Cedar Park, TX
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('service-areas-section')}
                  className="hover:text-[#1F4E79] transition-colors cursor-pointer text-left"
                >
                  Pflugerville, TX
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('service-areas-section')}
                  className="hover:text-[#1F4E79] transition-colors cursor-pointer text-left"
                >
                  Georgetown, TX
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('service-areas-section')}
                  className="hover:text-[#1F4E79] transition-colors cursor-pointer text-left"
                >
                  Leander, TX
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('service-areas-section')}
                  className="hover:text-[#1F4E79] transition-colors cursor-pointer text-left"
                >
                  West Lake Hills, TX
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Direct Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1b1c18] font-headline">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-[#444748]">
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[18px] text-[#1b1c18] shrink-0 mt-0.5">
                  location_on
                </span>
                <span>3801 S Congress Ave, Austin, TX 78704</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-[#1b1c18] shrink-0">
                  phone
                </span>
                <a
                  href="tel:5125550147"
                  className="hover:text-[#1F4E79] transition-colors font-semibold text-[#1b1c18] tabular-nums"
                >
                  (512) 555-0147
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-[#1b1c18] shrink-0">
                  mail
                </span>
                <a
                  href="mailto:hello@lonestarroofing.example"
                  className="hover:text-[#1F4E79] transition-colors"
                >
                  hello@lonestarroofing.example
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-[#1b1c18] shrink-0">
                  schedule
                </span>
                <span>Mon-Sat 7:00 AM - 7:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal / Copyright Row */}
        <div className="mt-12 pt-6 border-t border-[#c4c7c7]/30 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#5e5e5c]">
          <p>
            &copy; 2025 Lone Star Roofing Co. All rights reserved. Texas Roofing
            Consumer Notice &amp; RCAT Compliant.
          </p>
          <div className="flex items-center gap-6 text-[11px] font-bold uppercase tracking-wider">
            <button
              onClick={() => setLegalModal('privacy')}
              className="hover:text-[#1b1c18] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setLegalModal('terms')}
              className="hover:text-[#1b1c18] transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <button
              onClick={() => setLegalModal('notice')}
              className="hover:text-[#1b1c18] transition-colors cursor-pointer"
            >
              Texas Consumer Info
            </button>
          </div>
        </div>
      </div>

      {/* Simple Legal Modal */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-lg max-w-lg w-full p-6 shadow-xl border border-[#E2E0D8]">
            <div className="flex items-center justify-between pb-3 border-b border-[#E2E0D8]">
              <h3 className="text-lg font-bold text-[#1b1c18] font-headline uppercase">
                {legalModal === 'privacy' && 'Privacy Policy'}
                {legalModal === 'terms' && 'Terms of Service'}
                {legalModal === 'notice' && 'Texas Roofing Consumer Notice'}
              </h3>
              <button
                onClick={() => setLegalModal(null)}
                className="text-[#5e5e5c] hover:text-[#1b1c18] cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">
                  close
                </span>
              </button>
            </div>
            <div className="py-4 text-xs sm:text-sm text-[#444748] leading-relaxed space-y-2">
              {legalModal === 'privacy' && (
                <p>
                  Lone Star Roofing Co. respects your privacy. All information submitted
                  via our inspection booking forms is solely used to dispatch roofing
                  evaluators and provide estimates. We never sell, rent, or distribute
                  homeowner data.
                </p>
              )}
              {legalModal === 'terms' && (
                <p>
                  All roofing services, warranties, and project schedules are subject to
                  formal written work orders executed prior to construction. Free
                  inspections carry zero obligation.
                </p>
              )}
              {legalModal === 'notice' && (
                <p>
                  Under Texas Business &amp; Commerce Code Chapter 58, roofing
                  contractors are strictly prohibited from paying, rebating, or waiving
                  any portion of an insurance deductible. Lone Star Roofing operates in
                  strict compliance with all Texas statutes and RCAT standards.
                </p>
              )}
            </div>
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setLegalModal(null)}
                className="px-4 py-2 rounded bg-[#1c1b1b] text-white text-xs font-bold uppercase tracking-wider cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
