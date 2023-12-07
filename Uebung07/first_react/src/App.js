import React from 'react';
import './App.css';
import HelloWorls from './Components/HelloWorls.js';
import MyButton from './Components/MyButton.js';
import Counter from './Components/Counter.js';


const App = () => {
  return (
    <div>
      <HelloWorls />
      <MyButton />
      <Counter></Counter>
    </div>

  )
}

export default App