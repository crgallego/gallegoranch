import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import StoryPage from './pages/StoryPage';
import Success from './pages/Success';
import Canceled from './pages/Canceled';
import Login from './pages/Login';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';

function App() {
  useEffect(() => {
    document.title = 'Gallego Ranch Tallow | Pure Fuel from the Ranch';
  }, []);

  return (
    <Router>
      <div className="font-body text-charcoal">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/our-story" element={<StoryPage />} />
          <Route path="/success" element={<Success />} />
          <Route path="/canceled" element={<Canceled />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
        <ScrollTop />
      </div>
    </Router>
  );
}

export default App;