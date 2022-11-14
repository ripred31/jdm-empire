import React from 'react';
import Header from './Components/header';
import Homepage from './pages/Homepage';
import './default.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="main">
        <Homepage/>
      </div>
    </div>
  );
}

export default App;
