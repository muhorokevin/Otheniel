
import React, { useState, useEffect } from 'react';

interface Fee {
  label: string;
  value: string;
}

interface ServiceCategory {
  id: string;
  title: string;
  shortDesc: string;
  icon: React.ReactNode;
  documents: string[];
  fees?: Fee[];
  categoryNotes?: string;
}

const serviceCategories: ServiceCategory[] = [
  {
    id: 'entry',
    title: 'Entry & Travel Authorization',
    shortDesc: 'eTA and Multiple Entry travel authorizations.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
    documents: [
      'Valid passport (≥ 6 months validity + blank page)',
      'Passport-type photo or high-quality selfie',
      'Contact details (Valid Email & Phone Number)',
      'Flight itinerary (Arrival & Departure details)',
      'Accommodation proof (Hotel booking or Host address)',
      'Return or onward ticket details',
      'Yellow fever certificate (if from endemic country)',
      'Invitation letter (for business or family visits)'
    ],
    fees: [
      { label: 'Standard eTA', value: 'USD 30' },
      { label: '1-Year Multiple Entry', value: 'USD 100' },
      { label: 'Transit eTA', value: 'USD 20' },
      { label: 'Expedited Service', value: 'USD 100' }
    ],
    categoryNotes: 'eTA is required for all foreign visitors. Payments are managed via eCitizen.'
  },
  {
    id: 'study',
    title: 'Study & Education',
    shortDesc: 'Student and Pupil passes for all levels.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    documents: [
      'Admission letter from recognized institution',
      'Certified academic certificates',
      'Valid passport copy',
      'Parental consent (for minors)',
      'Proof of funds / Sponsorship letter',
      'Police clearance (Adult applicants)'
    ],
    fees: [
      { label: 'Student Pass Fee', value: 'USD 100 / Year' },
      { label: 'Pupil Pass Fee', value: 'KES 5,000 / Year' }
    ]
  },
  {
    id: 'work',
    title: 'Work & Employment',
    shortDesc: 'Work permits (Classes A, B, C, D, G, etc.)',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 00-2 2z" />
      </svg>
    ),
    documents: [
      'Employer cover letter to Director General',
      'Certified professional certificates',
      'Applicant CV',
      'Passport bio-data copy',
      'Current Tax Compliance (Employer)',
      'Security bond / Repatriation proof'
    ],
    fees: [
      { label: 'Processing Fee', value: 'KES 20,000' },
      { label: 'Class D (Employment)', value: 'KES 500,000 / Yr' },
      { label: 'Class G (Investors)', value: 'KES 250,000 / Yr' },
      { label: 'Alien Card Fee', value: 'KES 5,000 / Yr' }
    ]
  },
  {
    id: 'residency',
    title: 'Residency & Settlement',
    shortDesc: 'Permanent Residency for long-term dwellers.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    documents: [
      'Proof of 7+ years continuous residency',
      'Police clearance certificate',
      'Passport history (original + copies)',
      'Contribution to Kenyan economy proof',
      'Completed PR application form'
    ],
    fees: [
      { label: 'Processing Fee', value: 'KES 50,000' },
      { label: 'Issuance (Ex-Citizens)', value: 'KES 150,000' },
      { label: 'Issuance (Lawful Residents)', value: 'KES 750,000' }
    ]
  },
  {
    id: 'citizenship',
    title: 'Citizenship & Nationality',
    shortDesc: 'Naturalization and Dual Citizenship.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    documents: [
      'Proof of Kenyan origin / Marriage cert',
      'Police clearance certificate',
      'Birth certificates',
      'Valid passport copy',
      'Two (2) passport photos'
    ],
    fees: [
      { label: 'Citizenship by Marriage', value: 'KES 30,000' },
      { label: 'Naturalization', value: 'KES 200,000' },
      { label: 'Dual Citizenship Reg.', value: 'KES 10,000' }
    ]
  },
  {
    id: 'family',
    title: 'Family & Dependants',
    shortDesc: 'Dependant Passes for spouses and children.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    documents: [
      'Principal applicant permit copy',
      'Marriage / Birth certificates',
      'Dependant passport copies',
      'Proof of financial support',
      'Police clearance (Adult dependants)'
    ],
    fees: [
      { label: 'Issuance Fee', value: 'KES 20,000 / Yr' },
      { label: 'Re-Entry Pass', value: 'KES 5,000 / Yr' }
    ]
  }
];

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceCategory | null>(null);
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [leadData, setLeadData] = useState({ name: '', details: '' });

  const toggleItem = (doc: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [doc]: !prev[doc]
    }));
  };

  const isChecklistComplete = selectedService?.documents.every(doc => checkedItems[doc]) || false;

  const closePortal = () => {
    setSelectedService(null);
    setCheckedItems({});
    setShowLeadForm(false);
    setFormSubmitted(false);
    setLeadData({ name: '', details: '' });
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const whatsappLink = selectedService 
    ? `https://wa.me/254710974670?text=Hello%20Otheniel%20Ent%2C%20My%20name%20is%20${encodeURIComponent(leadData.name)}.%20I%20have%20all%20documents%20ready%20for%20my%20${encodeURIComponent(selectedService.title)}%20application.%20Additional%20details%3A%20${encodeURIComponent(leadData.details)}.%20Please%20assist%20me%20with%20the%20filing.`
    : '#';

  const emailLink = selectedService
    ? `mailto:othenielent@gmail.com?subject=${encodeURIComponent(selectedService.title)}%20Application%20Request%20-%20${encodeURIComponent(leadData.name)}&body=Hello%20Otheniel%20Team%2C%0D%0A%0D%0AMy%20name%20is%20${encodeURIComponent(leadData.name)}.%20I%20have%20reviewed%20the%20checklist%20for%20a%20${encodeURIComponent(selectedService.title)}%20and%20I%20have%20all%20the%20required%20documents%20ready.%0D%0A%0D%0AAdditional%20Details%3A%20${encodeURIComponent(leadData.details)}%0D%0A%0D%0APlease%20guide%20me%20on%20the%20next%20steps%20for%20filing%20my%20application.%0D%0A%0D%0ARegards%2C%0D%0A${encodeURIComponent(leadData.name)}`
    : '#';

  return (
    <section className="py-24 bg-slate-50" id="services">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-blue-900 mb-4 tracking-tight">Immigration Solutions</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Fees and requirements verified against the 2024 Gazette Supplement. 
            Choose a category to audit your documents.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((service) => (
            <div 
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="group bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:border-blue-600 hover:shadow-2xl transition-all cursor-pointer transform hover:-translate-y-2"
            >
              <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">{service.title}</h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                {service.shortDesc}
              </p>
              <div className="flex items-center text-blue-600 font-bold text-sm uppercase tracking-widest">
                View Checklist
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Checklist Popup Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-6 overflow-hidden">
          <div 
            className="absolute inset-0 bg-blue-900/90 backdrop-blur-md transition-opacity duration-300"
            onClick={closePortal}
          />
          <div className="relative bg-white w-full max-w-3xl max-h-full rounded-[2.5rem] shadow-2xl flex flex-col animate-modalIn overflow-hidden">
            
            {/* Modal Header */}
            <div className="px-8 py-6 md:py-8 border-b border-slate-100 flex items-center justify-between bg-white sticky top-0 z-10">
              <div className="flex items-center">
                <div className="bg-blue-600 p-4 rounded-2xl text-white mr-5 shadow-lg shadow-blue-200">
                  {selectedService.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-black text-blue-900 leading-tight">{selectedService.title}</h2>
                  <div className="flex items-center mt-1">
                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-2 py-0.5 rounded-md">
                      Official Document Audit
                    </span>
                  </div>
                </div>
              </div>
              <button 
                onClick={closePortal}
                className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all"
                aria-label="Close Checklist"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Scrollable Content */}
            <div className="flex-grow overflow-y-auto p-8 bg-slate-50/50">
              {formSubmitted ? (
                /* STEP 3: CONTACT OPTIONS */
                <div className="animate-popIn flex flex-col items-center py-10">
                   <div className="bg-green-100 p-4 rounded-full mb-6 shadow-inner">
                      <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-black text-blue-900 mb-2">Ready to Apply!</h3>
                    <p className="text-slate-600 text-center mb-8 max-w-md font-medium">
                      Hello {leadData.name}, choose a channel to connect with our senior liaison.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full max-w-md">
                      <a 
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#25D366] text-white py-5 rounded-[1.5rem] font-black text-lg flex items-center justify-center hover:shadow-xl transition-all transform hover:-translate-y-1 active:scale-95"
                      >
                        WhatsApp Direct
                      </a>
                      <a 
                        href={emailLink}
                        className="bg-blue-900 text-white py-5 rounded-[1.5rem] font-black text-lg flex items-center justify-center hover:shadow-xl transition-all transform hover:-translate-y-1 active:scale-95"
                      >
                        Email Portal
                      </a>
                    </div>
                </div>
              ) : showLeadForm ? (
                /* STEP 2: LEAD FORM */
                <div className="animate-popIn max-w-md mx-auto py-6">
                  <h3 className="text-2xl font-black text-blue-900 mb-6 text-center">Final Steps</h3>
                  <form onSubmit={handleLeadSubmit} className="space-y-6">
                    <div>
                      <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3 px-1">Full Name</label>
                      <input 
                        required 
                        type="text" 
                        value={leadData.name}
                        onChange={(e) => setLeadData({...leadData, name: e.target.value})}
                        placeholder="Your name"
                        className="w-full p-5 bg-white border-2 border-slate-100 rounded-2xl focus:border-blue-600 outline-none transition-all font-semibold" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3 px-1">Brief Description of Case</label>
                      <textarea 
                        required 
                        rows={4}
                        value={leadData.details}
                        onChange={(e) => setLeadData({...leadData, details: e.target.value})}
                        placeholder={`Details for ${selectedService.title}...`}
                        className="w-full p-5 bg-white border-2 border-slate-100 rounded-2xl focus:border-blue-600 outline-none transition-all font-semibold resize-none" 
                      />
                    </div>
                    <button 
                      type="submit"
                      className="w-full bg-blue-600 text-white py-5 rounded-[1.5rem] font-black text-xl shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all transform active:scale-95"
                    >
                      Connect with Agent
                    </button>
                  </form>
                </div>
              ) : (
                /* STEP 1: CHECKLIST */
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-4">
                    <h3 className="text-blue-900 font-bold text-lg mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Mandatory Documents
                    </h3>
                    <div className="space-y-3">
                      {selectedService.documents.map((doc, idx) => (
                        <div 
                          key={idx}
                          onClick={() => toggleItem(doc)}
                          className={`flex items-start p-5 rounded-3xl border-2 transition-all cursor-pointer select-none group ${
                            checkedItems[doc] 
                              ? 'bg-white border-blue-600 shadow-md' 
                              : 'bg-white border-white hover:border-blue-100'
                          }`}
                        >
                          <div className={`mt-0.5 w-7 h-7 rounded-xl flex-shrink-0 flex items-center justify-center border-2 mr-5 transition-all duration-300 ${
                            checkedItems[doc] ? 'bg-blue-600 border-blue-600' : 'bg-slate-100 border-slate-200'
                          }`}>
                            {checkedItems[doc] && (
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </div>
                          <span className={`text-sm font-semibold transition-colors leading-relaxed ${
                            checkedItems[doc] ? 'text-blue-900' : 'text-slate-600'
                          }`}>
                            {doc}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    {selectedService.fees && (
                      <div className="bg-blue-900 rounded-[2rem] p-6 text-white shadow-xl shadow-blue-200">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400">Gazetted Fees</h4>
                          <span className="bg-green-500/20 text-green-400 text-[8px] font-black px-2 py-0.5 rounded-full border border-green-500/30">VERIFIED 2024</span>
                        </div>
                        <div className="space-y-3">
                          {selectedService.fees.map((fee, fIdx) => (
                            <div key={fIdx} className="flex justify-between items-center border-b border-blue-800 pb-2 last:border-0 last:pb-0">
                              <span className="text-xs font-medium text-blue-200">{fee.label}</span>
                              <span className="text-xs font-black text-white">{fee.value}</span>
                            </div>
                          ))}
                        </div>
                        <p className="mt-4 text-[9px] text-blue-300 leading-tight italic">
                          *Fees paid directly to the Directorate of Immigration via eCitizen as per Gazette Supplement No. 211.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {!showLeadForm && !formSubmitted && (
              <div className="px-8 py-8 bg-white border-t border-slate-100">
                {isChecklistComplete ? (
                  <button 
                    onClick={() => setShowLeadForm(true)}
                    className="w-full bg-blue-600 text-white py-5 rounded-[1.5rem] font-black text-xl shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all"
                  >
                    Continue to Agent Connect
                  </button>
                ) : (
                  <div className="text-center">
                    <p className="text-slate-400 font-black uppercase tracking-[0.2em] text-[10px]">
                      Complete document audit to proceed
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      <style>{`
        @keyframes modalIn {
          0% { opacity: 0; transform: scale(0.9) translateY(40px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes popIn {
          0% { transform: scale(0.9); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-modalIn {
          animation: modalIn 0.4s cubic-bezier(0.19, 1, 0.22, 1) forwards;
        }
        .animate-popIn {
          animation: popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
      `}</style>
    </section>
  );
};

export default Services;
