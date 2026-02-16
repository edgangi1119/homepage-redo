import { useEffect, useMemo, useRef, useState } from "react";
import "./ClientProof.css";

type Client = {
  id: string;
  name: string;
  website?: { label: string; href: string };
  description: string;
  highlight: string;
  details: {
    icp: string;
    strategy: string;
    value: string;
  };
};

function getCardsPerView(width: number) {
  if (width <= 768) return 1;
  if (width <= 1200) return 2;
  return 3;
}

export default function ClientProof() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const clients: Client[] = useMemo(
    () => [
      {
        id: "flychain",
        name: "FLYCHAIN",
        website: { label: "flychain.us", href: "https://flychain.us" },
        description: "Healthcare financial platform for ABA therapy",
        highlight: "$12K deal closed in 3 days",
        details: {
          icp: "ABA therapy and behavioral health practices; Practice Owners, CEOs, Directors of Operations",
          strategy:
            "Reframed from cash flow advances to healthcare-specific financial platform replacing QuickBooks — bookkeeping by location, clinician, and payer",
          value:
            "First signed deal ($12K annual) closed in 3 days. 5-6 qualified meetings per week. Expanding into substance abuse and mental health verticals.",
        },
      },
      {
        id: "legible",
        name: "LEGIBLE",
        website: { label: "legiblepolicy.com", href: "https://legiblepolicy.com" },
        description: "AI policy analysis for lobbying firms",
        highlight: "6+ bookings/week, 60% conversion",
        details: {
          icp: "State-level lobbying firms and government affairs consultancies; Lobbyists, Government Affairs Directors",
          strategy:
            "Repositioned from bill-tracking software to AI policy analyst — a workforce asset that relieves analytical workload, not another automation tool competing with Fast Democracy or Logistrac",
          value:
            "6+ bookings per week. ~60% meeting-to-opportunity conversion rate. Contributed to their biggest revenue week in company history.",
        },
      },
      {
        id: "emissary",
        name: "EMISSARY.AI",
        description: "Integrated texting platform for HR teams within UKG",
        highlight: "6-10 meetings/week, 80%+ show rate",
        details: {
          icp: "Mid-to-large enterprises on UKG platform (Pro/Ready); HR Directors, VP Talent Acquisition, HRIS Administrators",
          strategy:
            "Positioned as the integrated texting platform for HR & Talent teams directly within UKG — key differentiator is being a fully integrated UKG partner vs. competitors bolting on via Twilio",
          value:
            "6-10 meetings per week. 80%+ show rate. 100% qualification hit rate — because qualification happens on the call, not after.",
        },
      },
      {
        id: "basis",
        name: "BASIS",
        website: { label: "buildwithbasis.com", href: "https://buildwithbasis.com" },
        description: "Clean energy tax credit marketplace",
        highlight: "2 deals, 6 figures in 3 months",
        details: {
          icp: "Companies with $50M+ tax liability; Tax Directors, VP of Tax, CFOs",
          strategy:
            "Direct outreach to tax leadership at mid-to-large enterprises, qualifying on tax credit eligibility and current advisory relationships",
          value:
            "Closed 2 deals within 3 months netting 6 figures — in a market with typical 6-9 month sales cycles targeting multi-billion dollar firms for 7-figure transactions.",
        },
      },
      {
        id: "brighthive",
        name: "BRIGHTHIVE",
        website: { label: "brighthive.io", href: "https://brighthive.io" },
        description: "Agentic data ops for mid-market financial services",
        highlight: "0 meetings from email → 3 in Week 1",
        details: {
          icp: "Mid-market banks, insurance, and healthcare (1,000-5,000 employees) with cloud data warehouses; Heads of Data Engineering, VPs of Data, Director-level data roles",
          strategy:
            "Reframed from generic data platform to data engineering labor replacement — positioned as solving bottlenecks from overloaded teams and fragmented data from mergers/legacy systems, with compliance certifications as competitive moat",
          value:
            "Zero meetings from months of email + LinkedIn → 3 meetings in first week with Spright. Now 3-4 per week consistently, booking with Directors and VPs of Data at regulated mid-sized financial institutions.",
        },
      },
    ],
    [],
  );

  const [cardsPerView, setCardsPerView] = useState(() =>
    typeof window === "undefined" ? 3 : getCardsPerView(window.innerWidth),
  );
  const totalSlides = Math.ceil(clients.length / cardsPerView);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  // Resize handler: recompute cards per view and reset index like the HTML does
  useEffect(() => {
    const onResize = () => {
      const next = getCardsPerView(window.innerWidth);
      setCardsPerView(next);
      setCurrentIndex(0);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Apply transform like the HTML does
  const updateTransform = () => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const firstCard = wrapper.querySelector<HTMLElement>(".cp__clientCard");
    if (!firstCard) return;

    const gap = 32; // 2rem
    const cardWidth = firstCard.offsetWidth;
    const offset = currentIndex * (cardWidth + gap) * cardsPerView;

    wrapper.style.transform = `translateX(-${offset}px)`;
  };

  useEffect(() => {
    updateTransform();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, cardsPerView]);

  // Also update after content expands (height changes can affect layout)
  useEffect(() => {
    updateTransform();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expanded]);

  const goToSlide = (index: number) => {
    const clamped = Math.max(0, Math.min(index, totalSlides - 1));
    setCurrentIndex(clamped);
  };

  const navigate = (dir: -1 | 1) => {
    goToSlide(currentIndex + dir);
  };

  const toggleExpand = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="cp">
      <div className="cp__sectionContainer">
        <div className="cp__sectionHeader">
          <h2 className="cp__sectionTitle">Results From Real Clients</h2>

          <div className="cp__statsContainer">
            <div className="cp__statBadge">82% show rate</div>
            <div className="cp__statBadge">Week 1 bookings</div>
            <div className="cp__statBadge">13.9% of live conversations convert</div>
          </div>
        </div>

        <div className="cp__carouselContainer">
          <div className="cp__carouselWrapper" ref={wrapperRef}>
            {clients.map((c) => {
              const isExpanded = !!expanded[c.id];
              return (
                <div className="cp__clientCard" key={c.id}>
                  <div className="cp__cardHeader">
                    <h3 className="cp__clientName">{c.name}</h3>
                    {c.website ? (
                      <a
                        href={c.website.href}
                        className="cp__clientWebsite"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {c.website.label}
                      </a>
                    ) : null}
                  </div>

                  <p className="cp__clientDescription">{c.description}</p>

                  <div className="cp__highlightBox">{c.highlight}</div>

                  <div className={`cp__expandedContent ${isExpanded ? "is-active" : ""}`}>
                    <div className="cp__detailSection">
                      <div className="cp__detailBlock">
                        <div className="cp__detailLabel">ICP/BP</div>
                        <p className="cp__detailText">{c.details.icp}</p>
                      </div>

                      <div className="cp__detailBlock">
                        <div className="cp__detailLabel">Strategy</div>
                        <p className="cp__detailText">{c.details.strategy}</p>
                      </div>

                      <div className="cp__detailBlock">
                        <div className="cp__detailLabel">Value</div>
                        <p className="cp__detailText">{c.details.value}</p>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    className={`cp__expandButton ${isExpanded ? "is-active" : ""}`}
                    onClick={() => toggleExpand(c.id)}
                  >
                    <span>{isExpanded ? "Collapse Details" : "Expand Details"}</span>
                    <span className="cp__expandIcon">↓</span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <div className="cp__carouselNav">
          <button
            type="button"
            className="cp__navButton"
            onClick={() => navigate(-1)}
            disabled={currentIndex === 0}
            aria-label="Previous"
          >
            ←
          </button>

          <div className="cp__navDots" aria-label="Carousel dots">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button
                key={i}
                type="button"
                className={`cp__navDot ${i === currentIndex ? "is-active" : ""}`}
                onClick={() => goToSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            className="cp__navButton"
            onClick={() => navigate(1)}
            disabled={currentIndex >= totalSlides - 1}
            aria-label="Next"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
