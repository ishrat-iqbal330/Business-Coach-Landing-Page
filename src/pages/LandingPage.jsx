import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Coaching from "../components/Coaching";
import Services from "../components/Services";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-20">
        <Hero />
        <About />
        <Testimonials />

        <Services />
          <CTA />
         <Coaching />
      

       

        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
