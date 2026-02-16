export default function Differentiators() {
  const points = [
    {
      title: "Phone-First, Human-Always",
      description: "We built our entire operation around phone conversations. Not because it's trendy — because it's the only channel that gives you real signal. You hear tone, hesitation, interest. You can pivot mid-sentence. You get objections immediately, not silence."
    },
    {
      title: "SaaS-Native, Founder-Led",
      description: "Your program is run by people who came up through enterprise technology sales — not offshore reps reading templates. The founder is on calls personally. Your dedicated SDR knows your market because we taught them your market."
    },
    {
      title: "Complete Transparency",
      description: "Every call recorded and transcribed within 5 minutes. Live dashboard. Daily Slack updates. You can listen to every conversation we have on your behalf. If we can't show you what we're doing, we don't charge for it."
    },
    {
      title: "Relentless Daily Execution",
      description: "We do the work that everyone else automated away — and we do it every single day. Not monthly reports. Not quarterly pivots. Daily. That's calls, reviews, follow-ups, confirmations, list adjustments, script refinements. The grind is the system."
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl mb-12">
          What's Actually Different
        </h2>
        
        <div className="space-y-10">
          {points.map((point, index) => (
            <div key={index} className="border-l-4 border-primary pl-6">
              <h3 className="text-2xl mb-3">
                {point.title}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}