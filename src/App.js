import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Analytics from './components/Analytics';
import Newsletter from './components/Newsletter';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className='bg-black'>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Pricing />
      <Footer />
    </div>
  );
};

export default App;
