import React from 'react';
import './App.css';
import CharacterCard from './Components/Card/Card';
import Header from './Components/Header/Header';

function App() {
  return (
    <>
    <div className="App">
      <Header/>
      <div className='cards-display'>
      <CharacterCard/>
      </div>      
    </div>

    </>
  );
}

export default App;
