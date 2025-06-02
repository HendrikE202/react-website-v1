import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      {/* Maskottchen rechts, etwas weiter unten */}
      <img
        src='images/image25.png'
        alt='Maskottchen links'
        className='cards-mascot cards-mascot--bottomright'
      />
      {/* Maskottchen links, etwas weiter oben, anderes Bild */}
      <img
        src='images/image27.png'
        alt='Maskottchen links'
        className='cards-mascot cards-mascot--topleft'
      />

      <h1>Check us out!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Funktionen & Features'
              label='Get Started'
              path='/functionsfeatures'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Community'
              label='Community'
              path='/community'
            />
            <CardItem
              src='images/img-5.jpg'
              text='Über Uns'
              label='Über Uns'
              path='/aboutus'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Datenschutz & Nutzungsbedingungen'
              label='Info'
              path='/datasafetygtc'
            />
            <CardItem
              src='images/img-4.jpg'
              text='FAQ & Hilfe'
              label='FAQ'
              path='/products'
            />
            <CardItem
              src='images/img-23.jpg'
              text='Kontakt & Support'
              label='Support'
              path='/contactandsupport'
            />
          </ul>
        </div>
      </div>
      {/* Download-Bereich unter den Cards */}
      <div className="cards-download-section">
        <h2>Jetzt kostenlos herunterladen</h2>
        <div className="download-buttons">
          <a
            href="https://apps.apple.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="download-btn"
          >
            <img src="/images/appstore-badge.png" alt="App Store" />
          </a>
          <a
            href="https://play.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="download-btn"
          >
            <img src="/images/playstore-badge.png" alt="Google Play" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cards;
