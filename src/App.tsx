import Hero from './components/Hero';
import BrokenStatusQuo from './components/BrokenStatusQuo';
import Differentiators from './components/Differentiators';
import Outcomes from './components/Outcomes';
import TechnologyNiches from './components/TechnologyNiches';
import ClientProof from './components/ClientProof';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl tracking-tight">
            SPRIGHT
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#approach" className="hover:text-gray-600 transition-colors">Approach</a>
            <a href="#results" className="hover:text-gray-600 transition-colors">Results</a>
            <a href="#contact" className="hover:text-gray-600 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Hero />
        <BrokenStatusQuo />
        <div id="approach">
          <Differentiators />
        </div>
        <Outcomes />
        <TechnologyNiches />
        <div id="results">
          <ClientProof />
        </div>
        <HowItWorks />
        <CTA />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 px-6 py-8">
        <div className="max-w-7xl mx-auto text-center text-gray-600">
          <p>© 2026 Spright. Sales development done right.</p>
        </div>
      </footer>
    </div>
  );
}
