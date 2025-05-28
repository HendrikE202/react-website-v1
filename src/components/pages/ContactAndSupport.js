import React, { useEffect } from "react";
import "../../App.css";
import Footer from "../Footer";
import "./ContactAndSupport.css";


export default function ContactAndSupport() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="contact-support-hero">
        <div className="contact-support-hero-icon">🤝</div>
        <h2>Wir sind für dich da!</h2>
        <p className="contact-support-hero-text">
          Egal ob Frage, Feedback oder Problem – unser Team hilft dir schnell und unkompliziert weiter.
        </p>
      </section>
      <section className="contact-support-main">
        <div className="contact-support-card">
          <div className="contact-support-card-icon">📬</div>
          <h3>Schreib uns direkt</h3>
          <form className="contact-form">
            <input type="text" placeholder="Betreff" />
            <input type="email" placeholder="Deine E-Mail" />
            <textarea placeholder="Deine Nachricht" rows={4}></textarea>
            <button type="submit">Absenden</button>
          </form>
        </div>
        <div className="contact-support-card">
          <div className="contact-support-card-icon">💡</div>
          <h3>Weitere Kontaktmöglichkeiten</h3>
          <ul className="support-list">
            <li><span role="img" aria-label="phone">📞</span> Hotline: <span className="placeholder">0123 456789</span></li>
            <li><span role="img" aria-label="mail">📧</span> E-Mail: <span className="placeholder">support@gymgate.de</span></li>
            <li><span role="img" aria-label="clock">⏰</span> Mo-Fr 9-18 Uhr</li>
            <li><span role="img" aria-label="faq">❓</span> <a href="/products">FAQ & Hilfe</a></li>
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
}