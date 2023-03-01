import React from 'react'
import './modal.css';
import { setHiddenForm, stateAuth } from '../../store/auth';
import { statecart } from '../../store/cart';
import { setEmptyArray } from '../../store/cart'
import cookies from 'react-cookies';
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Modal() {
    const dispatch = useDispatch();
    const stateShow = useSelector(stateAuth);
    const arrayOrders = useSelector(statecart);
    const totalPrice = arrayOrders.cartOrders.length !== 0 ? arrayOrders.cartOrders?.map((item) => item.salary * item.nums).reduce((a, b) => a + b) : 0;
    console.log(arrayOrders);
    const handleOrderSubmit = () => {
        toast.success("Your order has been sent!", {
          position: toast.POSITION.BOTTOM_RIGHT
        });
      };
    const handlerSubmit = async (e) => {
        e.preventDefault();
        const order = {
            UserId: cookies.load('userId'),
            prdunctId: arrayOrders.cartOrders?.map((item) => item.id),
            name: e.target.name.value,
            email: e.target.email.value,
            address: e.target.address.value,
            phone: e.target.phone.value,
            totalPrice: totalPrice
        };
        e.target.reset();
        dispatch(setEmptyArray());
        dispatch(setHiddenForm())
        await axios.post('https://backend-1m3m.onrender.com/order', order).then(res => {
            handleOrderSubmit()
        }).catch(err => console.log(err));
    }

    return (
        <div>
            {stateShow.showForm && (
                <div className='modal'>
                    <div className='modal-content'>
                        <div className='shopping-cart'>
                            <h2>Your Shooping Order</h2>
                            <form onSubmit={handlerSubmit}>
                                <label>name </label>
                                <input type='text' id='name' required />
                                <label>email</label>
                                <input type='email' required id='email' />
                                <label>address</label>
                                <input type='text' required id='address' />
                                <label>Phone </label>
                                <input type='text' required id='phone' />
                                <label>Total Price</label>
                                <input type='text' required disabled defaultValue={'$ ' + totalPrice} /><br></br>
                                {cookies.load('token') && <button type='submit' className='confirm' >Confirm</button>}
                                {!cookies.load('token') && <button className='confirm-dis' type='submit' disabled>Confirm</button>}
                                {!cookies.load('token') && <p style={{ color: 'red' }}>login to complete</p>}
                            </form>
                            <ToastContainer />

                        </div>
                        <button onClick={() => dispatch(setHiddenForm())} className='modal-close'>Close</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Modal