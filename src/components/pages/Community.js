import React from 'react';
import '../../App.css';
import './Community.css';

export default function Community() {
  return (
    <div className="community-page">
      <header className="community-hero">
        <h1>Willkommen in der GymGate Community</h1>
        <p>
          Finde Trainingspartner:innen, entdecke neue Gyms, teile Workouts und tausche dich mit anderen Sportbegeisterten aus – alles an einem Ort!
        </p>
      </header>

      <section className="community-main">
        {/* GymBuddy Matching */}
        <div className="community-section community-buddys">
          <img src="/images/community-buddy.png" alt="GymBuddy" className="community-icon" />
          <h2>Finde deinen GymBuddy</h2>
          <p>
            Mit unserem Matching-Feature findest du ganz einfach Trainingspartner:innen in deiner Nähe – abgestimmt auf deine Ziele und Interessen.
          </p>
          <button className="community-action-btn">Jetzt GymBuddy suchen</button>
        </div>

        {/* Map & Gyms */}
        <div className="community-section community-map">
          <img src="/images/community-map.png" alt="Gyms Map" className="community-icon" />
          <h2>Gyms in deiner Nähe</h2>
          <p>
            Entdecke Fitnessstudios, Parks und Trainingsspots auf der interaktiven Karte. Finde neue Orte zum Trainieren und verabrede dich direkt vor Ort!
          </p>
          <button className="community-action-btn">Karte entdecken</button>
        </div>

        {/* Austausch & Gruppen */}
        <div className="community-section community-chat">
          <img src="/images/community-chat.png" alt="Community Chat" className="community-icon" />
          <h2>Austausch & Gruppen</h2>
          <p>
            Tritt Gruppen bei, chatte mit anderen Mitgliedern und teile deine Erfahrungen. Gemeinsam macht Training mehr Spaß!
          </p>
          <button className="community-action-btn">Community beitreten</button>
        </div>

        {/* Workouts teilen */}
        <div className="community-section community-workouts">
          <img src="/images/community-workout.png" alt="Workouts teilen" className="community-icon" />
          <h2>Workouts erstellen & teilen</h2>
          <p>
            Erstelle eigene Workouts, teile sie mit der Community und lass dich von den beliebtesten Trainings inspirieren.
          </p>
          <button className="community-action-btn">Workouts entdecken</button>
        </div>
      </section>
    </div>
  );
}
