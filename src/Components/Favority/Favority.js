import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer';
import axios from 'axios';
import cookies from 'react-cookies';
import CardFavoity from '../CardFavoity/CardFavority';
import './Favority.css';
import Modal from '../Modale/Modal.js';
import ModalForm from '../ModaleForm/Form.js';
function Favority() {
    const [all, setAll]=useState([]);
    const getFavority=async()=>{
        if(cookies.load('userId')){
       await axios.get(`https://backend-1m3m.onrender.com/userfavority/${Number(cookies.load('userId'))}`).then((res)=>{
        setAll(res.data);
       }).catch((err)=>console.log(err))
    }
}
    useEffect(()=>{
      getFavority();
    },[]);
  return (
    <div>
    <Navbar/>
    <Modal/>
    <ModalForm/>
    <div className='favority section__padding'>
    {all.favorites?.map((data)=>{
        return <CardFavoity getFavority={getFavority} imageUrl={data.imageUrl} description={data.description} price={data.price} title={data.title} id={data.id}/>
    })}
    {all.favorites?.length===0?<h1>No Favority</h1>:''}
    </div>
    <Footer/>
    </div>
  )
}

export default Favority