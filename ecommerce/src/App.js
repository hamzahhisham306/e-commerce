import  Header from './Components/Navbar/Header/Header';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Galary from './Components/Navbar/Galary/Galary';
import Product from './Components/Navbar/Products/Product';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Header/>
     <Galary/>
     <Product/>
    </div>
  );
}

export default App;
