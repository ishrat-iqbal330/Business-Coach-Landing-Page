import React from "react";
import { motion } from "framer-motion";
import Maxwrapper from "./Maxwrapper";

const Hero = () => {
  return (
    <Maxwrapper>
      <div className="flex flex-col-reverse md:flex-row gap-9 items-center justify-center min-h-screen px-6 py-12">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col gap-6 text-center md:text-left max-w-2xl mx-auto"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-snug md:leading-tight">
            Feeling <span className="text-[#D9783C]">Stuck</span> in Your Career
            or Life?
            <br className="hidden sm:block" /> Let’s Fix That{" "}
            <span className="text-[#D9783C]">Together.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#ddd] max-w-xl mx-auto md:mx-0">
            Coaching that helps you turn stress, doubt, and overthinking into
            confidence, clarity, and momentum.
          </p>

          <div className="flex justify-center md:justify-start">
            <a
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ32nw0wevXz9FIMLnlWKCs_CuY52pSRgwV_QCIbsMtFa8XWK-VELm70OIy5Z-t5usTZc6Ji0JfL?gv=true"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D9783C] hover:bg-[#D9783C]/90 text-white py-3 px-6 rounded-full font-semibold shadow-md transition-all duration-300 hover:scale-105"
            >
              Book a Call
            </a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ position: "relative", opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center w-full"
        >
          <img
            src="./hero.webp"
            alt="Hero"
            className="w-[90vw] object-contain"
          />
        </motion.div>
      </div>
    </Maxwrapper>
  );
};

export default Hero;
