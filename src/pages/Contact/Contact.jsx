import React, { useEffect, useRef, useState } from "react";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import "./Contact.css";

// Initialize EmailJS
emailjs.init("06wmHyRxb8HoF4Reg"); // ← Your Public Key

const Contact = () => {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // IntersectionObserver for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Send Email
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");

    emailjs.sendForm(
      "service_rszub1k",   // ← Your Gmail API Service ID
      "template_8vw3ohh",  // ← Your Template ID
      e.target
    )
    .then((result) => {
      console.log("Email sent:", result.text);
      setSuccess(true);
      e.target.reset();
    })
    .catch((err) => {
      console.error("EmailJS Gmail error:", err);
      setError("Failed to send message. Check console ❌");
    })
    .finally(() => setLoading(false));
  };

  return (
    <section className="contact-section" ref={containerRef}>
      <div className={`contact-container ${visible ? "animate" : ""}`}>
        <h2 className="contact-title">Let's Connect</h2>
        <p className="contact-description">
          Reach out via email, phone, or connect with me on social media.
        </p>

        <div className="contact-info">
          <div className="contact-item">
            <h3>Email</h3>
            <p>mousammishra79@gmail.com</p>
          </div>
          <div className="contact-item">
            <h3>Mobile</h3>
            <p>7982985575</p>
          </div>
          <div className="contact-item">
            <h3>Social</h3>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/mousam-mishra-10a425343" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://github.com/123mousam" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
              <a href="https://wa.me/7982985575" target="_blank" rel="noreferrer">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        {/* CONTACT FORM */}
        <form onSubmit={sendEmail} className="contact-form">
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit" className="contact-button" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && <p className="success-text">Message sent successfully! ✅</p>}
          {error && <p className="error-text">{error}</p>}
        </form>

        <div className="floating-dots">
          <span></span><span></span><span></span><span></span><span></span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
