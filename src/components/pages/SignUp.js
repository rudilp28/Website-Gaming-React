import React from 'react';
import '../../App.css';
import { motion } from 'framer-motion';

const pageTransition = {
  in: {
    opacity: 1,
    x: 0,
    overflow: 'hidden'
  },
  out: {
    opacity: 0,
    x: '-100',
    overflow: 'hidden'
  } 
}

export default function SignUp() {
  return <motion.h1 className='sign-up' initial="out" animate="in" exit="out" variants={pageTransition}>SIGN UP</motion.h1>;
}
