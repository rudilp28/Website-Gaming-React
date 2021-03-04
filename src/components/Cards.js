import React, { useEffect } from 'react';
import './Cards.css';
import CardItem from './CardItem';
import {gsap, TimelineLite, Power3 } from 'gsap';


import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


function Cards() {

let t1= new TimelineLite({ delay: 0.3});

useEffect(() => {
  t1.from('.card', {y: 15, opacity: 0, ease: Power3, delay: 0.2 }, 'start');
  gsap.from('.cards__items', {
    duration: 1,
    y: '100',
    opacity: 0,
    ease: 'ease-in',
    scrollTrigger: {
      trigger: '.cards__items',
      start: 'top 80%',
    }
  })
}, []);

  return (
    <div className='cards'>
      <h1>About</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://i.ibb.co/S7N6myD/macaco.jpg'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
              label='Knox'
              
            />
            <CardItem
              src='https://i.ibb.co/86Hc5gt/moca-1.jpg'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
              label='Jade'
              
            />
            <CardItem
              src= 'https://i.ibb.co/Kq8qT8h/nave.jpg'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
              label='Ships'
              
            />
          </ul>
          <ul className='cards__items'>
            
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
