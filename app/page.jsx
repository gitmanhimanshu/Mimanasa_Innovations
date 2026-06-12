import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Hero, Trust, ValueProps, About, Products, Solutions, WhyChoose, Security, TechStack,
  Achievements, CaseStudies, Testimonials, Team, Roadmap, FAQ, Careers, Contact,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <ValueProps />
        <About />
        <Products />
        <Solutions />
        <WhyChoose />
        <Security />
        <TechStack />
        <Achievements />
        <CaseStudies />
        <Testimonials />
        <Team />
        <Roadmap />
        <FAQ />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
