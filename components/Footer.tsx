
import React, { useState } from 'react';

interface LegalItem {
  id: string;
  title: string;
  statute: string;
  provisions: string[];
  reference: string;
  url: string;
}

const legalDetails: LegalItem[] = [
  {
    id: 'citizenship',
    title: "Citizenship Rights",
    statute: "Constitution of Kenya, Chapter 3",
    provisions: [
      "Article 14: Citizenship by birth is a fundamental right that cannot be lost.",
      "Article 15: Citizenship by registration for spouses (after 7 years) and long-term residents.",
      "Article 16: Dual Citizenship is fully recognized; a Kenyan citizen by birth does not lose citizenship by acquiring that of another country."
    ],
    reference: "Laws of Kenya, Constitution 2010",
    url: "https://klr.kenyalaw.org/kl/index.php?id=398"
  },
  {
    id: 'permits',
    title: "Immigration Controls",
    statute: "Kenya Citizenship & Immigration Act 2011",
    provisions: [
      "Section 36: Outlines the issuance of work permits to foreign nationals in classes A through M.",
      "Section 37: Criteria for Permanent Residency, requiring 7 years of continuous lawful residence.",
      "Section 40: Powers of the Director General to issue, cancel, or vary permits based on national interest."
    ],
    reference: "Act No. 12 of 2011",
    url: "https://www.immigration.go.ke/wp-content/uploads/2018/10/Kenya-Citizenship-and-Immigration-Act-2011.pdf"
  },
  {
    id: 'fair-admin',
    title: "Administrative Justice",
    statute: "Fair Administrative Action Act 2015",
    provisions: [
      "Section 4: Every person has the right to administrative action which is expeditious, efficient, lawful, reasonable and procedurally fair.",
      "Section 6: Right to be given written reasons for any administrative decision that affects one's rights."
    ],
    reference: "Act No. 4 of 2015",
    url: "https://klr.kenyalaw.org/kl/fileadmin/pdfdownloads/Acts/FairAdministrativeActionAct_No4of2015.pdf"
  },
  {
    id: 'data',
    title: "Privacy & Data",
    statute: "Data Protection Act 2019",
    provisions: [
      "Section 25: Principles of data protection including lawfulness, fairness, and transparency.",
      "Section 28: Duty to notify the data subject when collecting personal information for immigration filing."
    ],
    reference: "Act No. 24 of 2019",
    url: "https://www.odpc.go.ke/data-protection-act-2019/"
  }
];

const Footer: React.FC = () => {
  const [selectedLegal, setSelectedLegal] = useState<LegalItem | null>(null);

  return (
    <footer className="bg-white border-t border-slate-100 py-16 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-6">
                <div className="bg-blue-600 p-1 rounded-md mr-2 shadow-sm">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                </div>
                <span className="text-lg font-bold text-blue-900 tracking-tight italic">Otheniel<span className="text-blue-600">Ent</span></span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Nairobi's premier immigration portal liaison. Expertly navigating the Kenya Citizenship and Immigration Act to deliver turnkey residency and work authorization solutions.
            </p>
          </div>
          
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-[10px] font-black text-blue-900 uppercase tracking-[0.2em] mb-6">Statutory Basis</h4>
            <div className="flex flex-col space-y-3">
              {legalDetails.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedLegal(item)}
                  className="text-left group flex items-center justify-between text-xs font-bold text-slate-600 hover:text-blue-600 transition-colors"
                >
                  <div className="flex flex-col">
                    <span>{item.title}</span>
                    <span className="text-[9px] font-medium text-slate-400">{item.statute}</span>
                  </div>
                  <svg className="w-3 h-3 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-black text-blue-900 uppercase tracking-[0.2em] mb-6">Digital Portals</h4>
            <ul className="space-y-4 text-xs text-slate-500 font-bold">
              <li><a href="https://www.etakenya.go.ke" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 flex items-center bg-slate-50 p-2 rounded-lg border border-slate-100">Kenya eTA Portal <svg className="w-3 h-3 ml-auto opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a></li>
              <li><a href="https://fns.immigration.go.ke" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 flex items-center bg-slate-50 p-2 rounded-lg border border-slate-100">eFNS Portal <svg className="w-3 h-3 ml-auto opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a></li>
              <li><a href="https://accounts.ecitizen.go.ke" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 flex items-center bg-slate-50 p-2 rounded-lg border border-slate-100">eCitizen Gateway <svg className="w-3 h-3 ml-auto opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black text-blue-900 uppercase tracking-[0.2em] mb-6">Contact Details</h4>
            <ul className="space-y-4 text-sm text-slate-500 font-medium">
              <li className="font-black text-blue-900 italic">Otheniel Ent Headquarters</li>
              <li className="text-xs">Valley View Office Park, Tower B</li>
              <li className="text-xs">Office B1, Nairobi, Kenya</li>
              <li className="text-blue-600 font-black text-lg">+254 710 974 670</li>
              <li className="text-[10px] uppercase font-bold tracking-tighter">othenielent@gmail.com</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center text-[9px] text-slate-400 font-black tracking-[0.2em] uppercase">
          <p>© 2024 Otheniel Ent. All Rights Reserved.</p>
        </div>
      </div>

      {/* Legal Pop-up Modal */}
      {selectedLegal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-blue-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedLegal(null)}
          />
          <div className="relative bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden animate-popIn">
            <div className="p-8 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-black text-blue-900">{selectedLegal.title}</h3>
                <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">{selectedLegal.statute}</p>
              </div>
              <button 
                onClick={() => setSelectedLegal(null)}
                className="p-2 text-slate-300 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-8 bg-slate-50">
              <ul className="space-y-4">
                {selectedLegal.provisions.map((provision, idx) => (
                  <li key={idx} className="text-xs leading-relaxed text-slate-700 flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-3 mt-1.5 flex-shrink-0" />
                    {provision}
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-tighter">{selectedLegal.reference}</span>
                <a 
                  href={selectedLegal.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white border border-blue-200 px-4 py-2 rounded-xl text-blue-600 font-black text-[10px] uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-sm flex items-center"
                >
                  Verify on Kenya Law
                  <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes popIn {
          0% { transform: scale(0.95); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-popIn {
          animation: popIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
