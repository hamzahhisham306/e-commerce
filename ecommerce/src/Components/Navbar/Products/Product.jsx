import React, { useState } from 'react';
import './product.css';

function Product() {
  const [show, setShow]=useState(false);
  const handleShow=_=>!show?setShow(true):setShow(false);
  
  return (
    <div className='product section__padding'>
     <h1>PRODUCT OVERVIEW</h1>
     <div className='main__product'>
     <div className='product__filter'>
     <ul>
        <li className='active'>All Products</li>
        <li>Women</li>
        <li>Men</li>
        <li>Bag</li>
        <li>Shoes</li>
        <li>Watches</li>
     </ul>
     <div className='btns'>
       <button onClick={()=>handleShow()}>Filter</button>
       <button>Search</button>
     </div>
     </div>
    {show&&<div className='filter__section animate__animated animate__fadeInDown'>
        <ul>
            <h4>Sort By</h4>
            <li>Default</li>
            <li>Popularity</li>
            <li>Average rating</li>
            <li>Newness</li>
            <li>Price: Low to High</li>
            <li>Price High to Low</li>
        </ul>
        <ul>
            <h4>Price</h4>
            <li>All</li>
            <li>$0.00 - $50.00</li>
            <li>$50.00 - $100.00</li>
            <li>$100.00 - $150.00</li>
            <li>$150.00 - $200.00</li>
            <li>$200.00+</li>
        </ul>
        <ul>
            <h4>Color</h4>
            <li><span className='black'></span>Black</li>
            <li> <span className='blue'></span>blue</li>
            <li><span className='gray'></span>Grey</li>
            <li><span className='green'></span>Green</li>
            <li><span className='red'></span>Red</li>
            <li><span className='white'></span>White</li>
        </ul>
        <ul>
            <h4>Tags</h4>
            <button>Fashion</button>
            <button>Lifestyle</button>
            <button>Denim</button>
        </ul>
     </div>}
     </div>
    </div>
  )
}

export default Product