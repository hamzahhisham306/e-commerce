import React, { useState } from 'react';
import './carditem.css';
import Modal from '../updatemodal/Update'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import cookies from 'react-cookies';
import Modalimg from '../Imgmodal/Imgmodal';

const Card = ({ imageUrl, title, description, price, id, getItem,useritemID }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
      setIsOpen(!isOpen);
    };
    const handlderDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:4000/item/${id}`).then(() => {
                getItem();
            })
        } catch (error) {
            console.log(error);
        }
    }
    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }
    return (
        <>
            <div className="card" >
                <img onClick={()=>toggleModal()} src={imageUrl?.includes('http') ? `${imageUrl}` : `https://${imageUrl}`} alt={title} className="card-img" />
                <div className="card-content">
                    <h2 className="card-title">{title}</h2>
                    <p className="card-description">{description}</p>
                    <div className='info-card'>
                        <h2 className='price'>$ {price}</h2>
                        {Number(cookies.load('userId')) === useritemID && <button onClick={() => handlderDelete(id)}>delete</button>}
                        {Number(cookies.load('userId')) === useritemID &&<button onClick={() => openModal()}>update</button>}
                    </div>
                </div>
            </div>
            {isModalOpen && <Modal onClose={closeModal} id={id} getItem={getItem}/>}
            {isOpen&&<Modalimg isOpen={isOpen} toggleModal={toggleModal} imageSrc={imageUrl?.includes('http') ? `${imageUrl}` : `https://${imageUrl}`}/>}

        </>

    );
};

export default Card;