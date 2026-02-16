export default function Hero() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl mb-8 leading-tight">
          This Is Sales Development. Done Right.
        </h1>
        
        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>
            <strong>Sales development isn't dead. It's just been done wrong.</strong>
          </p>
          
          <p>
            The industry moved to automation, offshore teams, and email blasts. They called it "sales development" but took out everything that made it work — the phone calls, the qualification, the daily discipline.
          </p>
          
          <p>We brought it back.</p>
          
          <p>
            Spright runs real sales development for early-stage B2B SaaS companies. Account-based targeting. Phone-first execution. Rigorous qualification on every call. Complete transparency into every conversation.
          </p>
          
          <p>
            <strong>The same framework enterprise teams run — built for startup speed.</strong>
          </p>
          
          <p>
            No magic buttons. No automation shortcuts. No black boxes.
          </p>
          
          <p>
            Just disciplined process, executed every single day, by people who know how to sell.
          </p>
        </div>
        
        <div className="mt-12">
          <a 
            href="#contact" 
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
          >
            Let's talk about your pipeline →
          </a>
        </div>
      </div>
    </section>
  );
}
