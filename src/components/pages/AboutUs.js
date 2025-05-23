import React, { useEffect } from "react";
import "../../App.css";
import "./AboutUs.css";
import Footer from "../Footer";

export default function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>Über GYMGATE</h1>
          <p>
            Wir sind mehr als nur eine Fitness-App – wir sind deine Community, dein Motivator und dein digitaler Trainingsbuddy!
          </p>
        </div>
      </section>

      <section className="about-values">
        <h2>Unsere Mission</h2>
        <p>
          GYMGATE macht Fitness für alle zugänglich, motivierend und individuell. Wir verbinden smarte Technologie mit echter Community-Power.
        </p>
        <div className="about-cards">
          <div className="about-card">
            <span role="img" aria-label="Innovation">🚀</span>
            <h3>Innovation</h3>
            <p>Wir entwickeln moderne Tools, die dein Training smarter machen.</p>
          </div>
          <div className="about-card">
            <span role="img" aria-label="Community">🤝</span>
            <h3>Community</h3>
            <p>Gemeinsam mehr erreichen – Motivation und Austausch stehen bei uns im Fokus.</p>
          </div>
          <div className="about-card">
            <span role="img" aria-label="Individualität">🎯</span>
            <h3>Individualität</h3>
            <p>Dein Weg, dein Tempo: Passe GYMGATE an deine Ziele an.</p>
          </div>
        </div>
      </section>

      <section className="about-team">
        <h2>Unser Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <div className="team-avatar">H</div>
            <h4>Hendrik</h4>
            <p>Gründer/Design & Community</p>
          </div>
          {/*}
          <div className="team-member">
            <div className="team-avatar">U</div>
            <h4>Du?</h4>
            <p>Bewirb dich jetzt!</p>
          </div>*/}
          <div className="team-member">
            <div className="team-avatar">L</div>
            <h4>Luca</h4>
            <p>Gründer/Tech & Entwicklung</p>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <h2>Werde Teil von GYMGATE!</h2>
        <p>
          Starte jetzt deine Fitness-Reise mit uns und entdecke, was du erreichen kannst.
        </p>
        <a href="/sign-up" className="about-btn">Jetzt loslegen</a>
      </section>

      <Footer />
    </>
  );
}