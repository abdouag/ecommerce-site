import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Products from './components/Products';
import './App.css';
import Home from './components/Home'; 
import Header from './components/Header';
import Contact from './components/Contact'
import logo from '/Users/macbookpro/ecommerce-site/src/assets/Ag-Digital.png';



function App() {
  return (
      <div className="App">
          <Router>
              <Header />

              <main>
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/products" element={<Products />} />
                      <Route path="/contact" element={<Contact />} />
                      {/* Ajoutez d'autres routes si nécessaire */}
                  </Routes>
              </main>
          </Router>
      </div>
  );
}

export default App;