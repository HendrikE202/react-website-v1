import React, { useEffect } from "react";
import "../../App.css";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import "./FunctionsFeatures.css";


//Effect Hook to scroll to top on component mount
export default function FunctionsFeatures() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>

      <section className="features-section">
        <h2>App Funktionen & Features</h2>
        
        <div className="feature">
          <img src="/images/img-8.jpg" alt="Feature 1" className="feature-image" />
          <div className="feature-text">
            <h3>Intuitives Dashboard</h3>
            <p>Behalte alle wichtigen Infos und Statistiken auf einen Blick im modernen Dashboard im Auge.</p>
          </div>
        </div>

        <div className="feature feature--reverse">
          <img src="/images/img-8.jpg" alt="Feature 2" className="feature-image" />
          <div className="feature-text">
            <h3>Community Austausch</h3>
            <p>Vernetze dich mit anderen Nutzern, teile Erfolge und motiviere dich gegenseitig.</p>
          </div>
        </div>

        <div className="feature">
          <img src="/images/img-8.jpg" alt="Feature 3" className="feature-image" />
          <div className="feature-text">
            <h3>Individuelle Trainingspläne</h3>
            <p>Erstelle und verwalte deine eigenen Trainingspläne – perfekt abgestimmt auf deine Ziele.</p>
          </div>
        </div>

        <div className="feature feature--reverse">
          <img src="/images/img-8.jpg" alt="Feature 4" className="feature-image" />
          <div className="feature-text">
            <h3>Push-Benachrichtigungen</h3>
            <p>Verpasse keine wichtigen Updates oder Trainings mehr dank smarter Erinnerungen.</p>
          </div>
        </div>

      </section>

      <Footer />
    </>
  );
}