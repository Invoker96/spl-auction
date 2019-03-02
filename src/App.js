import React, { Component } from 'react';
import banner from './images/Banner.png';
import './App.css';
import Header from './components/Header/Header';
import PlayerForm from './components/PlayerForm/PlayerForm';
import TeamStatus from './components/TeamStatus/TeamStatus';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
        <p className="bg-logo">
          <img className="img-logo" src={ banner } alt="logo"/>
        </p>
        <PlayerForm name='Siddhartha Nanda' basePrice="400" bidPrice="800" />
        <TeamStatus />
      </div>
    );
  }
}

export default App;
