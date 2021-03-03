import React from 'react';
import { motion } from 'framer-motion';
import GridGalerry from '../Grid-galerry';
import Headertext from '../HeaderGalerry'
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


function Gallery() {
    
 return <motion.div initial="out" animate="in" exit="out" variants={pageTransition}>
    <Headertext />
    <GridGalerry />
    <Footer />
  </motion.div>
}

export default Gallery

