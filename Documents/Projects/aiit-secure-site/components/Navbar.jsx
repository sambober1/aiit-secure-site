export default function Navbar() {
  return (
    <nav className="container">
      <div className="nav-left">
        <a href="/" aria-label="AIIT Secure - Home">
          <img
            src="/logos/PrimaryLogo.png"
            alt="AIIT Secure logo"
            className="nav-logo"
          />
        </a>
      </div>

      <div className="nav-right" role="navigation" aria-label="Primary">
        <a href="/">Home</a>
        <a href="#results">Pilot Impact</a>
        <a href="#features">Core Functions</a>
        <a href="#trust">Trust &amp; Oversight</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
