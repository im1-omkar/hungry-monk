import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import Hero from './components/Hero';
import Header from './components/Header';
import Footer from './components/Footer';
import Feature from './components/Feature';
import About from './components/About';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <Header></Header>
      <Hero></Hero>
      <Feature></Feature>
      <About></About>
      <Footer></Footer>
    </div>
  )
}

export default App
