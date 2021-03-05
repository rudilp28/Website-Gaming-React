import React from 'react';
import '../components/headerGalerry.css';
import {motion } from 'framer-motion';

function HeaderGallery() {
  return (
    <>
    <div className='container1-1'>
      <img src="https://i.ibb.co/LR1xJkj/img-galery.jpg" alt=""/>
    </div>
    <div className='containerG'>
      <div className="title-galery">
        <motion.h2 initial={{y: 100, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 0.8, duration: 0.5}}>Gallery</motion.h2>
      </div>
      <p className="paragrafText">Gallery</p>
    </div>
    </>
  )
}

export default HeaderGallery

