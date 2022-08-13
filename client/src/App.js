
import './App.css';
import Product from './Pages/Product';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ProductList from "./Pages/ProductList";
import Success from './Pages/Success';


import {
  BrowserRouter as Router ,
 Routes, Route 
} from "react-router-dom";
import SingleProduct from './Pages/SingleProduct';



 const App = () => {
 
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<Home/>} />
       
     
      <Route path="/products/:category" element={ <ProductList/>} />
       
     
      <Route path="/product/:id" element={<Product/>} />
      
      <Route path="/singeproduct" element={<SingleProduct/>} />
        
      <Route path="/cart" element={<Cart/> }/>
      <Route path="/success" element={  <Success/>}/>
      <Route path="/login" element={ <Login/>}/>
      <Route path="/register" element={  <Register/>}/>

        
    
        
      
    
    </Routes>
  </Router>
   
  );
}

export default App;
