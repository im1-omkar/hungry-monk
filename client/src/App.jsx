import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import Hero from './components/Hero';
import Header from './components/Header';
import Footer from './components/Footer';
import Feature from './components/Feature';
import About from './components/About';
import VideoSection from './components/Video';
import MenuSection from './components/MenuSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <Header></Header>
      <Hero></Hero>
      <Feature></Feature>
      <About></About>
      <VideoSection></VideoSection>
      <MenuSection></MenuSection>
      <Footer></Footer>
      
    </div>
  )
}

export default App
