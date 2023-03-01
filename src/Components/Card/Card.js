import React from 'react';
import './card.css';
import { useDispatch } from 'react-redux';
import { increase, setOrders } from '../../store/cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import cookies from 'react-cookies';

const Card = ({ imageUrl, title, description, price, id }) => {
    const dispatch = useDispatch();
    const handlerBuy = (name, salary, imageUrl, id) => {
        dispatch(increase());
        dispatch(setOrders({ name: name, salary: salary, imageUrl: imageUrl, id: id }));
        toast.success(` added to the cart!`, {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    }
    const handlerFavority = async ( imageUrl, title, description, price) => {
        if(cookies.load('userId')){
        const userFavoity = {
            UserfavoriteId: cookies.load('userId'),
            title: title,
            description:description,
            price:price,
            imageUrl:imageUrl
        }
        await axios.post('https://backend-1m3m.onrender.com/favorite', userFavoity).then(() => {
            toast.success(` added to the your favority!`, {
                position: toast.POSITION.BOTTOM_RIGHT
            })
        }).catch((err)=>console.log(err));
    }
    else{
        toast.warning(`Please Login then you can add it to your favority`, {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    }
    }

        return (
            <>
                <div className="card" >
                    <ToastContainer />
                    <img src={imageUrl?.includes('http') ? `${imageUrl}` : `https://${imageUrl}`} alt={title} className="card-img" />
                    <div className="card-content">
                        <h2 className="card-title">{title}</h2>
                        <p className="card-description">{description}</p>
                        <div className='info-card'>
                            <h2 className='price'>$ {price}</h2>
                            <button onClick={() => handlerFavority(imageUrl, title, description, price)}>Add to favority</button>
                            <button onClick={() => handlerBuy(title, price, imageUrl, id)}>Buy Now</button>
                        </div>
                    </div>
                </div>
            </>

        );
    };

export default Card;