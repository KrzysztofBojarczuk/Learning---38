import './App.css';
import React, { useState} from 'react';

function App() {

  const [bmi, setBmi] = useState();
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const handleBmi = () => {
    let val = ( [Number(weight) / Number(height) / Number(height)] * 10000)
    .toFixed(1);
    setBmi(val)
  }

  return (
    <div>
      <h1>Bmi cal</h1>
      <input
      className="css-input"
      type="text"
      onChange={(e) => setHeight(e.target.value)}
      placeholder="height in cm" 
      />
      <input
      className="css-input"
      type="text"
      onChange={(e) => setWeight(e.target.value)}
      placeholder="weight in kg"
      />
    <button className="myButton"
    onClick={handleBmi}>Calculate</button>
    <h1>{bmi}</h1>
    </div>
  );
}

export default App;
