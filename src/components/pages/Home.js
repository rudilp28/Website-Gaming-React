import React from 'react';
import '../../App.css';
import { motion } from 'framer-motion';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

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

function Home() {
  return (
    <motion.div initial="out" animate="in" exit="out" variants={pageTransition}>
      <HeroSection />
      <Cards />
      <Footer />
    </motion.div>
  );
}

export default Home;
