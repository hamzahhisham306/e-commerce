import React from 'react';
import './product.css';

function Product() {
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
       <button>Filter</button>
       <button>Search</button>
     </div>
     </div>
     <div className='filter__section'>
        <ul>
            <h3>Sort By</h3>
            <li>Default</li>
            <li>Popularity</li>
            <li>Average rating</li>
            <li>Newness</li>
            <li>Price: Low to High</li>
            <li>Price High to Low</li>
        </ul>
        <ul>
            <h3>Price</h3>
            <li>All</li>
            <li>$0.00 - $50.00</li>
            <li>$50.00 - $100.00</li>
            <li>$100.00 - $150.00</li>
            <li>$150.00 - $200.00</li>
            <li>$200.00+</li>
        </ul>
        <ul>
            <h3>Color</h3>
            <li><span></span>Black</li>
            <li> <span></span>blue</li>
            <li><span></span>Grey</li>
            <li><span></span>Green</li>
            <li><span></span>Red</li>
            <li><span></span>White</li>
        </ul>
        <ul>
            <h3>Tags</h3>
            <button>Fashion</button>
            <button>Lifestyle</button>
            <button>Denim</button>
        </ul>
     </div>
     </div>
    </div>
  )
}

export default Product