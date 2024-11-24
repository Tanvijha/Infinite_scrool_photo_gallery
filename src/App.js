import React from 'react';
import PhotoGrid from './components/PhotoGrid/PhotoGrid';
import './styles/global.css';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <header>
        <h1>Infinite Photo Gallery</h1>
      </header>
      <main>
        <PhotoGrid />
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Photo Gallery</p>
      </footer>
    </div>
  );
};

export default App;
