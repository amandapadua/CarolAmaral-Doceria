import React from 'react';
import './styles/global.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Cardapio from './components/Cardapio';
import FormularioEncomenda from './components/FormularioEncomenda';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Cardapio />
        <FormularioEncomenda />
      </main>
      <Footer />
    </>
  );
}