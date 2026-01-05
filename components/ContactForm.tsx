
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto bg-white p-12 rounded-[2.5rem] shadow-2xl border border-slate-100 text-center animate-popIn">
        <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
            <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
        </div>
        <h2 className="text-4xl font-black text-blue-900 mb-4">Request Received!</h2>
        <p className="text-slate-600 text-lg mb-10 font-medium">
          A senior Otheniel Ent consultant will call you within the next 60 minutes to collect your initial documents and begin the filing process.
        </p>
        <button 
            onClick={() => setSubmitted(false)}
            className="text-blue-600 font-black text-lg hover:underline underline-offset-8 decoration-2"
        >
            Need to open another file?
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100">
      <div className="md:w-[35%] bg-blue-900 p-12 text-white relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-4xl font-black mb-8 leading-tight italic">Initiate Your Representation</h2>
          <p className="text-blue-200 mb-10 text-lg font-medium opacity-90 leading-relaxed">
            Submit your details to begin your official application. We handle the physical submission, portal payments, and Nyayo House tracking.
          </p>
          <div className="space-y-8">
              <div className="flex items-center">
                  <div className="bg-blue-800 p-3 rounded-2xl mr-5 shadow-lg">
                      <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                  </div>
                  <div>
                      <p className="text-[10px] text-blue-400 font-black uppercase tracking-[0.2em] mb-1">Direct Priority Line</p>
                      <p className="text-xl font-black tracking-tight">+254 710 974 670</p>
                  </div>
              </div>
              <div className="flex items-center border-t border-blue-800/50 pt-8">
                  <div className="bg-blue-400/20 p-3 rounded-2xl mr-5">
                    <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-sm font-black uppercase tracking-widest text-blue-100">Verified Liaison Agents</p>
              </div>
          </div>
        </div>
        {/* Abstract background shape */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-blue-800 rounded-full opacity-20 blur-3xl"></div>
      </div>
      
      <form onSubmit={handleSubmit} className="md:w-[65%] p-12 lg:p-16 space-y-8 bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-3 px-1">Full Name</label>
                <input required type="text" className="w-full p-4 bg-slate-50 rounded-2xl border-2 border-slate-50 focus:border-blue-600 focus:bg-white outline-none transition-all font-semibold" placeholder="e.g. Johnathan Doe" />
            </div>
            <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-3 px-1">Nationality</label>
                <input required type="text" className="w-full p-4 bg-slate-50 rounded-2xl border-2 border-slate-50 focus:border-blue-600 focus:bg-white outline-none transition-all font-semibold" placeholder="e.g. United Kingdom" />
            </div>
        </div>
        <div>
            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-3 px-1">Email Address</label>
            <input required type="email" className="w-full p-4 bg-slate-50 rounded-2xl border-2 border-slate-50 focus:border-blue-600 focus:bg-white outline-none transition-all font-semibold" placeholder="john@example.com" />
        </div>
        <div>
            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-3 px-1">Application Type</label>
            <div className="relative">
              <select className="w-full p-4 bg-slate-50 rounded-2xl border-2 border-slate-50 focus:border-blue-600 focus:bg-white outline-none transition-all font-black text-blue-900 appearance-none">
                  <option>Entry (eTA / Multiple Entry)</option>
                  <option>Employment (Work Permits)</option>
                  <option>Education (Student Permits)</option>
                  <option>Permanent Settlement (PR)</option>
                  <option>Citizenship / Nationality</option>
                  <option>Family Dependant Filing</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-blue-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
        </div>
        <div>
            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-3 px-1">Current Status / Requirements</label>
            <textarea rows={4} className="w-full p-4 bg-slate-50 rounded-2xl border-2 border-slate-50 focus:border-blue-600 focus:bg-white outline-none transition-all font-semibold resize-none" placeholder="Briefly describe your situation (e.g. Currently in Nairobi on eTA, need to transition to Class G Permit)..."></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white font-black py-5 rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 text-xl transform active:scale-[0.98]">
            Authorize Otheniel Ent to File My Application
        </button>
        <div className="flex items-center justify-center space-x-2 opacity-40">
           <svg className="w-4 h-4 text-slate-500" fill="currentColor" viewBox="0 0 20 20">
             <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
           </svg>
           <p className="text-[10px] text-center text-slate-500 font-bold uppercase tracking-widest">
            By clicking, you grant Otheniel Ent formal representation rights.
           </p>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
