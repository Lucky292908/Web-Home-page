// import React from "react";

// import "./Navbar.css";
// const navbar = () => {  
//   return (
//     <nav>
//             <div className="logo">
//                 {/* Your logo goes here */}
//                 <img src={Luck} alt="Logo" />
//             </div>
            
//             <a href="#features">Features</a>
//             <a href="#faq">FAQ</a>
//             <a href="#pricing">Pricing</a>
//             <a href="#testimonials">Testimonials</a>
//             <button className="buy-button"><b>Buy Template</b></button>
//         </nav>

//   );
// };

// export default navbar;
// Navbar.jsx




import Luck from "../../img/Luck.png";
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="navbar">
      <div className="logo"> <img src={Luck} alt="Logo" /></div>
      <nav className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
        <a href="#">Features</a>
        <a href="#">FAQ</a>
        <a href="#">Pricing</a>
        <a href="#">Testimonials</a>
        
        <a href="https://www.youtube.com/"> <button className="buy-button"><b>Buy Template</b></button></a>
       
      </nav>
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>&#9776;</div>
    </header>
  );
};

export default Navbar;
