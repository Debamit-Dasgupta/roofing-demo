import React, { useState, useEffect } from 'react';
import { Logo } from './Logo.tsx';

interface HeaderProps {
  onOpenInspection?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenInspection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll and listen for Escape key when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setMobileMenuOpen(false);
        }
      };

      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = originalStyle;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [mobileMenuOpen]);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    setServicesDropdown(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleCtaClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onOpenInspection) {
      onOpenInspection();
    } else {
      handleNavClick('inspection-form');
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white border-b transition-shadow duration-200 ${
        scrolled
          ? 'border-[#e4e2dc] shadow-[0_2px_12px_rgba(0,0,0,0.06)]'
          : 'border-[#c4c7c7]/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-20 flex items-center justify-between gap-3 sm:gap-4 lg:gap-6">
        {/* Zone 1: Company Logo (Subtle, single-line, zero wrapping) */}
        <div className="flex items-center shrink-0 min-w-0">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F4E79] rounded"
            aria-label="Lone Star Roofing Co. Home"
          >
            <Logo
              className="w-[130px] min-[360px]:w-[140px] sm:w-[155px] lg:w-[175px] h-auto max-h-[44px] object-contain"
              variant="light"
            />
          </a>
        </div>

        {/* Zone 2: Navigation Links (Single-line, professional, clean hover) */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-8 shrink-0">
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdown(true)}
            onMouseLeave={() => setServicesDropdown(false)}
          >
            <button
              onClick={() => handleNavClick('services-section')}
              className="flex items-center gap-1 text-[15px] font-semibold text-[#1b1c18] hover:text-[#1F4E79] transition-colors tracking-tight whitespace-nowrap cursor-pointer py-2 focus:outline-none"
            >
              <span>Services</span>
              <span className="material-symbols-outlined text-[16px] text-[#5e5e5c]">
                expand_more
              </span>
            </button>

            {/* Quick dropdown for instant service access */}
            {servicesDropdown && (
              <div className="absolute top-full left-0 w-64 bg-white border border-[#E2E0D8] rounded shadow-xl py-2 z-50 animate-in fade-in duration-150">
                <a
                  href="#services-section"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('services-section');
                  }}
                  className="block px-4 py-2.5 text-sm text-[#1b1c18] hover:bg-[#f5f4ed] hover:text-[#1F4E79] font-medium"
                >
                  Roof Replacement
                </a>
                <a
                  href="#services-section"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('services-section');
                  }}
                  className="block px-4 py-2.5 text-sm text-[#1b1c18] hover:bg-[#f5f4ed] hover:text-[#1F4E79] font-medium"
                >
                  Roof Leak Repair
                </a>
                <a
                  href="#services-section"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('services-section');
                  }}
                  className="block px-4 py-2.5 text-sm text-[#1b1c18] hover:bg-[#f5f4ed] hover:text-[#1F4E79] font-medium"
                >
                  Free 21-Pt Inspection
                </a>
                <a
                  href="#storm-section"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('storm-section');
                  }}
                  className="block px-4 py-2.5 text-sm text-[#1b1c18] hover:bg-[#f5f4ed] hover:text-[#1F4E79] font-medium"
                >
                  Storm &amp; Hail Damage
                </a>
                <a
                  href="#services-section"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('services-section');
                  }}
                  className="block px-4 py-2.5 text-sm text-[#1b1c18] hover:bg-[#f5f4ed] hover:text-[#1F4E79] font-medium"
                >
                  Emergency Tarping
                </a>
              </div>
            )}
          </div>

          <button
            onClick={() => handleNavClick('why-us-section')}
            className="text-[15px] font-semibold text-[#1b1c18] hover:text-[#1F4E79] transition-colors tracking-tight whitespace-nowrap cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => handleNavClick('projects-section')}
            className="text-[15px] font-semibold text-[#1b1c18] hover:text-[#1F4E79] transition-colors tracking-tight whitespace-nowrap cursor-pointer"
          >
            Projects
          </button>
          <button
            onClick={() => handleNavClick('service-areas-section')}
            className="text-[15px] font-semibold text-[#1b1c18] hover:text-[#1F4E79] transition-colors tracking-tight whitespace-nowrap cursor-pointer"
          >
            Service Areas
          </button>
          <button
            onClick={() => handleNavClick('faq-section')}
            className="text-[15px] font-semibold text-[#1b1c18] hover:text-[#1F4E79] transition-colors tracking-tight whitespace-nowrap cursor-pointer"
          >
            Resources
          </button>
        </nav>

        {/* Zone 3: Direct Phone & Primary CTA (Single line, strictly no wrap) */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-6 shrink-0">
          <a
            href="tel:5125550147"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#5e5e5c] hover:text-[#1b1c18] transition-colors whitespace-nowrap"
            title="Call Austin Office directly"
          >
            <span className="material-symbols-outlined text-[18px] text-[#5e5e5c]">
              phone
            </span>
            <span className="tabular-nums font-medium">(512) 555-0147</span>
          </a>

          <button
            onClick={handleCtaClick}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded bg-[#1F4E79] hover:bg-[#183e61] text-white text-[13px] uppercase tracking-wider font-bold transition-all shadow-sm active:translate-y-0.5 whitespace-nowrap cursor-pointer"
          >
            GET A FREE ROOF INSPECTION
          </button>
        </div>

        {/* Mobile Action buttons */}
        <div className="flex lg:hidden items-center gap-2 shrink-0">
          <a
            href="tel:5125550147"
            aria-label="Call Lone Star Roofing Co."
            className="w-10 h-10 rounded flex items-center justify-center text-[#1b1c18] hover:text-[#B53A32] bg-[#efeee7] active:bg-[#e4e2dc] transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">phone</span>
          </a>
          <button
            type="button"
            aria-label="Open mobile menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(true)}
            className="w-10 h-10 rounded flex items-center justify-center text-[#1b1c18] hover:text-[#1F4E79] bg-[#efeee7] active:bg-[#e4e2dc] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[24px]">menu</span>
          </button>
        </div>
      </div>

      {/* 1. HORIZONTAL RIGHT-SIDE SLIDING DRAWER & BACKDROP */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex justify-end">
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Right-Side Panel */}
          <aside
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
            className="relative z-10 w-[85vw] max-w-[340px] sm:max-w-[380px] h-full bg-[#fbf9f3] text-[#1b1c18] border-l border-[#E2E0D8] shadow-2xl flex flex-col justify-between overflow-y-auto transform transition-transform duration-300 ease-out animate-in slide-in-from-right"
          >
            {/* Top Bar of Drawer: Logo + Close Button */}
            <div className="p-5 border-b border-[#E2E0D8] bg-white flex items-center justify-between gap-3 sticky top-0 z-20">
              <div className="flex items-center min-w-0">
                <Logo
                  className="w-[145px] sm:w-[160px] h-auto max-h-[42px] object-contain"
                  variant="light"
                />
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close navigation menu"
                className="w-9 h-9 rounded flex items-center justify-center text-[#1b1c18] hover:text-[#B53A32] bg-[#efeee7] hover:bg-[#e4e2dc] transition-colors shrink-0 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[22px]">close</span>
              </button>
            </div>

            {/* Middle Section: Clean, spacious navigation links */}
            <div className="p-5 sm:p-6 flex-1 flex flex-col justify-start">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#5e5e5c] mb-3">
                Navigation
              </div>

              <nav className="flex flex-col space-y-1">
                <button
                  onClick={() => handleNavClick('services-section')}
                  className="w-full flex items-center justify-between py-3 px-3 rounded text-left text-[16px] font-semibold text-[#1b1c18] hover:bg-[#efeee7] hover:text-[#1F4E79] transition-colors font-headline"
                >
                  <span>Services</span>
                  <span className="material-symbols-outlined text-[18px] text-[#747878]">
                    chevron_right
                  </span>
                </button>

                <button
                  onClick={() => handleNavClick('why-us-section')}
                  className="w-full flex items-center justify-between py-3 px-3 rounded text-left text-[16px] font-semibold text-[#1b1c18] hover:bg-[#efeee7] hover:text-[#1F4E79] transition-colors font-headline"
                >
                  <span>About</span>
                  <span className="material-symbols-outlined text-[18px] text-[#747878]">
                    chevron_right
                  </span>
                </button>

                <button
                  onClick={() => handleNavClick('projects-section')}
                  className="w-full flex items-center justify-between py-3 px-3 rounded text-left text-[16px] font-semibold text-[#1b1c18] hover:bg-[#efeee7] hover:text-[#1F4E79] transition-colors font-headline"
                >
                  <span>Projects</span>
                  <span className="material-symbols-outlined text-[18px] text-[#747878]">
                    chevron_right
                  </span>
                </button>

                <button
                  onClick={() => handleNavClick('service-areas-section')}
                  className="w-full flex items-center justify-between py-3 px-3 rounded text-left text-[16px] font-semibold text-[#1b1c18] hover:bg-[#efeee7] hover:text-[#1F4E79] transition-colors font-headline"
                >
                  <span>Service Areas</span>
                  <span className="material-symbols-outlined text-[18px] text-[#747878]">
                    chevron_right
                  </span>
                </button>

                <button
                  onClick={() => handleNavClick('faq-section')}
                  className="w-full flex items-center justify-between py-3 px-3 rounded text-left text-[16px] font-semibold text-[#1b1c18] hover:bg-[#efeee7] hover:text-[#1F4E79] transition-colors font-headline"
                >
                  <span>Resources</span>
                  <span className="material-symbols-outlined text-[18px] text-[#747878]">
                    chevron_right
                  </span>
                </button>
              </nav>

              {/* Quick Regional Badge */}
              <div className="mt-6 p-3.5 rounded bg-[#efeee7] border border-[#E2E0D8] flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#1F4E79] text-[20px] shrink-0">
                  verified
                </span>
                <span className="text-xs text-[#444748] font-medium leading-tight">
                  Travis &amp; Williamson Counties &bull; Licensed &amp; Insured
                </span>
              </div>
            </div>

            {/* Bottom Section: Direct Actions */}
            <div className="p-5 border-t border-[#E2E0D8] bg-white flex flex-col space-y-3 sticky bottom-0 z-20">
              <a
                href="tel:5125550147"
                className="flex items-center justify-center gap-2 py-3 text-sm font-semibold text-[#1b1c18] bg-[#f5f4ed] hover:bg-[#efeee7] rounded border border-[#E2E0D8] transition-colors tabular-nums"
              >
                <span className="material-symbols-outlined text-[18px] text-[#1F4E79]">
                  phone
                </span>
                <span>(512) 555-0147</span>
              </a>

              <button
                onClick={handleCtaClick}
                className="w-full flex items-center justify-center py-3.5 px-4 rounded bg-[#1F4E79] hover:bg-[#183e61] text-white text-[12px] sm:text-[13px] uppercase tracking-wider font-bold shadow-md active:translate-y-0.5 transition-all text-center leading-tight"
              >
                GET A FREE ROOF INSPECTION
              </button>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
};
