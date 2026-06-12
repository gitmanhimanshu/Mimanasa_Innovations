import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import {
  Hero, Trust, ValueProps, About, Products, Solutions, WhyChoose, Security, TechStack,
  Achievements, CaseStudies, Testimonials, Team, Roadmap, FAQ, Careers, Contact, CtaBanner,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <ScrollProgress />
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
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
