import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustBar from "../components/TrustBar";
import Results from "../components/Results";
import Features from "../components/Features";
import Trust from "../components/Trust";
import ContactForm from "../components/ContactForm";
import FooterCTA from "../components/FooterCTA";
import useFadeIn from "../components/useFadeIn";

export default function Home() {
  useFadeIn();

  return (
    <>
      <Navbar />
      <main id="home">
        {/* 1. Hero: Pilot invitation */}
        <Hero />

        {/* 2. Trust Bar: Compliance & credibility */}
        <TrustBar />

        {/* 3. Results: ROI-focused stat cards */}
        <Results />

        {/* 4. Features: Pilot focus areas */}
        <Features />

        {/* 5. Mission anchor */}
        <Trust />

        {/* 6. Pilot contact form */}
        <ContactForm />

        {/* 7. Footer CTA (repeat ask) */}
        <FooterCTA />
      </main>
    </>
  );
}
