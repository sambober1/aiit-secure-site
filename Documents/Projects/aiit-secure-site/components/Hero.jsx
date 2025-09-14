export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-content">
        <img
          src="/logos/PrintLogo.svg"
          alt="AIIT Secure logo"
          className="hero-logo"
        />

        <h1 className="hero-title">
          <span className="desktop-only">Streamlining Investigations — Now in Pilot</span>
          <span className="mobile-only">Streamlining Investigations<br />Now in Pilot</span>
        </h1>


        <p className="hero-text">
          AIIT Secure is partnering with select agencies to test streamlined
          evidence intake, automated flagging, and audit-ready reporting.
        </p>

        <div className="cta-buttons">
          <a href="#contact" className="btn-primary">
            Request Pilot Access
          </a>
          <a href="#features" className="btn-secondary">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
