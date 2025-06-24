import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-white text-[#1a1a1a] py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        

        {/* Right - Content */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#D9783C]">
            Meet Michael Herz
          </h2>
          <p className="text-base sm:text-lg text-gray-700">
            Michael is a Career & Business Coach with 20+ years in leadership. He helps early career professionals manage stress, build confidence, and show up with clarity and professionalism—without faking it.
          </p>
          <p className="text-base sm:text-lg text-gray-700">
            From rising to Director level without a degree to managing global teams, Michael's journey is proof that success doesn't require having it all figured out—it requires support, strategy, and self-belief.
          </p>
          <p className="text-base sm:text-lg text-gray-700">
            Now he coaches individuals like you to navigate new roles with confidence, connect meaningfully, and act with intention.
          </p>

          <a
            href="#book"
            className="inline-block mt-4 bg-[#D9783C] hover:bg-[#b85d29] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-md"
          >
            Work With Michael
          </a>
        </div>
        {/* Left - Image or Shape */}
        <div className="w-full">
          <img
            src="./about.webp"
            alt="Michael Herz Coaching"
            className="w-full h-auto "
          />
        </div>
      </div>
    </section>
  );
};

export default About;
