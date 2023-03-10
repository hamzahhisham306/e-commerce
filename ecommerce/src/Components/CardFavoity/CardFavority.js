import React from 'react';
import "../Card/card.css";

import { useDispatch } from 'react-redux';
import { increase, setOrders } from '../../store/cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Card = ({ imageUrl, title, description, price, id,getFavority }) => {
    const dispatch = useDispatch();
    const handlerBuy = (name, salary, imageUrl, id) => {
        dispatch(increase());
        dispatch(setOrders({ name: name, salary: salary, imageUrl: imageUrl, id: id }));
        toast.success(` added to the cart!`, {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    }
   
const deleteFromFavort=async(id)=>{
  await axios.delete(`http://localhost:4000/favorite/${id}`).then(()=>{
    getFavority();
  })
}
        return (
            <>
                <div className="card" key={id}>
                    <ToastContainer />
                    <img src={imageUrl?.includes('http') ? `${imageUrl}` : `https://${imageUrl}`} alt={title} className="card-img" />
                    <div className="card-content">
                        <h2 className="card-title">{title}</h2>
                        <p className="card-description">{description}</p>
                        <div className='info-card'>
                            <h2 className='price'>$ {price}</h2>
                            <button  onClick={()=>deleteFromFavort(id)}>Remove from favority</button>
                            <button onClick={() => handlerBuy(title, price, imageUrl, id)}>Buy Now</button>
                        </div>
                    </div>
                </div>
            </>

        );
    };

export default Card;