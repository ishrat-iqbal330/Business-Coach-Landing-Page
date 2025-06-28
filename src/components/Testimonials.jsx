import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Loren Hebert",
      role: "Sales Rep",
      title: "Overcoming fear & imposter syndrome",
      content: "He has helped me with my career and personal growth more than any mentor or counselor in the past. Michael is very down to earth, humble, understanding, and a great listener. His ability to relate and teach how to apply skills in both work and life is unmatched...",
      image: "./loren.webp",
      rating: 5
    },
    {
      id: 2,
      name: "Sara Rafiq",
      role: "Media Buyer",
      title: "Self-confidence & emotional transformation",
      content: "Michael provided unwavering support, guidance, and encouragement every step of the way. Their approach is not just professional but deeply personal and empathetic. They helped me rediscover my confidence, and today, I feel empowered and positive about my journey ahead. I wholeheartedly recommend Micheal to anyone seeking meaningful transformation in their lives.",
      image: "./sara.webp",
      rating: 5
    },
    {
      id: 3,
      name: "Jennifer Banson",
      role: "Physician Assistant",
      title: "Emotional clarity & future focus",
      content: "He counselled me on the need to change my mentality towards failure and to see it as a way of learning, unlearning and relearning. On a scale of one to ten, I will rate his services a solid nine.",
      image: "./jennifer.webp",
      rating: 5
    },
    {
      id: 4,
      name: "Franklin Hsia",
      role: "IT Program Manager, Business Engagement and Strategy",
      title: "Project Management Excellence",
      content: "Michael is an extremely capable Project Manager with a calm, steady, and stabilizing management style that instills confidence. I worked with Michael on a large SAP implementation. Michael effectively managed several legacy departments through the transition to SAP. There were many issues and challenges that were overcome through good communication and expectation setting. When emotions ran high and panic was in the air, Michael's easy going demeanor and leadership skills set an example that produced a calming effect on the rest of the team.",
      image: "./franklin.webp",
      rating: 5
    },
    {
      id: 5,
      name: "Prasad Kondhare",
      role: "Co-Founder & Director at Sidhyati Technology Solutions",
      title: "Leadership Under Pressure",
      content: "Superior under stress, Michael actually appears to be more calm and more patient throughout the eSupport and eRFA projects that we carried out under him. He is always very supportive of us. Michael has the ability to transition from a technical role to a management role where appropriate. In future I will definitely like to work with Michael again.",
      image: "./prasad.webp",
      rating: 5
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="bg-black  py-20 px-6 relative overflow-hidden">
      {/* Glowing background blobs */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#D9783C]/30 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#b85d29]/20 rounded-full blur-3xl z-0"></div>
      {/* Background Shapes */}
      

      <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#D9783C] text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
            Our Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            What Our Clients Say About Our Services
          </h2>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12 w-full max-w-7xl">
          {/* Left: Full Card Image + Trusted Clients Badge */}
          <div className="lg:w-1/3 flex justify-center relative">
            <div className="w-80 h-96 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={testimonials[currentSlide].image}
                alt={testimonials[currentSlide].name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Trusted Clients overlay at bottom of card */}
            <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 bg-white rounded-full px-6 py-3 shadow-lg flex items-center gap-4">
              <span className="text-gray-800 font-semibold text-sm">Trusted Clients</span>
              <div className="flex -space-x-2">
                {testimonials.slice(0, 4).map((t, i) => (
                  <div key={i} className="w-8 h-8 rounded-full overflow-hidden border-2 border-white">
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                ))}
                <div className="w-8 h-8 bg-[#D9783C] rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                  +
                </div>
              </div>
            </div>
          </div>

          {/* Right: Testimonial Details */}
          <div className="lg:w-2/3 max-w-2xl">
            <div className="bg-[#D9783C] rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
              <Quote className="w-12 h-12 text-white mb-6 opacity-80" />

              <div className="flex items-center gap-1 mb-6">
                {Array.from({ length: testimonials[currentSlide].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-white fill-current" />
                ))}
              </div>

              <h3 className="text-xl font-bold text-white mb-4">
                {testimonials[currentSlide].title}
              </h3>

              <p className="text-white text-lg leading-relaxed mb-8 line-clamp-4">
                {testimonials[currentSlide].content}
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                  <img
                    src={testimonials[currentSlide].image}
                    alt={testimonials[currentSlide].name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">
                    {testimonials[currentSlide].name}
                  </h4>
                  <p className="text-white text-sm">
                    {testimonials[currentSlide].role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows & Dots */}
        <div className="flex items-center justify-center gap-4 mt-24">
          <button
            onClick={prevSlide}
            className="w-12 h-12 bg-white rounded-full hover:bg-gray-200 flex items-center justify-center transition"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  idx === currentSlide ? 'bg-[#D9783C] w-8' : 'bg-white w-3 hover:bg-gray-200'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-12 h-12 bg-white rounded-full hover:bg-gray-200 flex items-center justify-center transition"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
