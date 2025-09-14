export default function FooterCTA() {
  return (
    <>
      {/* Full-width footer callout */}
      <section className="footer-cta">
        <div className="container">
          <h2>Ready to Modernize Your Investigations?</h2>
          <p>
            Join the pilot program and see how AIIT Secure can save time,
            improve oversight, and make every case courtroom-ready.
          </p>
        </div>
      </section>

      {/* Floating button (keep as extra shortcut) */}
      <a href="#contact" className="contact-float" aria-label="Request Pilot Access">
        Request Pilot Access
      </a>
    </>
  );
}
