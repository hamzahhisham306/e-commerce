import React from 'react'
import './galary.css';
import img1 from '../../../assets/banner-04.jpg.webp';
import img2 from '../../../assets/banner-05.jpg.webp';
import img3 from '../../../assets/banner-06.jpg.webp';

const data=[
    {
        id:1,
        title:"Women",
        par:"spring 2018",
        image:img1
    },
    {
        id:2,
        title:"Men",
        par:"Spring 2018",
        image:img2
    },
    {
        id:3,
        title:"Accessories",
        par:"New Trend",
        image:img3
    }
];

function Galary() {
  return (
    <div className='galary section__padding'>
        {data.map((data,id)=>{
            return (
                <div className='box'key={id}>
                <div className='text_box'>
                 <h2>{data.title}</h2>
                 <p>{data.par}</p>
                </div>
                <img src={data.image} alt="data"/>
              </div>
            )
        })}
      

    </div>
  )
}

export default Galary