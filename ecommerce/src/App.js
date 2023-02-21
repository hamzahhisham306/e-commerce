import  Header from './Components/Navbar/Header/Header';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Galary from './Components/Navbar/Galary/Galary';
import Product from './Components/Navbar/Products/Product';
import Picuter from './Components/Picuters/Picuter';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Header/>
     <Galary/>
     <Product/>
     <Picuter/>
    </div>
  );
}

export default App;
