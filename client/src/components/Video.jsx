import React, { useRef, useEffect } from "react";
import video from "../assets/video2.mp4";

export default function VideoSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (videoRef.current) {
            if (entry.isIntersecting) {
              videoRef.current.play();
            } else {
              videoRef.current.pause();
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) observer.observe(videoRef.current);

    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);

  return (
    <section id="video" className="relative w-full h-screen flex justify-center items-center overflow-hidden bg-black">
      {/* Background video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={video} // <-- replace with your video path
        muted
        loop
        playsInline
      ></video>

      {/* Overlay content */}
      <div className="relative z-10 text-center text-white p-8">
        <h1 className="text-5xl font-bold mb-4">Experience the Future</h1>
        <p className="text-xl opacity-80 max-w-xl mx-auto">
          Where innovation meets imagination. Scroll down and watch the story unfold.
        </p>
      </div>

      {/* Gradient overlay for cinematic effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80"></div>
    </section>
  );
}
