import React, { useEffect } from "react";
import "../../App.css";
import "./DataSafetyGTC.css";
import Footer from "../Footer";

export default function DataSafetyGTC() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="ds-hero">
        <div className="ds-hero-content">
          <h1>Datenschutz & Nutzungsbedingungen</h1>
          <p>
            Deine Daten sind uns wichtig. Hier erfährst du, wie wir mit deinen Informationen umgehen und welche Regeln für die Nutzung von GYMGATE gelten.
          </p>
        </div>
      </section>

      <section className="ds-content">
        <div className="ds-block">
          <h2>Datenschutz</h2>
          <p>
            Wir behandeln deine personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften. Deine Trainingsdaten, E-Mail-Adresse und weitere Angaben werden ausschließlich zur Bereitstellung und Verbesserung unserer Services verwendet.
          </p>
          <ul>
            <li>Keine Weitergabe deiner Daten an Dritte ohne deine Zustimmung.</li>
            <li>Verschlüsselte Übertragung und sichere Speicherung deiner Informationen.</li>
            <li>Du kannst jederzeit Auskunft über deine gespeicherten Daten erhalten.</li>
          </ul>
        </div>
        <div className="ds-block">
          <h2>Nutzungsbedingungen</h2>
          <p>
            Mit der Nutzung von GYMGATE erklärst du dich mit unseren Bedingungen einverstanden:
          </p>
          <ul>
            <li>Die App darf nur für private, nicht-kommerzielle Zwecke genutzt werden.</li>
            <li>Respektiere andere Nutzer und verhalte dich fair in der Community.</li>
            <li>Veröffentliche keine rechtswidrigen oder beleidigenden Inhalte.</li>
            <li>Bei Verstößen behalten wir uns das Recht vor, Accounts zu sperren.</li>
          </ul>
        </div>
        <div className="ds-block ds-contact">
          <h2>Kontakt & Auskunft</h2>
          <p>
            Bei Fragen zum Datenschutz oder zu unseren Nutzungsbedingungen kannst du uns jederzeit kontaktieren:
          </p>
          <a href="mailto:support@gymgate.de" className="ds-mail">support@gymgate.de</a>
        </div>
      </section>

      <Footer />
    </>
  );
}