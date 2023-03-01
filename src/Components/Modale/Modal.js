import React from 'react'
import './modal.css';
import { setClose, stateAuth, setShowForm } from '../../store/auth';
import { statecart } from '../../store/cart';
import { increase, setOrders , increaseOrder, decrease} from '../../store/cart';
import { useSelector, useDispatch } from 'react-redux'
function Modal() {
    const dispatch = useDispatch();
    const stateShow = useSelector(stateAuth);
    const arrayOrders = useSelector(statecart);
    const handlerBuy = (name, salary, imageUrl) => {
        dispatch(increase());
        dispatch(setOrders({ name: name, salary: salary, imageUrl: imageUrl }));
    }
    const handlerCart=(item)=>{
        dispatch(decrease());
        dispatch(increaseOrder({name:item.name}))
    }
    const classMinu=arrayOrders.start<=0?'minus_zero':'minus';
   const handlerOrder=()=>{
    dispatch(setShowForm());
    dispatch(setClose());
   }
    return (
        <div>
            {stateShow.showModal && (
                <div className='modal animate__animated animate__fadeInDown'>
                    <div className='modal-content'>
                        <div className='shopping-cart'>
                            <h2>Your Shooping Cart</h2>
                            <table>
                                <thead>
                                    <th></th>
                                    <th>Product Name</th>
                                    <th>Price</th>
                                    <th>number</th>
                                    <th>Add more</th>
                                </thead>
                                {arrayOrders.cartOrders.length!==0&& arrayOrders.cartOrders.map((item, index) => {
                                    return (
                                        <tbody key={index}>

                                            <td><img src={`https://${item.imageUrl}`} width='130' height='120' alt='pho' /></td>
                                            <td>{item.name}</td>
                                            <td>$ {item.salary}</td>
                                            <td>{item.nums}</td>
                                            <td><button className='plus' onClick={() => handlerBuy(item.name, item.salary)}>+</button>
                                                <button className={classMinu} onClick={()=>handlerCart(item)}>-</button>
                                             </td>
                                        </tbody>
                                    )
                                })}
                                </table>
                                <h3>Total price = $ {arrayOrders.cartOrders.length!==0&&arrayOrders?.cartOrders?.map((item)=>{
                                    return item.salary*item.nums;
                                }).reduce((a,b)=>a+b)}</h3>
                                <button className='sent-order' onClick={()=>handlerOrder()}>sent Order</button>
                        </div>
                        <button onClick={() => dispatch(setClose())} className='modal-close'>Close</button>

                    </div>
                </div>
            )}
        </div>
    )
}

export default Modal