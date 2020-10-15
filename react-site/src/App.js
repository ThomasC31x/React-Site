import React from 'react';
import logo from './me.jpg';
import cover from './cover.jpg';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Projects from './Projects.js';
import About from './About.js';
import Contact from './Contact.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
    
        <div className="navigation">

        <img src={cover} className="img-cover" />

          <h1 className="title">Le Portfolio<br/>par <b>Thomas CANNET</b></h1>

          <img src={logo} className="logo-me" />

          <div className="navigation-sub">
            <Link to="/" className="item">Présentation</Link>
            <Link to="/projects" className="item">Mes projets</Link>
            <Link to="/contact" className="item">Me contacter</Link>
          </div>
        </div>

        <Route exact path="/" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />

      </div>
    </BrowserRouter>
  );
}

export default App;
