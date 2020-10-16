import React from 'react';
import './Header.css';
import logo from '../../me.jpg';
import cover from '../../cover.jpg';
import { Link } from 'react-router-dom'; 
 
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

        <a class="btn btn-social-icon btn-twitter">
            <span class="fa fa-twitter"></span>
        </a>
    </div>
  )
}
 
export default Header;