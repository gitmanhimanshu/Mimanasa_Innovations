import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Hero, Trust, About, Products, Solutions, WhyChoose, TechStack,
  Achievements, CaseStudies, Testimonials, Roadmap, Careers, Contact,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <About />
        <Products />
        <Solutions />
        <WhyChoose />
        <TechStack />
        <Achievements />
        <CaseStudies />
        <Testimonials />
        <Roadmap />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
