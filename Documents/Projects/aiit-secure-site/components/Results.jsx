export default function Results() {
  return (
    <section id="results" className="results" aria-labelledby="results-title">
      <div className="container">
        <h2 id="results-title">Pilot Program Impact</h2>
        <p>
          Early pilots with AIIT Secure aim to show measurable benefits for investigators and supervisors.
        </p>

        <div className="results-grid">
          <div className="result-card" data-fade>
            <h3>4–6 hrs</h3>
            <p>Saved per case through faster intake & prep</p>
          </div>

          <div className="result-card" data-fade>
            <h3>30%</h3>
            <p>Fewer manual errors flagged in early reviews</p>
          </div>

          <div className="result-card" data-fade>
            <h3>100%</h3>
            <p>Cases delivered with audit-ready summaries</p>
          </div>
        </div>
      </div>
    </section>
  );
}
