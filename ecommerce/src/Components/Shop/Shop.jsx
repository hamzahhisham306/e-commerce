import React from 'react'
import Navbar from '../Navbar/Navbar'
import Product from '../Navbar/Products/Product'
import Footer from '../Footer/Footer'
import Picuter from '../Picuters/Picuter'

function Shop() {
  return (
    <div>
     <Navbar/>
     <Product/>
     <Picuter/>
     <Footer/>
    </div>
  )
}

export default Shop