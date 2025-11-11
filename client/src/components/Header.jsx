import React from 'react'
import './index.css'
import Navbar from './NavBar.jsx';
import logo from '../assets/logo.png';
import ContactButton from './ContactButton.jsx';


const Header = () => {
  return (
    <div className="w-full h-25 flex flex-row items-center">
        
        <div className="flex-3 ">
          <img src={logo} className="h-25 ml-50"/>
        </div>
        <div className="flex-2">
          <Navbar/>
        </div>
        <div className="flex-3 flex flex-row justify-center">
          <ContactButton></ContactButton>
        </div>
    </div>
  )
}

export default Header