import React from 'react';
import './picuter.css';


const data = [
    {
        id: 1,
        image: 'https://preview.colorlib.com/theme/cozastore/images/product-01.jpg.webp',
        title: 'Esprit Ruffle Shirt',
        price: 16.64,
        category: 'women',
    },
    {
        id: 2,
        image: 'https://preview.colorlib.com/theme/cozastore/images/product-04.jpg.webp',
        title: 'Classic Trench Coat',
        price: 75.00,
        category: 'women',
    },
    {
        id: 3,
        image: 'https://preview.colorlib.com/theme/cozastore/images/product-14.jpg.webp',
        title: 'Pretty Little Thing',
        price: 54.79,
        category: 'women',
    },
    {
        id: 4,
        image: 'https://preview.colorlib.com/theme/cozastore/images/product-03.jpg.webp',
        price: 25.50,
        title: 'Vintage Inspired Classic',

        category: 'man',
    },
    {
        id: 5,
        image: 'https://preview.colorlib.com/theme/cozastore/images/product-11.jpg.webp',
        title: 'Herschel supply',
        price: 64.16,
        category: 'man',
    },
    {
        id: 6,
        image: 'https://preview.colorlib.com/theme/cozastore/images/product-06.jpg.webp',
        title: 'Vintage Inspired Classic',
        price: 93.20,
        category: 'watch',
    },
    {
        id: 7,
        image: 'https://preview.colorlib.com/theme/cozastore/images/product-15.jpg.webp',
        title: 'Mini Silver Mesh Watch',
        price: 86.85,
        category: 'watch',
    }
]
function Picuter() {
    return (
        <div className='picuters section__padding'>
            {data.map((item) => {
                return (
                    <div className='card' key={item.id}>
                        <img src={item.image} alt='card' />
                        <h5>{item.title}</h5>
                        <p>$ {item.price}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Picuter