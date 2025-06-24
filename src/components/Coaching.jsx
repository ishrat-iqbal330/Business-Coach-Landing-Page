import React from "react";
import { Play } from "lucide-react";

const Coaching = () => {
  const videos = [
    {
      src: "./video1.webp",
      alt: "Coaching Video Preview 1",
      link: "https://www.youtube.com/watch?v=urN-FQ6urBg&t=21s",
    },
    {
      src: "./video2.webp",
      alt: "Coaching Video Preview 2",
      link: "https://www.youtube.com/watch?v=YxSNAYXozE4",
    },
  ];

  return (
    <section id="coaching" className="bg-[#e9e8e8] text-[#1a1a1a] py-16 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#D9783C]">
          Transformational Coaching That Works
        </h2>

        <p className="text-lg max-w-3xl mx-auto">
          If you're feeling stuck in your career or life, overwhelmed by stress,
          or unsure of your next steps, this coaching is for you. Michael helps
          you gain clarity, rebuild confidence, and move forward with purpose.
        </p>

        <div className="grid md:grid-cols-2 gap-6 justify-center">
          {videos.map((video, index) => (
            <a
              key={index}
              href={video.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group overflow-hidden rounded-lg shadow-md block"
            >
              <img
                src={video.src}
                alt={video.alt}
                className="w-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-red-600/90 hover:bg-red-700 transition-all duration-300 p-4 rounded-full shadow-lg">
                  <Play className="text-white w-6 h-6" aria-hidden="true" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <a
          href="https://www.youtube.com/@MichaelHerzCoaching"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 bg-[#D9783C] hover:bg-[#b85d29] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-md"
        >
          Visit My Coaching Channel
        </a>
      </div>
    </section>
  );
};

export default Coaching;
