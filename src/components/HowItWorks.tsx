import "./HowItWorks.css";

export default function HowItWorks() {
  return (
    <section className="hiw">
      <div className="hiw__container">
        <h2 className="hiw__title">How It Works</h2>

        <div className="hiw__flowchart">
          {/* Step 1 */}
          <div className="hiw__step">
            <div className="hiw__stepNumber">1</div>
            <h3 className="hiw__stepTitle">10-Week Pilot</h3>
            <p className="hiw__stepDesc">
              2 weeks building the foundation. 8 weeks live execution. Then month-to-month.
            </p>
          </div>

          <div className="hiw__arrow" aria-hidden="true">→</div>

          {/* Step 2 */}
          <div className="hiw__step">
            <div className="hiw__stepNumber">2</div>
            <h3 className="hiw__stepTitle">Hybrid Pricing</h3>
            <p className="hiw__stepDesc">
              $4K/month retainer + per-meeting fees, capped at ~$6K. You only pay for meetings that qualify.
            </p>
          </div>

          <div className="hiw__arrow" aria-hidden="true">→</div>

          {/* Step 3 */}
          <div className="hiw__step">
            <div className="hiw__stepNumber">3</div>
            <h3 className="hiw__stepTitle">You See Everything</h3>
            <p className="hiw__stepDesc">
              Every call recorded and transcribed in 5 minutes. Live dash. Daily Slack. No black box.
            </p>
          </div>
        </div>

        <div className="hiw__cta">
          <a href="#service-page" className="hiw__ctaLink">
            <span className="hiw__ctaArrow">→</span>
            <span>See the full process on our service page</span>
          </a>
        </div>
      </div>
    </section>
  );
}
