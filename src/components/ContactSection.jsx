import { useRef, useState } from "react";
import { ArrowUpRight, CheckCircle2, Facebook, LoaderCircle, Mail, MapPin, Phone, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { profile } from "../data/portfolio";
import { validateContact } from "../lib/contactValidation";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const formRef = useRef(null);

  async function handleSubmit(event) {
    event.preventDefault();
    if (isLoading) return;
    setStatus({ type: "", message: "" });
    const nextErrors = validateContact(formData);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      formRef.current?.elements.namedItem(Object.keys(nextErrors)[0])?.focus();
      return;
    }
    setIsLoading(true);
    try {
      // Browser/public identifiers; the original service, template, and payload names are preserved.
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_qrkl4es",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_n65re2m",
        { from_name: formData.name.trim(), from_email: formData.email.trim(), message: formData.message.trim(), to_email: profile.email },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "jHhbzEOOwu4UuZxfF"
      );
      setStatus({ type: "success", message: "Message sent. Thank you for reaching out—I'll get back to you soon." });
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } catch {
      setStatus({ type: "error", message: "Your message could not be sent. Please try again, or email me directly." });
    } finally {
      setIsLoading(false);
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
    setErrors((previous) => ({ ...previous, [name]: "" }));
    if (status.type) setStatus({ type: "", message: "" });
  }

  const fieldProps = (name) => ({
    id: `contact-${name}`, name, value: formData[name], onChange: handleChange,
    disabled: isLoading, required: true,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `error-${name}` : name === "message" ? "message-hint" : undefined,
  });

  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-title">
      <div className="shell contact-grid">
        <div className="contact-copy"><p className="eyebrow">04 / LET'S CONNECT</p><h2 id="contact-title">Have something<br /><span className="serif">in mind?</span><span className="accent-text">↗</span></h2>
          <p>A website, a business application, or an idea worth exploring. Let's start a conversation.</p>
          <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight size={20} /></a>
          <div className="contact-details"><a href={`tel:${profile.phoneHref}`}><Phone size={16} />{profile.phone}</a><span><MapPin size={16} />{profile.location}</span></div>
          <div className="contact-socials"><a href={profile.facebook} target="_blank" rel="noopener noreferrer"><Facebook size={17} />Facebook<ArrowUpRight size={14} /><span className="sr-only"> (opens in a new tab)</span></a></div>
        </div>
        <form className="contact-form" ref={formRef} onSubmit={handleSubmit} noValidate aria-busy={isLoading}>
          <div className="form-heading"><span className="form-title">Send a note</span><Mail size={21} strokeWidth={1.5} /></div>
          {status.type && <div className={`form-status ${status.type}`} role={status.type === "error" ? "alert" : "status"}>{status.type === "success" && <CheckCircle2 size={18} />}<span>{status.message}</span></div>}
          <div className="form-row">
            <div className="form-field"><label htmlFor="contact-name">Your name <span aria-hidden="true">*</span></label><input {...fieldProps("name")} type="text" autoComplete="name" placeholder="How should I call you?" maxLength={50} />{errors.name && <p className="field-error" id="error-name">{errors.name}</p>}</div>
            <div className="form-field"><label htmlFor="contact-email">Email address <span aria-hidden="true">*</span></label><input {...fieldProps("email")} type="email" autoComplete="email" placeholder="you@example.com" maxLength={254} />{errors.email && <p className="field-error" id="error-email">{errors.email}</p>}</div>
          </div>
          <div className="form-field"><label htmlFor="contact-message">What's on your mind? <span aria-hidden="true">*</span></label><textarea {...fieldProps("message")} rows={5} placeholder="Tell me a little about your project or idea…" maxLength={1000} />{errors.message ? <p className="field-error" id="error-message">{errors.message}</p> : <p className="field-hint" id="message-hint">10–1,000 characters</p>}</div>
          <div className="form-bottom"><span>All fields are required.</span><button type="submit" className="button button-primary" disabled={isLoading}>{isLoading ? <><LoaderCircle size={17} className="spinner" />Sending…</> : <>Send message<Send size={16} /></>}</button></div>
        </form>
      </div>
    </section>
  );
}
