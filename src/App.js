import React from 'react';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Skills from './components/skills/Skills';
import Testimonial from './components/testimonial/Testimonial';

function App() {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <div className="container-fluid">
        <br />
        <br />
        <Home />
        <br />
        <Skills />
        <br />
        <br />
        <br />
        <About />
        <br />
        <Testimonial />
        <br />
        <br />
        <Footer />
      </div>
    </>
  );
}

export default App;
