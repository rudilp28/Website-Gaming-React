
import React, { Children } from 'react';



const Modal = ({ onClose= () => {} , children}) => {
  return (
      <div className="modal" >
            <div className="container-01">
                <div className="tudo"> 
                    <button className="close" onClick={onClose} ><svg viewBox="0 0 72 72"><path fill="none" stroke="#ece8e1" d="M61.5 9.5l-7 7m-38 38l-7 7M30.3 42l2.8-3m8.6 3L30.3 30m11.4 0l-2.6 2.8"></path></svg></button>
                   
                </div>
          </div>
      </div>
  )
};

export default Modal;