import './App.css';
import Header from "./component/Header"
import Content from './component/Content';
import Footer from './component/Footer';
import Cos from './component/Cos'; // Importă componenta Cos
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Produse from './component/Produse';
import Contact from './component/Contact';
import Promo from './component/Promo';
import { CartProvider } from './component/CartContext'; 

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/Produse" element={<Produse />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Promo" element={<Promo />} />
          <Route path="/Cos" element={<Cos />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
