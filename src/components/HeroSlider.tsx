import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

interface HeroSliderProps {
  slides: Slide[];
  autoPlayInterval?: number;
}

const HeroSlider = ({ slides, autoPlayInterval = 5000 }: HeroSliderProps) => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 700);
    },
    [isTransitioning]
  );

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, slides.length, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, slides.length, goTo]);

  useEffect(() => {
    const timer = setInterval(next, autoPlayInterval);
    return () => clearInterval(timer);
  }, [next, autoPlayInterval]);

  return (
    <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: "var(--hero-overlay)" }}
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex items-center h-full">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <span className="govt-badge mb-6 inline-block animate-fade-slow">
              🇮🇳 Government of India Initiative
            </span>
            <h1
              key={`title-${current}`}
              className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4 animate-slide-up font-display leading-tight"
            >
              {slides[current].title}
            </h1>
            <p
              key={`sub-${current}`}
              className="text-xl md:text-2xl text-primary-foreground/90 mb-3 animate-slide-up font-display"
              style={{ animationDelay: "0.15s" }}
            >
              {slides[current].subtitle}
            </p>
            <p
              key={`desc-${current}`}
              className="text-base md:text-lg text-primary-foreground/80 max-w-xl animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              {slides[current].description}
            </p>
            <div
              className="mt-8 flex gap-4 animate-slide-up"
              style={{ animationDelay: "0.45s" }}
            >
              <a
                href="#about"
                className="px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                style={{ background: "var(--gradient-accent)" }}
              >
                <span className="text-primary-foreground">Learn More</span>
              </a>
              <a
                href="#subsidy"
                className="px-8 py-3 rounded-lg font-semibold border-2 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300"
              >
                Apply for Subsidy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-foreground/10 backdrop-blur-sm text-primary-foreground hover:bg-foreground/20 transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-foreground/10 backdrop-blur-sm text-primary-foreground hover:bg-foreground/20 transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`slider-dot ${i === current ? "slider-dot-active" : "slider-dot-inactive"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
