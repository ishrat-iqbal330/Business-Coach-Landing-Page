import React from "react";
import Maxwrapper from "./Maxwrapper";

const About = () => {
  return (
    
    <section id="about" className="bg-[#fdf8f4] text-[#1a1a1a] py-20 px-6 ">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="w-full">
          <img
            src="./about.webp"
            className="w-full rounded-3xl h-[400px] object-cover shadow-lg" 
          />
        </div>

        <div className="space-y-6">
          <p className="text-sm font-semibold text-[#D9783C] tracking-wider uppercase"> 
            ABOUT US 
          </p>
          <h2 className="text-3xl sm:text-6xl font-bold text-[#1a1a1a]/90 w-[40vw]">
            Why you should choose <span className="text-[#D9783C]"> Michael Herz</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
           Michael Herz is more than a coach. he’s someone who’s lived the journey. With over 20 years of leadership experience, he now empowers early-career professionals to overcome self doubt, manage stress, and lead with confidence. His coaching isn’t about perfection. it’s about showing up with clarity, presence, and authenticity in a world that often demands otherwise.
          </p>

          <div className="pt-4">
            <a
  href="https://www.linkedin.com/in/michaelherzpmp/"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center text-[#D9783C] font-semibold hover:text-[#D9783C]/90 transition-colors duration-300 group"
>
  Learn More
  <svg 
    className="ml-2 w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M17 8l4 4m0 0l-4 4m4-4H3" 
    />
  </svg>
</a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
