import React from "react";

const CallToAction = () => {
  return (
    <section id="cta" className="relative py-20 overflow-hidden">
      {/* 1. Background image with opacity */}
      <img
        src="./CTA.webp"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />

      {/* 2. Color overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* 3. Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Want to Feel More Confident at Work?
        </h2>
        <p className="text-gray-200 text-lg mb-8">
          I’ve helped dozens of early career professionals stop second guessing
          themselves and start making real progress. Let’s have a free 30-minute
          chat to see how I can help you next.
        </p>
        <a
          href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ32nw0wevXz9FIMLnlWKCs_CuY52pSRgwV_QCIbsMtFa8XWK-VELm70OIy5Z-t5usTZc6Ji0JfL?gv=true"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-[#D9783C] to-[#b85d29] text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition"
        >
          Book Your Free Chat
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
