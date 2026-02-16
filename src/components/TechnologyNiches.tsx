import { useState } from 'react';

export default function TechnologyNiches() {
  const [isExpanded, setIsExpanded] = useState(false);

  const niches = [
    // Climate & Energy
    "Climate fintech",
    "Clean energy tax credits",
    "Renewable energy analytics",
    
    // Industrial
    "Industrial IoT analytics",
    "Predictive maintenance",
    "Logistics software",
    "Warehouse operations",
    
    // GovTech & Legal
    "GovTech policy intelligence",
    "Legislative tracking",
    "Legal ops automation",
    
    // Data & AI Infrastructure
    "Agentic DataOps",
    "Enterprise data orchestration",
    "Semantic layer tooling",
    "AI-native analytics",
    
    // AI GTM
    "AI GTM enablement",
    "AI Sales Engineer copilots",
    "RFP automation",
    "Security questionnaire automation",
    
    // Voice & Commerce AI
    "Voice AI agents",
    "Conversational commerce AI",
    
    // Revenue & Billing
    "Subscription billing",
    "Revenue operations",
    "CPQ platforms",
    "Pricing infrastructure",
    
    // Commerce & Retail
    "B2B ecommerce portals",
    "Multi-channel ordering",
    "Retail POS systems",
    "Restaurant tech",
    "Self-pour beverage IoT",
    
    // Real Estate & Hospitality
    "CRE analytics platforms",
    "CRE ESG & sustainability",
    "Hospitality RMS",
    "CPG insights platforms",
    
    // HR & Community
    "Text-to-hire automation",
    "SMS engagement platforms",
    "Community platforms",
    
    // Engineering
    "PLM/PDM systems",
    "BOM management",
    "Engineering supply chain",
    
    // BioTech & Life Sciences
    "Computational chemistry",
    "Retrosynthesis software",
    "AI drug discovery",
    "Bioinformatics platforms",
    "Molecular data platforms",
    "Biotech supply chain",
    "Lab informatics (LIMS)",
    "Clinical workflow automation",
    
    // Web3 & Crypto
    "Web3 infrastructure",
    "Blockchain developer tools",
    "Crypto payments",
    "Crypto fintech rails",
    "Tokenized assets",
    "Blockchain analytics",
    "Smart contract automation",
    "Agentic finance (AI + Crypto)",
    "Decentralized identity",
    "Trust layers"
  ];

  const getTagClassName = (index: number) => {
    const baseClass = "inline-block px-4 py-2 rounded-full text-sm transition-all hover:transform hover:-translate-y-0.5 hover:shadow-lg";
    
    if ((index % 6) === 0) {
      return `${baseClass} bg-green-400 text-gray-900`;
    } else if ((index % 6) === 2) {
      return `${baseClass} bg-lime-300 text-gray-900`;
    } else if ((index % 6) === 4) {
      return `${baseClass} bg-green-200 text-gray-900`;
    } else {
      return `${baseClass} bg-gradient-to-br from-teal-700 to-gray-900 text-white`;
    }
  };

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-6">
            Where We Focus
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Phone-first, account-based sales development works best when your buyers filter aggressively and your product can't be sold through templated outreach. We're built for early-stage B2B tech companies where the sale requires real conversations, not automation.
          </p>
        </div>

        {/* Qualification Criteria */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-green-400">
            <div className="inline-flex items-center justify-center w-10 h-10 bg-lime-300 text-gray-900 rounded-lg mb-4">
              <span className="text-xl">1</span>
            </div>
            <h3 className="text-lg mb-2 text-teal-700">
              Small, focused team
            </h3>
            <p className="text-gray-600">
              Fewer than 50 employees
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-green-400">
            <div className="inline-flex items-center justify-center w-10 h-10 bg-lime-300 text-gray-900 rounded-lg mb-4">
              <span className="text-xl">2</span>
            </div>
            <h3 className="text-lg mb-2 text-teal-700">
              Market-disrupting tech
            </h3>
            <p className="text-gray-600">
              Building something new or different enough that prospects need context
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-green-400">
            <div className="inline-flex items-center justify-center w-10 h-10 bg-lime-300 text-gray-900 rounded-lg mb-4">
              <span className="text-xl">3</span>
            </div>
            <h3 className="text-lg mb-2 text-teal-700">
              Buyers are senior, technical, or need education
            </h3>
            <p className="text-gray-600">
              Your targets filter cold outreach heavily, require consultative conversations, or don't yet know they have the problem you solve
            </p>
          </div>
        </div>

        {/* Technology Niches Tags */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl mb-2">
              Technology Niches We Know
            </h3>
            <p className="text-gray-600">
              Market verticals where we've built expertise
            </p>
          </div>

          <div className="relative">
            <div 
              className={`flex flex-wrap gap-3 overflow-hidden transition-all duration-500 ${
                isExpanded ? 'max-h-[2000px]' : 'max-h-[180px]'
              }`}
            >
              {niches.map((niche, index) => (
                <span
                  key={index}
                  className={getTagClassName(index)}
                >
                  {niche}
                </span>
              ))}
            </div>
            
            {!isExpanded && (
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-white pointer-events-none"></div>
            )}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2 bg-green-400 text-gray-900 px-8 py-3 rounded-full hover:bg-lime-300 transition-all hover:transform hover:-translate-y-0.5 hover:shadow-lg"
            >
              <span>{isExpanded ? 'Show Less' : 'Show All Niches'}</span>
              <span className={`text-xl transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
                ↓
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}