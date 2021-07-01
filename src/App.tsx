import React from 'react';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="randomify__title-section">
          <h1 className="randomify__title-section__title">Randomify</h1>
          <p className="randomify__title-section__subsection">
            Generate a random playlist based on the provided artists and given time
          </p>
        </div>
        
      </div>
    );
  }
}
