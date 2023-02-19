import React, { useState , useEffect} from 'react';
import './header.css';
import 'animate.css';
import img1 from '../../../assets/slide-01.jpg.webp';
import img2 from '../../../assets/slide-02.jpg.webp';
const items = [
    {
      id: 1,
      title: 'MEN NEW Collection',
      fashion:"JACKETS & COATS",
      button:"SHOP NOW",
      image: img1,
    },
    {
      id: 2,
      title: 'Women Collection',
      fashion:"JACKETS & COATS",
      image: img2,
      button:"SHOP NOW",
    },
  ];
  
  
function Header() {
    const [currentIndex, setCurrentIndex] = useState(0);
    

    const handlePrev = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? items.length - 1 : prevIndex - 1
      );
    };
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    };
    useEffect(() => {
      const timer = setTimeout(() => {
        handleNext();
      }, 5000);
  
      return () => {
        clearTimeout(timer);
      };
    }, [currentIndex]);
  
  return (
    <div className='carousel'>
      <div className='text'>
      <h1 className={currentIndex?"animate__animated animate__fadeInLeft":"animate__animated animate__fadeInRight"}>{items[currentIndex].title}</h1>
      <h2 className={currentIndex?'animate__animated animate__fadeInRight':"animate__animated animate__fadeInLeft"}>{items[currentIndex].fashion}</h2>
      <button className={currentIndex?"animate__animated animate__flip":"animate__animated animate__flipInY"}>{items[currentIndex].button}</button>
      </div>
    <img src={items[currentIndex].image} alt={items[currentIndex].text}/>

    {/* <button onClick={ handlePrev}>Prev</button>
    <button onClick={handleNext}>Next</button> */}
  </div>
  )
}

export default Header