import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from '../Card/Card';
import './Product.css';
function Product() {
    const [products, setProducts]=useState([]);
    const [show, setShow]=useState(false);
    const handleShow=_=>!show?setShow(true):setShow(false);
    const [all ,setAll]=useState([]);
    const getProducts=async()=>{
        try {
            await axios.get('https://backend-1m3m.onrender.com/all').then(res=>{
                setProducts(res.data);
                setAll(res.data);
                console.log(res.data);
                // setBrand(Array.from(new Set(res.data)));

            }).catch(err=>console.log(err));
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getProducts();
    },[]);
    let brands=Array.from(new Set(products.map((item)=>item.brandName)));
    brands.unshift('All');
    const filterCategories=(name)=>{
        if(name==='All'){
            setProducts(all);
        }
        else{
        let categores=products.filter((item)=>item.brandName===name);
           setProducts(categores);
        };
    };

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
     </div>
    <div className='products section__padding'>
    <ul className='filter__section animate__animated animate__fadeInDown'>
      {brands&&brands.map((product,index)=>{
        return <li key={index} onClick={()=>filterCategories(product)}>{product}</li>
      })} 
    </ul>
    <div className='cards'>
        {products&&products.map((product,index)=><Card imageUrl={product.imageUrl} title={product.brandName} description={product.name} price={product.price} key={index} id={product.id}/>)}
    </div>
    </div>
    </div>
  )
}

export default Product