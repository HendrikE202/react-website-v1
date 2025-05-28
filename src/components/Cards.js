import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      {/* Maskottchen links, etwas weiter oben */}
      <img
        src='images/image25.png'
        alt='Maskottchen links'
        className='cards-mascot cards-mascot--left'
      />
      {/* Maskottchen rechts, etwas weiter unten, anderes Bild */}
      <img
        src='images/image27.png'
        alt='Maskottchen rechts'
        className='cards-mascot cards-mascot--right'
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
              path='/services'
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
              src='images/img-8.jpg'
              text='Kontakt & Support'
              label='Support'
              path='/contactandsupport'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
