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
 
  return <motion.div className='sign-up' initial="out" animate="in" exit="out" variants={pageTransition}>
    <div className="glassCard">
      <h1>SIGN UP</h1>
      <form>
        <div className="form">
          <form>
            <input
              className='sigUp-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <input
              className='sigUp-input'
              name='password'
              type='password'
              placeholder='Password'
            />
          </form>
          <button class="btn btn--outline1 btn--large1">GET STARTED</button>
        </div>
      </form>
    </div>
  </motion.div>

}
