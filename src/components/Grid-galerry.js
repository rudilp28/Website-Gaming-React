import React, { useState } from 'react';
import images from './images';
import './Grid-galery.css';


function GridGalerry() {


 const [selectedImg, setSelectedImg] = useState(images[0]);

  return (
    <div className="contRow">
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
    </div>
    
  )
}

export default GridGalerry

