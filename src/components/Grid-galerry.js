import React, { useState } from 'react';
import images from './images';
import './Grid-galery.css';
import {motion } from 'framer-motion';


function GridGalerry() {


 const [selectedImg, setSelectedImg] = useState(images[0]);

  return (
    
    <motion.div className="contRow" initial={{y: 150, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 1, duration: 0.7}}>
      <div className="contColun">
        <div className="container-galery">
          <div className="containerImagem-perview">
            <img src={selectedImg} alt="Selected" className="selected" />
          </div>
          <div className="imgContainer">
            <h2 className="style_Title">Wallpapers disponíveis</h2>
            <div className="style_carousel">
              <div className="style_carousel_bloco">
                
                {images.map((img, index) => (
                 <div className="bl"> 
                <img style={{border: selectedImg === img ? "4px solid purple" : ""}} key={index} src={img} alt="wall" 
                onClick={() => setSelectedImg(img)} />
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
    
  )
}

export default GridGalerry

