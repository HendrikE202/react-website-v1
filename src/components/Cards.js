import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check us out!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Funktionen & Features'
              label='Get-Started'
              path='/functionsfeatures' // klein schreiben!
            />
            <CardItem
              src='images/img-2.jpg'
              text='Community'
              label='Services'
              path='/services'
            />
            <CardItem
              src='images/img-5.jpg'
              text='Über Uns'
              label='Über Uns'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Datenschutz und Nutzungsbedingungen'
              label='About-Us'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='FAQ-Hilfe'
              label='Login'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Kontakt & Support'
              label='Functions'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
