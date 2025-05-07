import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out our APP for free!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Text here and more text'
              label='Get-Started'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Text here and more text'
              label='Services'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Text here and more text'
              label='About-Us'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Text here and more text'
              label='Login'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Text here and more text'
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
