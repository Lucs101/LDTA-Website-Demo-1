import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { BackToTop } from "./components/BackToTop";
import { Hero } from "./sections/Hero";
import { Programs } from "./sections/Programs";
import { FeaturedCamp } from "./sections/FeaturedCamp";
import { About } from "./sections/About";
import { Enrollment } from "./sections/Enrollment";
import { WhyLDTA } from "./sections/WhyLDTA";
import { Gallery } from "./sections/Gallery";
import { ParentInfo } from "./sections/ParentInfo";
import { Contact } from "./sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-ldta-cream">
      <Header />
      <main>
        <Hero />
        <Programs />
        <FeaturedCamp />
        <About />
        <Enrollment />
        <WhyLDTA />
        <Gallery />
        <ParentInfo />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
