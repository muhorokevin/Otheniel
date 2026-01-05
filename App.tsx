
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AIChat from './components/AIChat';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col scroll-smooth">
      <Navbar onNavClick={scrollToSection} />
      
      <main className="flex-grow">
        <section id="home">
          <Hero 
            onServiceClick={() => scrollToSection('services')} 
            onChatClick={() => scrollToSection('chat')} 
          />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="chat" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-extrabold text-blue-900 mb-4 tracking-tight">Interactive AI Strategist</h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
                Not sure where to start? Chat with our Jambo Assistant to understand requirements and fees instantly.
              </p>
            </div>
            <AIChat />
          </div>
        </section>

        <div className="bg-blue-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-black mb-6 tracking-tight italic">Ready to make Kenya your home?</h2>
            <p className="text-blue-100 mb-10 text-xl max-w-3xl mx-auto font-light leading-relaxed">
              Our consultants handle the red tape, the eFNS queues, and the document uploads so you don't have to. 
              From initial eTA to final Permanent Residency, Otheniel Ent is your trusted partner.
            </p>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-white text-blue-900 px-10 py-4 rounded-full font-black text-lg hover:bg-blue-50 transition-all shadow-2xl transform hover:scale-105 active:scale-95"
            >
              Book My Free Strategy Session
            </button>
          </div>
        </div>

        <section id="contact" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-blue-900 mb-4 tracking-tight">Initiate Your File</h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
                Ready to delegate? Submit your details below and a senior Otheniel Ent liaison will reach out to start your representation.
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
