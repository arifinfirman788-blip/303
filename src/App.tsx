import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Background from './components/Background';
import Operations from './components/Operations';
import Features from './components/Features';
import AgentMatrix from './components/AgentMatrix';
import Partners from './components/Partners';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-secondary-900 selection:bg-primary-100 selection:text-primary-900">
      <Navbar />
      <main>
        <Hero />
        <Background />
        <Operations />
        <Features />
        <AgentMatrix />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}

export default App;
