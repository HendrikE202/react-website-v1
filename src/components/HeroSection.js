import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <div className="hero-content">
        <div className="hero-text">
          <h1>Starte jetzt mit GymGate!</h1>
          <p>Deine smarte Trainings-App – einfach, motivierend, individuell.</p>
          <div className='hero-btns'>
            <Button
              className='btns'
              buttonStyle='btn--primary'
              buttonSize='btn--large'
              to='/sign-up'
            >
              App entdecken
            </Button>
            <Button
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--large'
              to='/login'
            >
              Ich habe schon ein Konto
            </Button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-phone">
            <img src="/images/image30.png" alt="App auf Handy" className="hero-phone-img" />
            {/* <img src="/images/image24.png" alt="Maskottchen" className="hero-mascot" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
