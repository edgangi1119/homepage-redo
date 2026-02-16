export default function CTA() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl mb-6">
          Let's Talk About Your Pipeline
        </h2>
        
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          This is a fit assessment, not a demo. We'll walk through your ICP, your current outbound motion, and whether disciplined sales development makes sense for your stage and market.
        </p>
        
        <p className="text-lg text-gray-400 mb-10">
          10-week pilot. Month-to-month after that. Low commitment, high transparency.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="mailto:hello@spright.com" 
            className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Schedule a Call
          </a>
          <a 
            href="mailto:hello@spright.com" 
            className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
