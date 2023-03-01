import React, { useState } from 'react';
import './Toast.css'; // import CSS file for styling the toast

function Toast({ message }) {
  const [show, setShow] = useState(true);

  const handleHide = () => {
    setShow(false);
  };

  return (
    <>
      {show && (
        <div className="toastt" onClick={handleHide}>
          <p>{message}</p>
        </div>
      )}
    </>
  );
}

export default Toast;