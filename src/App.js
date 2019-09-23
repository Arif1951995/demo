import React from 'react';
import './App.css';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Portfolio from './component/Portfolio'
import Header from './component/Header'
import './component/Header.css'
import './component/Portfolio.css'



function App() {
  return (
    <div className="App">
    
      <Header />
      <Portfolio />
      <Contact />
     <Footer />
    </div>
  );
}

export default App;
