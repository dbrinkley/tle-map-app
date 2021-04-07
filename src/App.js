import React from 'react';
import './App.css';
import InteractiveMap from './InteractiveMap';
import exhibitorObj from './ExhibitorObj';


function App() {
  return (
    <div className="App">
      <InteractiveMap exhibitors={exhibitorObj}/>
    </div>
  );
}

export default App;
