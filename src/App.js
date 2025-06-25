import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import './App.css';
import Reviews from './pages/Reviews';

const App = () => (
  <Router>
    <Header />
    <main className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<Projects />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </main>
    <Footer />
  </Router>
);

export default App;