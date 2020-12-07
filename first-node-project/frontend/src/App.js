import React from 'react';
import Header from './components/Header';

/**
 * Sempre criaremos um componente quando queremos reaproveitar um código, em vários lugares de uma aplicação.
 * Lembre-se que no React não são permitidos elementos adjacentes. Nesses casos precisamos utilicar um Fragment.
 * 
 * Conceitos fundamentais de react:
 */

function App() {
  return (
    <>
      <Header />
      <Header />
    </>
  );
}

export default App;