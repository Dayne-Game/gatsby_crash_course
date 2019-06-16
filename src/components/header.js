import React from 'react';
import { Link } from 'gatsby';
import '../CSS/navbar.css';
import Logo from '../images/logo.png';

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <div className="logo" style={LogoStyle}>
          <img src={Logo} style={imgStyle} alt="Logo" />
        </div>
      </Link>
      <div className="link-box" id="link-box">
        <Link className="links" to="/news">NEWS</Link>
        <Link className="links" to="/teams">TEAMS</Link>
        <Link className="links" to="/results">RESULTS</Link>
        <Link className="links" to="/hospitality">HOSPITALITY</Link>
        <Link className="links" to="/contact">CONTACT US</Link>
        <Link className="links" to="/faqs">FAQS</Link>
        <Link className="links" to="/tickets">TICKETS</Link>
        <Link className="links signin" to="/signin">SIGN IN</Link>
      </div>
      <button className="toggler" onClick={handleClick}>
        <div className="line line-1"></div>
        <div className="line line-2"></div>
        <div className="line line-3"></div>
      </button>
    </div>
  )
}

function handleClick(e) {
  e.preventDefault();
  var x = document.getElementById("link-box");
  if (x.className === "link-box") {
    x.className += " responsive";
  } else {
    x.className = "link-box";
  }
}

const LogoStyle = {
  height: '60px',
  width: '60px',
  float: 'Left',
  marginTop: '5px'
}

const imgStyle = {
  height: '60px'
}