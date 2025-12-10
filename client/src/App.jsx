import { useState, useCallback } from 'react';
import './App.css';

import Hero from './components/Hero';
import Header from './components/Header';
import Footer from './components/Footer';
import Feature from './components/Feature';
import About from './components/About';
import VideoSection from './components/Video';
import MenuSection from './components/MenuSection';
import ContactSection from './components/ContactSection';

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [heroSubscribeStatus, setHeroSubscribeStatus] = useState(null);
  const [footerSubscribeStatus, setFooterSubscribeStatus] = useState(null);

  const scrollToSection = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const handleAddToCart = useCallback(() => {
    setCartCount((c) => c + 1);
  }, []);

  const makeSubscribeHandler = (setStatus) => (email) => {
    if (!email || !email.includes('@')) {
      setStatus({ type: 'error', message: 'Please enter a valid email.' });
      return;
    }
    // Simulated submit; replace with API integration as needed.
    setStatus({ type: 'success', message: 'Subscribed! Check your inbox.' });
  };

  return (
    <div>
      <Header
        cartCount={cartCount}
        onContactClick={() => scrollToSection('contact')}
        onNavigate={scrollToSection}
      />
      <Hero
        onOrderClick={() => scrollToSection('menu')}
        onSubscribe={makeSubscribeHandler(setHeroSubscribeStatus)}
        subscribeStatus={heroSubscribeStatus}
      />
      <Feature onOrderClick={() => scrollToSection('menu')} />
      <About />
      <VideoSection />
      <MenuSection onAddToCart={handleAddToCart} />
      <ContactSection id="contact" />
      <Footer
        onSubscribe={makeSubscribeHandler(setFooterSubscribeStatus)}
        subscribeStatus={footerSubscribeStatus}
      />
    </div>
  );
}

export default App;
