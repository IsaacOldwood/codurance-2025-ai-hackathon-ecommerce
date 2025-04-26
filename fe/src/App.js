import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Cart from './Cart';

function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the main page of the app.</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cart">Cart</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
