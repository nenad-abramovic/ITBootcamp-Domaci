import React from 'react';
import './App.css';
import { Header } from './layout/header';
import { Footer } from './layout/footer';
import { Content } from './layout/content';

function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      <Content />
      <hr />

      <Footer />
    </div>
  );
}

export default App;
