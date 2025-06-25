import React from "react";
import { Play } from "lucide-react";

const Coaching = () => {
  const videos = [
    {
      src: "./video1.webp",
      alt: "Coaching Video Preview 1",
      link: "https://www.youtube.com/watch?v=urN-FQ6urBg&t=21s",
      title: "Confidence Without Pretending",
    },
    {
      src: "./video2.webp",
      alt: "Coaching Video Preview 2",
      link: "https://www.youtube.com/watch?v=YxSNAYXozE4",
      title: "How to Handle Overwhelm at Work",
    },
  ];

  return (
    <section
      id="coaching"
      className="bg-[#f9efe9] text-[#3a2e25] py-20 px-6"
    >
      <div className="max-w-6xl mx-auto text-center space-y-16">
        {/* Header */}
        <div className="space-y-5">
          <h2 className="text-3xl sm:text-5xl font-bold text-[#D9783C]">
            Transformational Coaching That Works
          </h2>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed text-[#3a2e25]">
            Stuck in your career or overwhelmed with stress? My coaching clears
            the fog, restores your confidence, and helps you move with purpose—
            without pressure to pretend.
          </p>
        </div>

        {/* Video Previews */}
        <div className="grid md:grid-cols-2 gap-10 px-2">
          {videos.map((video, index) => (
            <a
              key={index}
              href={video.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group overflow-hidden rounded-3xl shadow-xl transform transition-transform duration-300 hover:scale-[1.015] bg-[#f0e5dd]"
            >
              <img
                src={video.src}
                alt={video.alt}
                className="w-full h-64 sm:h-80 object-cover rounded-3xl group-hover:brightness-75 transition-all duration-300"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="bg-red-600/90 hover:bg-red-700 transition-all duration-300 p-5 rounded-full shadow-xl scale-110 group-hover:scale-125">
                  <Play className="text-white w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <p className="mt-4 text-white text-sm sm:text-base font-semibold bg-[#3a2e25]/70 px-4 py-1 rounded-full">
                  {video.title}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="https://www.youtube.com/@MichaelHerzCoaching"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 bg-[#D9783C] hover:bg-[#b85d29] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-md"
        >
          Visit My Coaching Channel
        </a>
      </div>
    </section>
  );
};

export default Coaching;
