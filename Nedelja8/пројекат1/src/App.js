import React from 'react';
import './App.css';
import { PastLList } from './components/past-l-list';
import { UpcomingLList } from './components/upcoming-l-list';
import { Header } from './layout/header';

function App() {
  return (
    <div className="App">
      <Header />
      <PastLList />
      <UpcomingLList />
    </div>
  );
}

export default App;
