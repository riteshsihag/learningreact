import './App.css';
import { Component } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from './Component/navbar';
import Home from './Component/home';
import Contact from './Component/contact';
import About from './Component/about';
import NotFound from './Component/notfound';
class App extends Component {
  
  render() {
    
    return (
      <BrowserRouter>
      <Navbar/>
     
      <Routes>
      
      <Route exact path="/about" element={<About />}/>
      <Route exact path="/contact" element={<Contact />}/>
      <Route exact path="/" element={<Home />}/>
      <Route path='*' element={<NotFound />}/>
      </Routes>
     
      </BrowserRouter>
    );
  }
}

export default App;
