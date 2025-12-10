import React from 'react'
import './index.css';

function Navbar({
  onNavigate,
  className = 'flex-row gap-4 text-white justify-center',
  buttonClassName = 'flex-1 oswald hover:text-yellow-300 transition',
}) {
  return (
    <nav className={`navbar flex ${className}`}>
      <button onClick={() => onNavigate?.('home')} className={buttonClassName}>Home</button>   
      <button onClick={() => onNavigate?.('about')} className={buttonClassName}>About</button>
      <button onClick={() => onNavigate?.('menu')} className={buttonClassName}>Menu</button>
      <button onClick={() => onNavigate?.('contact')} className={buttonClassName}>Contact</button>
    </nav>
  );
}
export default Navbar;
