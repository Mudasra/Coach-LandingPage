import SkeletonCard from "./SkeletonCard";
import TestimonialCard from "./TestimonialCard";

const TestimonialsGrid = ({ status, testimonials, cardVis }) => (
  <>
    <div className="testi-grid">
      {status === "loading"
        ? [0, 1, 2].map((i) => (
            <div
              key={i}
              className={`tc-wrap ${cardVis[i] ? "vis" : ""}`}
              style={{ transitionDelay: `${i * 0.13}s` }}
            >
              <SkeletonCard />
            </div>
          ))
        : testimonials.map((t, i) => (
            <TestimonialCard key={t.id} t={t} index={i} visible={cardVis[i]} />
          ))}
    </div>

    {status === "failed" && (
      <p className="testi-error" role="alert">
        Could not load testimonials. Please refresh the page.
      </p>
    )}
  </>
);

export default TestimonialsGrid;