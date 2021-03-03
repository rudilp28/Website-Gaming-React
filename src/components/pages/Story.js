import React from 'react';
import '../../App.css';
import HeroS2 from '../HeroSection2';
import InfoStory from '../InfoStory';
import Footer from '../Footer';
import { motion } from 'framer-motion';

const pageTransition = {
  in: {
    opacity: 1,
    y: 0
  },
  out: {
    opacity: 0,
    y: '-100'
  } 
}


function Story() {
  return (
    <motion.div initial="out" animate="in" exit="out" variants={pageTransition}>
      <HeroS2 />
      <InfoStory />
      <Footer />
    </motion.div>
  );
}

export default Story;
