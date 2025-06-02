import React, { useEffect } from "react";
import "../../App.css";
import Footer from "../Footer";
import "./FunctionsFeatures.css";

export default function FunctionsFeatures() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Beispiel-Screenshots, du kannst eigene Bilder einsetzen!
  const features = [
    {
      img: "/images/img-1.jpg",
      title: "Alles im Blick",
      desc: "Dein Dashboard zeigt dir Fortschritt, Ziele und Motivation auf einen Blick."
    },
    {
      img: "/images/img-1.jpg",
      title: "Community erleben",
      desc: "Vernetze dich, teile Erfolge und finde Trainingspartner:innen."
    },
    {
      img: "/images/img-1.jpg",
      title: "Eigene Pläne erstellen",
      desc: "Stelle dir individuelle Trainingspläne zusammen – einfach und flexibel."
    },
    {
      img: "/images/img-1.jpg",
      title: "Smarte Erinnerungen",
      desc: "Verpasse keine wichtigen Updates oder Trainings mehr dank smarter Push-Benachrichtigungen."
    }
  ];

  return (
    <>
      <section className="features-walkthrough">
        <h2>So funktioniert GymGate</h2>
        <div className="features-walkthrough-list">
          {features.map((feature, idx) => (
            <div className="walkthrough-step" key={idx}>
              <div className="walkthrough-img-wrap">
                <img src={feature.img} alt={feature.title} className="walkthrough-img" />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="features-extra-info">
        <h3>Warum GymGate?</h3>
        <p>
          GymGate vereint Motivation, Community und smarte Trainingsplanung in einer App. 
          Egal ob Anfänger:in oder Profi – mit GymGate erreichst du deine Ziele einfacher, 
          bleibst am Ball und hast immer alles im Blick. Starte jetzt und werde Teil unserer Community!
        </p>
      </section>

      <Footer />
    </>
  );
}