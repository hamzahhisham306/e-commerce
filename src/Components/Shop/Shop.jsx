import React from 'react'
import Navbar from '../Navbar/Navbar'
import Product from '../Navbar/Products/Product'
import Footer from '../Footer/Footer'
import Modal from '../Modale/Modal.js';
import ModalForm from '../ModaleForm/Form.js';
function Shop() {
  return (
    <div>
     <Navbar/>
     <Product/>
     <Modal/>
     <ModalForm/>
     <Footer/>
    </div>
  )
}

export default Shop