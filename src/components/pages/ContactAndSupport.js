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
      <div className="contact-support-section">
        <h2>Kontakt & Support</h2>
        <div className="contact-support-content">
          <div className="contact-info">
            <h3>Kontakt</h3>
            <p>
              Du hast Fragen oder Feedback? Schreib uns gerne eine Nachricht!
            </p>
            <form className="contact-form">
              <input type="email" placeholder="Deine E-Mail" />
              <input type="text" placeholder="Betreff" />
              <textarea placeholder="Deine Nachricht" rows={5}></textarea>
              <button type="submit">Absenden</button>
            </form>
          </div>
          <div className="support-info">
            <h3>Support</h3>
            <ul>
              <li>📞 Hotline: <span className="placeholder">0123 456789</span></li>
              <li>✉️ E-Mail: <span className="placeholder">support@gymgate.de</span></li>
              <li>🕒 Erreichbarkeit: <span className="placeholder">Mo-Fr 9-18 Uhr</span></li>
              <li>💬 Live-Chat: <span className="placeholder">Bald verfügbar</span></li>
              <li>FAQ: <span className="placeholder">Siehe <a href="/products">Hilfe & FAQ</a></span></li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}