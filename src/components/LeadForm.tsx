import React, { useState } from 'react';

interface LeadFormProps {
  initialService?: string;
}

export const LeadForm: React.FC<LeadFormProps> = ({ initialService = '' }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: initialService,
    address: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [confirmationNumber, setConfirmationNumber] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomRef = `LS-${Math.floor(100000 + Math.random() * 900000)}`;
    setConfirmationNumber(randomRef);
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      service: '',
      address: '',
      notes: '',
    });
    setSubmitted(false);
  };

  return (
    <section
      id="inspection-form"
      className="w-full bg-[#fbf9f3] py-20 lg:py-28 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form Left Column: Context & Reassurance */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1F4E79]">
                GET IN TOUCH
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1b1c18] mt-2 mb-4 uppercase tracking-tight font-headline">
                Let’s Take a Look at Your Roof.
              </h2>
              <p className="text-base sm:text-lg text-[#5e5e5c] mb-8 leading-relaxed">
                Tell us a little about your project and we’ll schedule a free,
                comprehensive roof inspection with zero obligation.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#1F4E79] text-[22px] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span className="text-sm sm:text-base text-[#1b1c18] font-medium">
                    No pressure, no aggressive sales calls—just honest diagnostics
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#1F4E79] text-[22px] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span className="text-sm sm:text-base text-[#1b1c18] font-medium">
                    Full digital photographic findings report provided to you
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#1F4E79] text-[22px] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span className="text-sm sm:text-base text-[#1b1c18] font-medium">
                    Punctual appointment windows honored across Central Texas
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Phone Call Box */}
            <div className="p-6 rounded bg-[#eae8e2] border border-[#E2E0D8] flex flex-col justify-start">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#5e5e5c]">
                Prefer to talk directly?
              </span>
              <a
                href="tel:5125550147"
                className="text-2xl sm:text-3xl font-bold text-[#1b1c18] hover:text-[#1F4E79] transition-colors mt-1 font-headline tabular-nums"
              >
                (512) 555-0147
              </a>
              <span className="text-xs sm:text-sm text-[#444748] mt-1">
                Mon–Sat 7:00 AM – 7:00 PM · Quick dispatch available
              </span>
            </div>
          </div>

          {/* Form Right Column: Actual Form Card */}
          <div className="lg:col-span-7 bg-white p-8 lg:p-10 rounded-lg border border-[#E2E0D8] shadow-lg">
            {submitted ? (
              <div className="text-center py-8 animate-in fade-in zoom-in-95 duration-200">
                <div className="w-16 h-16 rounded-full bg-[#1F4E79]/10 text-[#1F4E79] flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-[36px]">
                    verified
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#1b1c18] font-headline mb-2">
                  Inspection Request Received
                </h3>
                <p className="text-sm text-[#5e5e5c] max-w-md mx-auto mb-6">
                  Thank you, <strong className="text-[#1b1c18]">{formData.fullName || 'Neighbor'}</strong>.
                  Our Austin dispatch team has scheduled your inspection inquiry. An estimator will call{' '}
                  <span className="font-semibold text-[#1b1c18]">{formData.phone}</span> within 2 hours
                  to confirm your arrival window.
                </p>

                <div className="bg-[#f5f4ed] p-4 rounded border border-[#E2E0D8] text-left max-w-md mx-auto mb-6 text-xs sm:text-sm space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-[#5e5e5c]">Reference ID:</span>
                    <span className="font-bold text-[#1b1c18] tabular-nums">
                      {confirmationNumber}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#5e5e5c]">Property Address:</span>
                    <span className="font-medium text-[#1b1c18] text-right truncate max-w-[200px]">
                      {formData.address || 'Austin Metro'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#5e5e5c]">Estimated Dispatch:</span>
                    <span className="font-semibold text-emerald-700">
                      Same-Day / Next-Day Window
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded bg-[#eae8e2] hover:bg-[#e4e2dc] text-[#1b1c18] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                  <a
                    href="tel:5125550147"
                    className="px-6 py-2.5 rounded bg-[#1F4E79] hover:bg-[#183e61] text-white text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    Call Austin Office Now
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs sm:text-sm font-bold text-[#1b1c18] mb-1.5"
                    >
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Robert Davis"
                      className="w-full h-12 px-4 rounded bg-[#fbf9f3] border border-[#c4c7c7]/60 focus:border-[#1F4E79] focus:bg-white focus:outline-none text-sm text-[#1b1c18] transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs sm:text-sm font-bold text-[#1b1c18] mb-1.5"
                    >
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(512) 555-0123"
                      className="w-full h-12 px-4 rounded bg-[#fbf9f3] border border-[#c4c7c7]/60 focus:border-[#1F4E79] focus:bg-white focus:outline-none text-sm text-[#1b1c18] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs sm:text-sm font-bold text-[#1b1c18] mb-1.5"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="robert@example.com"
                      className="w-full h-12 px-4 rounded bg-[#fbf9f3] border border-[#c4c7c7]/60 focus:border-[#1F4E79] focus:bg-white focus:outline-none text-sm text-[#1b1c18] transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-xs sm:text-sm font-bold text-[#1b1c18] mb-1.5"
                    >
                      Service Needed *
                    </label>
                    <select
                      id="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full h-12 px-4 rounded bg-[#fbf9f3] border border-[#c4c7c7]/60 focus:border-[#1F4E79] focus:bg-white focus:outline-none text-sm text-[#1b1c18] transition-colors"
                    >
                      <option value="" disabled>
                        Select service type...
                      </option>
                      <option value="inspection">Free Roof Inspection</option>
                      <option value="repair">Roof Leak / Repair</option>
                      <option value="replacement">Roof Replacement</option>
                      <option value="storm">Storm / Hail Damage</option>
                      <option value="emergency">Emergency Tarping</option>
                      <option value="gutters">Gutter Installation</option>
                      <option value="unsure">Not Sure / Needs Assessment</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="address"
                    className="block text-xs sm:text-sm font-bold text-[#1b1c18] mb-1.5"
                  >
                    Property Address &amp; ZIP *
                  </label>
                  <input
                    id="address"
                    type="text"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="e.g. 1402 Barton Springs Rd, Austin, TX 78704"
                    className="w-full h-12 px-4 rounded bg-[#fbf9f3] border border-[#c4c7c7]/60 focus:border-[#1F4E79] focus:bg-white focus:outline-none text-sm text-[#1b1c18] transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="notes"
                    className="block text-xs sm:text-sm font-bold text-[#1b1c18] mb-1.5"
                  >
                    Specific Concerns or Roof History
                  </label>
                  <textarea
                    id="notes"
                    rows={3}
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Tell us about active leaks, recent hail, approximate roof age, or HOA constraints..."
                    className="w-full p-4 rounded bg-[#fbf9f3] border border-[#c4c7c7]/60 focus:border-[#1F4E79] focus:bg-white focus:outline-none text-sm text-[#1b1c18] transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full h-14 rounded bg-[#1F4E79] hover:bg-[#183e61] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md transition-all active:translate-y-0.5 cursor-pointer"
                >
                  REQUEST MY FREE INSPECTION
                </button>

                <div className="flex items-center justify-center gap-2 pt-2 text-center">
                  <span className="material-symbols-outlined text-[16px] text-[#747878]">
                    lock
                  </span>
                  <span className="text-xs text-[#5e5e5c]">
                    Your information is completely private. No spam, no aggressive sales
                    calls. Direct inspection scheduling.
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
