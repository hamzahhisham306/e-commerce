import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';import CardItem from '../CardItem/CardItem';
import './item.css';
import cookies from 'react-cookies';

function Item() {
    const [items, setItem]=useState([]);
    const [show, setShow]=useState(false);

    const getItem=async()=>{
       try {
         await axios.get('http://localhost:4000/item').then(res=>{
            setItem(res.data);
         })
       } catch (error) {
        console.log(error);
       }
    }
    useEffect(()=>{
       getItem();
    },[])
    const handleShow=_=>!show?setShow(true):setShow(false);
    const handleSubmit =async (event) => {
      
        event.preventDefault();
        // Add code here to submit the form data
        const newItem={
            useritemID:cookies.load('userId'),
            name:event.target.name.value,
            price:event.target.price.value,
            paragraph:event.target.paragraph.value,
            imageUrl:event.target.imageUrl.value
        }
        console.log(newItem);
        await axios.post('http://localhost:4000/item',newItem).then(data=>{
            console.log(data);
            getItem();
            event.target.reset();
        }).catch(err=>console.log(err));
      
     
      }

    
    
  return (
    <div className='items'>

        <Navbar/>
       {(cookies.load('token'))&&<button onClick={()=>handleShow()} style={{marginLeft:'130px', marginTop:'30px', padding:'10px', backgroundColor:'white',color:'black' ,border:'1px solid black'}}>Add new Item</button>}
       {!(cookies.load('token'))&& <h3 style={{marginLeft:'30px'}}>please login to add item</h3>}
        <div className="container">
      {show&&<form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name"  className='name'/>

        <label htmlFor="price">Price:</label>
        <input type="number" id="price"  />

        <label htmlFor="paragraph">Paragraph:</label>
        <input id="paragraph"  className='paragraph' type='text'/>

        <label htmlFor="imageUrl">Image URL:</label>
        <input type="text" id="imageUrl" className='imageUrl' />

      <button type="submit">Add Item</button>
      </form>
}
    </div>
        <div className='itemscard section__padding'>
        {items&&items.map((data)=>{
            return (
                <CardItem imageUrl={data.imageUrl} description={data.paragraph} price={data.price} title={data.name} id={data.id} getItem={getItem} useritemID={data.useritemID} />
            )
        })}
        </div>

        <Footer/>
    </div>
  )
}

export default Item