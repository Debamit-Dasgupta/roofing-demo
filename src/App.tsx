/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { TrustStrip } from './components/TrustStrip.tsx';
import { ProblemValue } from './components/ProblemValue.tsx';
import { Services } from './components/Services.tsx';
import { ConversionBanner } from './components/ConversionBanner.tsx';
import { WhyChooseUs } from './components/WhyChooseUs.tsx';
import { Process } from './components/Process.tsx';
import { ProjectShowcase } from './components/ProjectShowcase.tsx';
import { Testimonials } from './components/Testimonials.tsx';
import { StormProtocol } from './components/StormProtocol.tsx';
import { ServiceAreas } from './components/ServiceAreas.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { LeadForm } from './components/LeadForm.tsx';
import { Footer } from './components/Footer.tsx';
import { InspectionModal } from './components/InspectionModal.tsx';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('inspection');

  const handleOpenInspection = (serviceKey: string = 'inspection') => {
    setSelectedService(serviceKey);
    setModalOpen(true);
  };

  const handleSelectServiceFromList = (serviceKey: string) => {
    setSelectedService(serviceKey);
    const formEl = document.getElementById('inspection-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
      const select = document.getElementById('service') as HTMLSelectElement;
      if (select) {
        select.value = serviceKey;
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#fbf9f3] text-[#1b1c18] flex flex-col selection:bg-[#1F4E79] selection:text-white overflow-x-hidden w-full">
      {/* 0. Professional Top Header (Subtle, compact, single-line, no wrapping) */}
      <Header onOpenInspection={() => handleOpenInspection('inspection')} />

      {/* Main Content Sections (Preserving exact section order from the Stitch design) */}
      <main className="w-full flex-grow pt-20">
        {/* 1. Hero Section */}
        <Hero onOpenInspection={() => handleOpenInspection('inspection')} />

        {/* 2. Compact Trust Strip */}
        <TrustStrip />

        {/* 3. Problem / Value Section */}
        <ProblemValue onOpenInspection={() => handleOpenInspection('inspection')} />

        {/* 4. Services Section */}
        <Services onSelectService={handleSelectServiceFromList} />

        {/* 5. Full-Width Conversion Banner ("Not Sure What Your Roof Needs?") */}
        <ConversionBanner onOpenInspection={() => handleOpenInspection('unsure')} />

        {/* 6. Why Choose Us (Clarity & Craftsmanship) */}
        <WhyChooseUs />

        {/* 7. 4-Step Transparent Process */}
        <Process />

        {/* 8. Demo Project Showcase */}
        <ProjectShowcase />

        {/* 9. Sample Testimonials */}
        <Testimonials />

        {/* 10. Storm Damage Protocol ("Texas Hail & Wind Rapid Protocol") */}
        <StormProtocol onOpenInspection={() => handleOpenInspection('storm')} />

        {/* 11. Service Area Coverage */}
        <ServiceAreas />

        {/* 12. Expandable Accordion FAQ */}
        <FaqSection />

        {/* 13. High-Converting Lead Generation Form */}
        <LeadForm initialService={selectedService} />
      </main>

      {/* 14. Footer with Consistent Logo, Quick Links, and Direct Contact */}
      <Footer />

      {/* Quick Inspection Modal */}
      <InspectionModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService={selectedService}
      />
    </div>
  );
}
