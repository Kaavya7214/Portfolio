import React from 'react';
import './App.css'
import Header from './components/Header';
import About from './components/About';
import SkillsPage from './components/Skills';
import Projects from './components/Project';
import Contact from './components/Contact';


function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <Header />
      <About />
      <SkillsPage />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;