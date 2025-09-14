import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  // ✅ This is your form ID
  const [state, handleSubmit] = useForm("xrbaevon");

  if (state.succeeded) {
    return (
      <section id="contact" className="feature-section">
        <div className="container">
          <h2>Request Pilot Access</h2>
          <p className="section-intro success-message">
            ✅ Thanks! Your request has been received. We’ll be in touch shortly.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="feature-section">
      <div className="container">
        <h2>Request Pilot Access</h2>
        <p className="section-intro">
          AIIT Secure is partnering with select agencies to run pilot programs.
          Fill out the form to request access or start a conversation.
        </p>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          {/* Name */}
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" required />
          </div>

          {/* Agency */}
          <div className="form-group">
            <label htmlFor="agency">Agency / Department</label>
            <input id="agency" name="agency" type="text" required />
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          {/* Message */}
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Tell us about your needs or interest in piloting AIIT Secure..."
              required
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          {/* Hidden subject + honeypot */}
          <input
            type="hidden"
            name="_subject"
            value="New Pilot Access Request — AIIT Secure (recipient: sam@aiitsecure.com)"
          />
          <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

          {/* Submit button */}
          <button type="submit" className="btn-primary" disabled={state.submitting}>
            {state.submitting ? "Sending…" : "Submit Request"}
          </button>

          {/* Inline status message */}
          <p id="form-status" className="form-status" aria-live="polite">
            {state.errors?.length ? "⚠️ Please fix the highlighted errors." : ""}
          </p>
        </form>
      </div>
    </section>
  );
}

