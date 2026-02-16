import { useEffect, useMemo, useRef, useState } from "react";
import "./BrokenStatusQuo.css";

type Card = {
  number: string;
  tone: "light" | "dark";
  title: string;
  description: string;
};

export default function BrokenStatusQuo() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const cards: Card[] = useMemo(
    () => [
      {
        number: "01",
        tone: "light",
        title: "Email-Only Approaches Skip the Conversation.",
        description:
          "Email at scale can't have real conversations. No tone, no live objection handling, no pivoting. You're broadcasting, not selling. Real sales development requires dialogue — and dialogue requires voice.",
      },
      {
        number: "02",
        tone: "dark",
        title: "Generic Execution Lacks Targeting Discipline.",
        description:
          "Volume metrics without account-level research or ICP rigor. When vendors chase activity over qualification, you get meetings that don't convert. Sales development requires thoughtful targeting and persistent follow-through.",
      },
      {
        number: "03",
        tone: "light",
        title: "No Transparency Means No Learning.",
        description:
          "Without call recordings and transcripts, you can't see which personas respond or what messaging works. You're making ICP decisions blind. Good process creates signal. Signal drives better targeting.",
      },
      {
        number: "04",
        tone: "dark",
        title: "Fundamentals Still Matter.",
        description:
          "Multi-touch persistence. Daily call reviews. Rigorous qualification. These separate pipeline-generating programs from activity theater. Without disciplined process and complete transparency, you're hoping for traction instead of building it.",
      },
    ],
    [],
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onScroll = () => {
      // In your HTML, each card is min-height: 100vh and the container is ~100vh,
      // so the container's height is a good "page" size to compute index.
      const page = el.clientHeight || 1;
      const idx = Math.round(el.scrollTop / page);
      setActiveIndex(Math.max(0, Math.min(cards.length - 1, idx)));
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initialize

    return () => el.removeEventListener("scroll", onScroll);
  }, [cards.length]);

  const scrollToIndex = (index: number) => {
    const el = containerRef.current;
    if (!el) return;

    const page = el.clientHeight || 1;
    el.scrollTo({ top: index * page, behavior: "smooth" });
  };

  return (
    <section className="ofs">
      <div className="ofs__container">
        <div className="ofs__header">
          {/* In your HTML this was h1; here h2 is usually more appropriate inside a page section */}
          <h2 className="ofs__title">Where Outbound Fails for B2B Tech</h2>
        </div>

        <div className="ofs__indicator" aria-label="Scroll indicator">
          {cards.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`ofs__dot ${i === activeIndex ? "is-active" : ""}`}
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="ofs__slides" ref={containerRef}>
          {cards.map((card) => (
            <div
              key={card.number}
              className={`ofs__card ${card.tone === "dark" ? "is-dark" : "is-light"}`}
            >
              <div className="ofs__number">{card.number}</div>

              <div className="ofs__content">
                <div className="ofs__accent" />
                <h3 className="ofs__cardTitle">{card.title}</h3>
                <p className="ofs__cardDesc">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
