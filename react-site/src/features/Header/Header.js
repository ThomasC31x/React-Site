import React from 'react';
import './Header.css';
import logo from '../../me.jpg';
import cover from '../../cover.jpg';
import { Link } from 'react-router-dom'; 

import github from '../icons/github.png';
import linkedin from '../icons/linkedin.svg';
 
function Header(props) {
  return (
    <div className="navigation">

        <img src={cover} className="img-cover" />

        <h1 className="title">Le Portfolio<br/>par <b>Thomas CANNET</b></h1>

        <img src={logo} className="logo-me" />

        <div className="navigation-sub">
            <Link to="/" className="item">Présentation</Link>
            <Link to="/projects" className="item">Mes projets</Link>
            <Link to="/contact" className="item">Me contacter</Link>
        </div>

        <div className="list-contact">
            <a href="https://github.com/ThomasC31x" target="_blank"><img className="icon bg-white" src={github} alt="Github" /></a>
            <a href="https://www.linkedin.com/in/thomascannet/" target="_blank"><img className="icon" src={linkedin} alt="Linkedin" /></a>
        </div>
    </div>
  )
}
 
export default Header;