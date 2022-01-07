import React,{pages} from 'react';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import {
BrowserRouter as Router,
Routes,
Route,
Link,

} from "react-router-dom";
import Product from './components/Product';


function App() {
 
return (
  <Router>
    <div>
  <Routes>
    <Route exact path="/" element={<Home/>}/> 
    <Route  path="/Products/" element={<ProductList/>}/>

   <Route path="/login" element={<Login/>}/> 
          
   <Route path="/register" element={<Register/>}/> 
 
        

     

  
   </Routes>
   </div>
 

  
</Router>

  );
}

export default App;
