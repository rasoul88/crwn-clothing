import React from 'react';
import Particles from 'react-particles-js';
import './App.css';
import HomePage from './pages/homepage.component';

const particlesOptions={
  particles: {
    number:{
      value:30,
      density:{
        enable:true,
        value_area:200
      }
    }
  }
}

function App() {
  return (
    <div className='App'>
      <Particles className='particles' params={particlesOptions}/> 
      <HomePage />
    </div>
  );
}

export default App;
