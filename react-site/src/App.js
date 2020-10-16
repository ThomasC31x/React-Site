import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; 
import Projects from './features/Projects/Projects.js';
import About from './features/About/About.js';
import Contact from './features/Contact/Contact.js';
import Footer from './features/Footer/Footer.js';
import Header from './features/Header/Header.js';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
    
        <Header />

        <Route exact path="/" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
