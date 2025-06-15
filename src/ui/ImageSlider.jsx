import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Spinner from "./Spinner";

const SLIDER_API_URL = "https://quick-deals.vercel.app/api/slider-images";

const LUXURY_SLOGANS = [
  "Quick Deals. Timeless Luxury",
  "Where Prestige Meets Property",
  "Your Gateway to Elite Living",
  "Invest in Excellence. Live in Luxury",
  "Beyond Real Estate. A Lifestyle"
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const {
    data,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["slider-images"],
    queryFn: async () => {
      const res = await fetch(SLIDER_API_URL);
      if (!res.ok) throw new Error("Failed to fetch slider images");
      const data = await res.json();
      return data.results || [];
    },
    staleTime: 5 * 60 * 1000, // 5 minutes cache
    cacheTime: 30 * 60 * 1000, // Keep in cache for 30 minutes
  });

  const images = data || [];

  const handleSlideChange = (newIndex) => {
    setIsTransitioning(true);
    setCurrentIndex(newIndex);
    // Reset transition state after animation completes
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // Auto-advance slides
  useEffect(() => {
    if (images.length === 0) return;
    
    const timer = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      handleSlideChange(nextIndex);
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex, images.length]);

  const handlePrev = () => {
    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    handleSlideChange(prevIndex);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    handleSlideChange(nextIndex);
  };

  if (isLoading) return <Spinner />;
  if (isError || !images.length) {
    return (
      <div className="mt-20 mx-auto px-8 relative z-10">
        <div className="relative w-full h-[80vh] bg-gray-100 rounded-2xl overflow-hidden flex items-center justify-center">
          <img
            src="/homeImage.png"
            alt="Real estate home"
            className="w-full h-full object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50 flex items-center justify-center">
            <h1 className="text-white text-4xl md:text-5xl font-light tracking-wider px-4 text-center leading-relaxed">
              {LUXURY_SLOGANS[0]}
            </h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-20 relative z-10">
      <div className="mx-auto px-8">
        <div className="relative w-full h-[80vh] bg-gray-100 rounded-2xl overflow-hidden flex items-center justify-center">
          {/* Main Image Container */}
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image.image_url?.replace(/\?$/, "")}
                alt={`Slide ${index + 1}`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}

          {/* Slogan Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50 flex items-center justify-center">
            {LUXURY_SLOGANS.map((slogan, index) => (
              <h1
                key={index}
                className={`absolute text-white text-4xl md:text-5xl font-light tracking-wider px-4 text-center leading-relaxed transition-all duration-500 ${
                  index === currentIndex % LUXURY_SLOGANS.length
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                {slogan}
              </h1>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            disabled={isTransitioning}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition-colors disabled:opacity-50"
            aria-label="Previous slide"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            disabled={isTransitioning}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition-colors disabled:opacity-50"
            aria-label="Next slide"
          >
            →
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSlideChange(index)}
                disabled={isTransitioning}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-white" : "bg-white/50"
                } disabled:opacity-50`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 