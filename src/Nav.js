import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Nav.css"

function Nav() {
  const [ show, handleShow ] = useState(false);
  const navigate = useNavigate();


const transitionNavBar = () => {
    if (window.scrollY > 100) {
        handleShow(true);
    } else {
        handleShow(false)
    }
}

useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
}, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
        <div className="nav__contents">
            <img 
            onClick={() => navigate('/')}
            className="nav__logo"
            src="https://fontmeme.com/permalink/231123/ee7f67ac1cb5cb9f8692414eaf4cfadb.png" alt=""/>

            <img
            onClick={() => navigate('/profile')}
            className="nav__avatar" 
            src="https://img.freepik.com/free-vector/cute-corgi-dog-sitting-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-4181.jpg" alt=""/>
        </div>
    </div>
  );
}

export default Nav;