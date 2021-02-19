

import React , { useRef, useEffect }from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
// import { Scroll } from 'framer-motion';
import { motion } from 'framer-motion';
import { TweenMax, Power3 } from 'gsap';



function HeroSection() {


  return (

    

    <div className='hero-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <motion.h1 initial={{y: 150, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 0.7, duration: 0.7}} >Beyond Good <br></br>& Evil 2</motion.h1>
      <motion.p initial={{y: 150, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 0.9, duration: 0.7}} >What are you waiting for?</motion.p>
      <div className='hero-btns'>
        <motion.div className="btn-1" initial={{x: -150, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{delay: 1.1, duration: 0.7}}>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        </motion.div>
        <motion.div className="btn-2"initial={{x: 150, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{delay: 1.1, duration: 0.7}}>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
        </motion.div>
        
      </div>
    </div>
  );
}

export default HeroSection;
