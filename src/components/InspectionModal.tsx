import React, { useState } from 'react';

interface InspectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const InspectionModal: React.FC<InspectionModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'inspection',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: defaultService,
    address: '',
    timeframe: 'asap',
  });
  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRefId(`TX-${Math.floor(100000 + Math.random() * 900000)}`);
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-lg max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#E2E0D8] relative">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#efeee7] hover:bg-[#e4e2dc] text-[#1b1c18] flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        {submitted ? (
          <div className="text-center py-4">
            <div className="w-14 h-14 rounded-full bg-[#1F4E79]/10 text-[#1F4E79] flex items-center justify-center mx-auto mb-3">
              <span className="material-symbols-outlined text-[32px]">
                verified
              </span>
            </div>
            <h3 className="text-xl font-bold text-[#1b1c18] font-headline mb-2">
              Inspection Slot Reserved
            </h3>
            <p className="text-xs sm:text-sm text-[#5e5e5c] mb-4 leading-relaxed">
              We received your inspection request. An Austin field estimator will
              call <strong className="text-[#1b1c18]">{formData.phone}</strong> shortly to confirm access details.
            </p>
            <div className="p-3 bg-[#f5f4ed] rounded border border-[#E2E0D8] text-xs text-left mb-5 space-y-1">
              <div className="flex justify-between">
                <span className="text-[#5e5e5c]">Tracking Code:</span>
                <span className="font-bold text-[#1b1c18]">{refId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#5e5e5c]">Priority:</span>
                <span className="font-bold text-[#1F4E79]">Central TX Dispatch</span>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="w-full py-3 rounded bg-[#1F4E79] hover:bg-[#183e61] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#1F4E79] block mb-1">
                AUSTIN METRO RAPID DISPATCH
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1b1c18] font-headline">
                Schedule a Free Roof Inspection
              </h3>
              <p className="text-xs text-[#5e5e5c] mt-1">
                Zero obligation &bull; Complete photographic report &bull; No sales pressure
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#1b1c18] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full h-11 px-3.5 rounded bg-[#fbf9f3] border border-[#c4c7c7] text-sm text-[#1b1c18] focus:border-[#1F4E79] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#1b1c18] mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(512) 555-0123"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full h-11 px-3.5 rounded bg-[#fbf9f3] border border-[#c4c7c7] text-sm text-[#1b1c18] focus:border-[#1F4E79] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#1b1c18] mb-1">
                    Service *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full h-11 px-3.5 rounded bg-[#fbf9f3] border border-[#c4c7c7] text-sm text-[#1b1c18] focus:border-[#1F4E79] focus:outline-none"
                  >
                    <option value="inspection">Free 21-Pt Inspection</option>
                    <option value="repair">Active Leak / Repair</option>
                    <option value="replacement">Full Replacement</option>
                    <option value="storm">Hail / Storm Assessment</option>
                    <option value="emergency">Emergency Tarping</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1b1c18] mb-1">
                  Property Address &amp; ZIP *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Street Address, Austin or Williamson Co."
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  className="w-full h-11 px-3.5 rounded bg-[#fbf9f3] border border-[#c4c7c7] text-sm text-[#1b1c18] focus:border-[#1F4E79] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1b1c18] mb-1">
                  Urgency / Timing
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {[
                    { id: 'asap', label: 'ASAP / Urgent' },
                    { id: 'this_week', label: 'This Week' },
                    { id: 'flexible', label: 'Flexible' },
                  ].map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() =>
                        setFormData({ ...formData, timeframe: t.id })
                      }
                      className={`py-2 rounded border text-center font-medium transition-colors cursor-pointer ${
                        formData.timeframe === t.id
                          ? 'bg-[#1F4E79] text-white border-[#1F4E79]'
                          : 'bg-[#f5f4ed] text-[#1b1c18] border-[#c4c7c7] hover:bg-[#eae8e2]'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full h-12 mt-2 rounded bg-[#1F4E79] hover:bg-[#183e61] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all active:translate-y-0.5 cursor-pointer"
              >
                CONFIRM FREE INSPECTION
              </button>

              <p className="text-[11px] text-center text-[#747878]">
                Lone Star Roofing Co. &bull; Licensed &bull; (512) 555-0147
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
