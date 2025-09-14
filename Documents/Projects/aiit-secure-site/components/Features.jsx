export default function Features() {
  return (
    <section id="features" className="feature-section">
      <div className="container">
        <h2>Pilot Focus Areas</h2>
        <p className="section-intro">
          With our pilot partners, AIIT Secure is refining workflows that
          streamline casework, reduce investigator burden, and ensure
          every file is ready for oversight.
        </p>

        <div className="feature-list">
          {/* Evidence Intake */}
          <div className="feature-item" data-fade>
            <img
              src="/Images/icons/folder-lock.svg"
              alt="Evidence intake icon"
              className="feature-icon"
            />
            <h3>Streamlined Evidence Intake</h3>
            <p>
              Pilot testing simplified evidence submission and case structuring
              — saving investigators time on routine file handling.
            </p>
          </div>

          {/* Flagging */}
          <div className="feature-item" data-fade>
            <img
              src="/Images/icons/flag.svg"
              alt="Flagging icon"
              className="feature-icon"
            />
            <h3>Automated Flagging</h3>
            <p>
              Early pilots explore auto-flagging questionable records so
              supervisors can review faster and focus oversight where it matters.
            </p>
          </div>

          {/* Audit Trail */}
          <div className="feature-item" data-fade>
            <img
              src="/Images/icons/pen.svg"
              alt="Audit trail icon"
              className="feature-icon"
            />
            <h3>Audit-Ready Summaries</h3>
            <p>
              Generating structured, reviewable reports designed for
              accountability and compliance — with supervisor sign-off built in.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
