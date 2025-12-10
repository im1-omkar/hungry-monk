import React, { useEffect, useState } from 'react';
import './index.css';
import Navbar from './NavBar.jsx';
import brandIcon from '../assets/hungry_monk_logo-removebg-preview.png';
import ContactButton from './ContactButton.jsx';

const Header = ({ cartCount = 0, onContactClick, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigate = (id) => {
    onNavigate?.(id);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="w-full py-4 px-6 flex flex-row items-center justify-between bg-black/60 backdrop-blur-sm fixed top-0 left-0 z-20">
      <div className="flex items-center gap-3">
        <img src={brandIcon} alt="Hungry Monk logo" className="h-12 w-12 object-contain" />
        <span className="text-white font-bold text-lg oswald">Hungry Monk</span>
      </div>
      <div className="hidden md:block flex-1 mx-6">
        <Navbar onNavigate={handleNavigate} />
      </div>
      <div className="flex flex-row justify-center">
        <ContactButton
          cartCount={cartCount}
          onContactClick={onContactClick}
          onMenuClick={() => setIsMenuOpen(true)}
        />
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className="absolute right-0 top-0 h-full w-64 bg-white p-6 shadow-2xl flex flex-col gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            <Navbar
              onNavigate={handleNavigate}
              className="flex-col items-start text-black gap-4 bg-amber-50"
              buttonClassName="text-left w-full text-gray-900 font-semibold hover:text-[#e53945]"
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;