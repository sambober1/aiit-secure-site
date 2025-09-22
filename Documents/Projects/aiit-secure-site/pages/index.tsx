import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import type { NextPage } from "next";

// Critical components - loaded immediately
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ErrorBoundary from "../components/ErrorBoundary";
import SectionLoader from "../components/SectionLoader";
import useFadeIn from "../components/useFadeIn";

// Non-critical components - lazy loaded for better performance
const TrustBar = dynamic(() => import("../components/TrustBar"), {
  loading: () => <SectionLoader minHeight="80px" label="Loading trust indicators" />,
  ssr: true
});

const Results = dynamic(() => import("../components/Results"), {
  loading: () => <SectionLoader minHeight="300px" label="Loading impact results" />,
  ssr: true
});

const Features = dynamic(() => import("../components/Features"), {
  loading: () => <SectionLoader minHeight="400px" label="Loading feature information" />,
  ssr: true
});

const Trust = dynamic(() => import("../components/Trust"), {
  loading: () => <SectionLoader minHeight="250px" label="Loading trust section" />,
  ssr: true
});

const ContactForm = dynamic(() => import("../components/ContactForm"), {
  loading: () => <SectionLoader minHeight="500px" label="Loading contact form" />,
  ssr: true
});

const FooterCTA = dynamic(() => import("../components/FooterCTA"), {
  loading: () => <SectionLoader minHeight="150px" label="Loading footer" />,
  ssr: true
});

/**
 * Home page component for AIIT Secure website
 * 
 * This is the main landing page that showcases the pilot program invitation,
 * trust indicators, impact results, core features, mission statement,
 * contact form, and footer call-to-action.
 * 
 * The page implements:
 * - Lazy loading for non-critical sections to improve performance
 * - Error boundaries to handle component failures gracefully
 * - Fade-in animations for enhanced user experience
 * - Proper accessibility with semantic HTML and ARIA labels
 * - TypeScript for type safety and better developer experience
 * 
 * @returns JSX for the complete home page
 */
const Home: NextPage = () => {
  // Initialize fade-in animations
  useFadeIn();

  return (
    <>
      {/* Navigation - always visible */}
      <ErrorBoundary>
        <Navbar />
      </ErrorBoundary>

      {/* Main content area */}
      <main 
        id="home" 
        role="main"
        aria-label="AIIT Secure main content"
      >
        {/* 1. Hero Section: Primary pilot invitation */}
        <ErrorBoundary>
          <Hero />
        </ErrorBoundary>

        {/* 2. Trust Bar: Compliance & credibility indicators */}
        <ErrorBoundary>
          <Suspense fallback={<SectionLoader minHeight="80px" label="Loading trust indicators" />}>
            <TrustBar />
          </Suspense>
        </ErrorBoundary>

        {/* 3. Results Section: ROI-focused statistical cards */}
        <ErrorBoundary>
          <Suspense fallback={<SectionLoader minHeight="300px" label="Loading impact results" />}>
            <Results />
          </Suspense>
        </ErrorBoundary>

        {/* 4. Features Section: Core pilot focus areas */}
        <ErrorBoundary>
          <Suspense fallback={<SectionLoader minHeight="400px" label="Loading feature information" />}>
            <Features />
          </Suspense>
        </ErrorBoundary>

        {/* 5. Trust Section: Mission and collaboration anchor */}
        <ErrorBoundary>
          <Suspense fallback={<SectionLoader minHeight="250px" label="Loading trust section" />}>
            <Trust />
          </Suspense>
        </ErrorBoundary>

        {/* 6. Contact Section: Pilot program contact form */}
        <ErrorBoundary>
          <Suspense fallback={<SectionLoader minHeight="500px" label="Loading contact form" />}>
            <ContactForm />
          </Suspense>
        </ErrorBoundary>

        {/* 7. Footer CTA: Final call-to-action */}
        <ErrorBoundary>
          <Suspense fallback={<SectionLoader minHeight="150px" label="Loading footer" />}>
            <FooterCTA />
          </Suspense>
        </ErrorBoundary>
      </main>
    </>
  );
};

export default Home;
