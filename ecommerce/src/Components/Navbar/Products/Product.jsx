import React, { useState,useEffect } from 'react';
import './product.css';
import axios from 'axios';
import Card from '../../Card/Card.js';
import Loader from '../../Loader/Loader';

function Product() {
  const [show, setShow]=useState(false);
  const handleShow=_=>!show?setShow(true):setShow(false);
  const [products, setProducts]=useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [all ,setAll]=useState([]);
  const getProducts=async()=>{
    try {
        await axios.get('http://localhost:4000/all').then(res=>{
            setProducts(res.data);
            setAll(res.data);

        }).catch(err=>console.log(err));
    } catch (error) {
        console.log(error);
    }
}
const filterCategories=(name)=>{
  if(name==='All'){
      setProducts(all);
  }
  else{
  let categores=products.filter((item)=>item.brandName===name);
     setProducts(categores);
  };
};
useEffect(()=>{
    getProducts().then(()=>{
      setIsLoading(false);
    })
},[]);
let brands=Array.from(new Set(products.map((item)=>item.brandName)));
brands.unshift('All');
  return (
    <div className='product section__padding'>
     <h1>PRODUCT OVERVIEW</h1>
     <div className='main__product'>
     <div className='product__filter'>
     <ul>
        <li className='active'>All Products</li>
        {isLoading&&<Loader/>}

     </ul>
     <div className='btns'>
       <button onClick={()=>handleShow()}>Filter</button>
       <button>Search</button>
     </div>
     </div>
    {show&&<div className='filter__section animate__animated animate__fadeInDown'>
  
     </div>}
     <div className='products'>
     {show&&<ul className='filter__section animate__animated animate__fadeInDown'>
      {brands&&brands.map((product,index)=>{
        return <li key={index} onClick={()=>filterCategories(product)}>{product}</li>
      })} 
    </ul>
     }
    {products&&<div className='cards'>
        {products&&products.map((product,index)=><Card imageUrl={product.imageUrl} title={product.brandName} description={product.name} price={product.price} key={index} id={product.id}/>)}
    </div>
    }
    </div>
     </div>
    </div>
  )
}

export default Product