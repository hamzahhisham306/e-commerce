import React from 'react';
import './img.css'; // import CSS file for styling the modal

function Modal({imageSrc,isOpen, toggleModal}) {


  return (
    <div>
      <img src={imageSrc} onClick={toggleModal} alt="full" />
      {isOpen && (
        <div className="modal-img">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>&times;</span>
            <img src={imageSrc} alt="Full" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;