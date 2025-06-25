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
    <section id="coaching" className="bg-[#f9efe9] text-[#3a2e25] py-24 px-4">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#D9783C]">
            Transformational Coaching That Works
          </h2>
          <div className="h-1 w-20 bg-[#D9783C] mx-auto rounded-full" />
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Feeling stuck, overwhelmed, or lacking confidence at work? <br />
            My coaching cuts through the noise, helping you show up authentically, think clearly,
            and act with purpose.
          </p>
        </div>

        {/* Video Cards */}
        <div className="grid md:grid-cols-2 gap-12">
          {videos.map((video, i) => (
            <a
              key={i}
              href={video.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-[#f0e5dd] rounded-3xl overflow-hidden shadow-lg transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Thumbnail */}
              <div className="relative">
                <img
                  src={video.src}
                  alt={video.alt}
                  className="w-full h-64 sm:h-80 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-red-600/90 p-4 rounded-full shadow-lg transition-all duration-300 group-hover:scale-110">
                    <Play className="text-white w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                </div>
              </div>

              {/* Title Bar */}
              <div className="bg-white px-6 py-4">
                <h3 className="text-lg font-semibold text-[#3a2e25]">
                  {video.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="https://www.youtube.com/@MichaelHerzCoaching"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 bg-[#D9783C] hover:bg-[#b85d29] text-white font-semibold px-10 py-4 rounded-full transition transform duration-300 hover:scale-105 shadow-lg"
        >
          Visit My Coaching Channel
        </a>
      </div>
    </section>
  );
};

export default Coaching;
