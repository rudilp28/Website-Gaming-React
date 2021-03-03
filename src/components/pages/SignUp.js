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
          <input type="text" class="formulario__input"></input>
          <label for="" class="formulario__label">Nome</label>
          <input type="text" class="formulario__input"></input>
          <label for="" class="formulario__label">Senha</label>
          <button class="btn btn--outline1 btn--large1">GET STARTED</button>
        </div>
      </form>
    </div>
  </motion.div>

}
