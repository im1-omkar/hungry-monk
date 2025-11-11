import React from 'react'
import './index.css';

function Navbar({}) {
  return (
    <nav className="navbar flex flex-row gap-1.0">
      <a href="/" className="flex-1 oswald"> Home</a>   
      <a href="/about" className="flex-1 oswald"> About</a>
      <a href="/contact" className="flex-1 oswald"> Contact</a>
    </nav>
  );
}
export default Navbar;
