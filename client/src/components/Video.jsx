// Video.jsx
// dining-gallery: reliable marquee (Tailwind layout + inline CSS animation), pause on hover/focus, motion-reduce friendly
import React from "react";
import img1 from "../assets/restraurant_img.jpeg";
import img2 from "../assets/restraurant_img2.jpeg";
import img3 from "../assets/restraurant_img3.jpeg";
import img4 from "../assets/restraurant_img4.jpeg";
import img5 from "../assets/hungry_monk_logo-removebg-preview.png";

export default function VideoSection() {
  const images = [
    { src: img1, alt: "Dining ambience with spices" },
    { src: img2, alt: "Fresh mushrooms and herbs" },
    { src: img3, alt: "Artisan bread close-up" },
    { src: img4, alt: "Hungry Monk branding" },
    { src: img5, alt: "Hungry Monk emblem" },
  ];

  // Duplicate to create seamless marquee
  const duplicated = [...images, ...images];

  return (
    <section
      id="dining-gallery"
      className="relative w-full bg-black py-16 px-4 sm:px-8"
      aria-label="Auto-scrolling dining gallery — hover or focus to pause"
    >
      <div className="max-w-6xl mx-auto space-y-6 text-white">
        <div className="text-center space-y-2">
          <h2 className="text-3xl sm:text-4xl font-bold">Our Dining Gallery</h2>
          <p className="text-sm sm:text-base text-white/80">
            Hover or focus to pause. Motion settings are respected automatically.
          </p>
        </div>

        <div
          className="group relative overflow-hidden rounded-2xl bg-neutral-900 border border-white/10 shadow-lg"
          tabIndex={0}
        >
          {/* overlay gradient */}
          <div
            className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black via-transparent to-black opacity-60"
            aria-hidden="true"
          />

          {/* Inline style defines the marquee animation and accessibility behaviors.
              Using inline CSS here avoids reliance on tailwind.config.js and guarantees the animation exists.
          */}
          <style>{`
            /* unique class names to avoid collisions */
            .hm-marquee-wrapper { outline: none; }
            .hm-marquee-track {
              display: flex;
              gap: 1rem;
              align-items: center;
              /* Track must be at least 200% wide because content is duplicated */
              min-width: 200%;
              transform: translateX(0);
              /* animation name and timing */
              animation: hm-marquee 18s linear infinite;
              will-change: transform;
            }
            .hm-marquee-item { flex: 0 0 auto; }

            /* seamless marquee: move from 0 -> -50% (duplicate content allows this) */
            @keyframes hm-marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }

            /* pause on hover/focus-within of wrapper (keyboard accessible) */
            .hm-marquee-wrapper:hover .hm-marquee-track,
            .hm-marquee-wrapper:focus-within .hm-marquee-track {
              animation-play-state: paused;
            }

            /* respect user reduced motion preference */
            @media (prefers-reduced-motion: reduce) {
              .hm-marquee-track {
                animation: none !important;
                transform: none !important;
              }
            }
          `}</style>

          {/* marquee wrapper is focusable to allow keyboard users to pause */}
          <div className="hm-marquee-wrapper" tabIndex={0} aria-hidden="false">
            <div className="hm-marquee-track" role="list" aria-label="Auto-scrolling images of the restaurant">
              {duplicated.map((item, idx) => (
                <figure
                  key={`${item.alt}-${idx}`}
                  role="listitem"
                  className="hm-marquee-item relative w-60 h-60 sm:w-72 sm:h-50 lg:w-80 lg:h-60 shrink-0 overflow-hidden rounded-xl bg-black/40 border border-white/10"
                  aria-hidden={idx >= images.length ? "true" : "false"}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
