
import React from 'react';

interface HeroProps {
  onServiceClick: () => void;
  onChatClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onServiceClick, onChatClick }) => {
  return (
    <div className="relative bg-white pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 z-10 text-center lg:text-left mb-12 lg:mb-0">
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full">
            Kenya's Trusted Portal Liaison
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 leading-tight mb-6">
            <span className="text-blue-600">Otheniel Ent</span>: We Handle the Bureaucracy
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0 font-medium">
            Don't let complex eFNS requirements slow you down. Our senior consultants manage your entire application, from digital filing to physical Nyayo House approvals.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
            <button 
              onClick={onServiceClick}
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 transform hover:-translate-y-1"
            >
              Start My Application
            </button>
            <button 
              onClick={onChatClick}
              className="bg-white border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
              </svg>
              Chat with Otheniel AI
            </button>
          </div>
          
          <div className="mt-10 flex items-center justify-center lg:justify-start space-x-6">
            <div className="flex flex-col items-center lg:items-start">
                <span className="text-2xl font-black text-blue-900 tracking-tight">Full Filing</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-[0.2em] font-black">Turnkey Solution</span>
            </div>
            <div className="h-10 w-px bg-slate-200"></div>
            <div className="flex flex-col items-center lg:items-start">
                <span className="text-2xl font-black text-blue-900 tracking-tight">Direct Liaison</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-[0.2em] font-black">Nyayo House Presence</span>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 relative">
          <div className="relative z-10 rounded-[2.5rem] shadow-2xl overflow-hidden border-[12px] border-white rotate-2 hover:rotate-0 transition-transform duration-500">
            <img 
              src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=800" 
              alt="Nairobi Kenya" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-700"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
