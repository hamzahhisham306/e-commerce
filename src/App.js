import Header from './Components/Navbar/Header/Header';
import './App.css';
import { useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Galary from './Components/Navbar/Galary/Galary';
import Product from './Components/Navbar/Products/Product';
import Footer from './Components/Footer/Footer';
import '../src/Components/Product/Product.css';
import Modal from './Components/Modale/Modal';
import Form from './Components/ModaleForm/Form';
import cookies from 'react-cookies';
import { setLogin,setLogout } from './store/auth';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (cookies.load("token")) {
         dispatch(setLogin());
    }
    else{
      dispatch(setLogout())
    }
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Galary />
      <Product />
      <Modal />
      <Form />
      {/* <Picuter/> */}
      {/* <Shoes/> */}
      <Footer />
    </div>
  );
}

export default App;
