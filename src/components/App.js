import React from 'react';
// import Bootstrap from 'bootstrap';
import './App.css';
import './landing-page'
import Navbar from './navbar';
import LandingPage from './landing-page';
import Hotmelt from './nav-list-pages/hotmelt';
import Liquid from './nav-list-pages/liquid';
import PressureSensitive from './nav-list-pages/pressure-sensitive';
import Products from './nav-list-pages/products';
import Equipment from './nav-list-pages/equipment';
import Contact from './nav-list-pages/contact';

function App() {
  return (
    <div>
      <Navbar />
      {/* <LandingPage /> */}
      {/* <Hotmelt /> */}
      {/* <PressureSensitive /> */}
      {/* <Liquid /> */}
      {/* <Products /> */}
      {/* <Equipment /> */}
      <Contact />
    </div>
  );
}

export default App;
