import React from 'react'
import "./App.css";
import Header from "./components/header/Header";
import Home from './components/header/home/Home';
import About from './components/header/about/About';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';

const App = () => {
  return (
    <>
    <Header />

    <main className="main">
      <Home />
      <About />
      <Skills />
      <Contact />
    </main>

    <Footer />
    <ScrollUp />
    </>
  )
}

export default App