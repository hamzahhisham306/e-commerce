import React from 'react';
import './update.css';
import axios from 'axios';
import cookies from 'react-cookies';

function Modal(props) {


  const handleSubmit =async (event) => {
    event.preventDefault();
    // Add code here to submit the form data
    const updatecontent={
        useritemID:cookies.load('userId'),
        name:event.target.name.value,
        price:event.target.price.value,
        paragraph:event.target.paragraph.value,
        imageUrl:event.target.imageUrl.value
    }
    await axios.put(`https://backend-1m3m.onrender.com/item/${props.id}`,updatecontent).then(()=>{
       props.getItem();
    })
    props.onClose();
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={props.onClose}>&times;</span>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" className='name' />

          <label htmlFor="price">Price:</label>
          <input type="number" id="price" className='price' />

          <label htmlFor="paragraph">Paragraph:</label>
          <input id="paragraph" className='paragraph'></input>

          <label htmlFor="imageUrl">Image URL:</label>
          <input type="text" id="imageUrl" className='imageUrl' />

          <button type="submit">Add Item</button>
        </form>
      </div>
    </div>
  );
}

export default Modal;