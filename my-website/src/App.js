import React, { useState } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  const [isBannerOpen, setBannerOpen] = useState(false);

  return (
    <div className="App">
      <Header />
      <Banner isOpen={isBannerOpen} toggleBanner={() => setBannerOpen(!isBannerOpen)} />
      <Experience />
      <Portfolio />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
