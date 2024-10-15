import React from 'react';
import './styles/portfolio.css';

// Componentes (crea archivos separados para cada uno)
function Navbar() {
  // ... código del navbar ...
}

function Hero() {
  // ... código del hero ...
}

function About() {
  // ... código del about ...
}

function Portfolio() {
  // ... código del portfolio ...
}

function Contact() {
  // ... código del contact ...
}

function Footer() {
  // ... código del footer ...
}

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;