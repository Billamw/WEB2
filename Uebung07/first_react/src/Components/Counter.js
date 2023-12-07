import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState('white');

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    // Funktion, um eine zufällige Hintergrundfarbe zu generieren
    const randomColor = () => {
      const colors = ['#f44336', '#2196f3', '#4caf50', '#ffeb3b', '#9c27b0'];
      const randomIndex = Math.floor(Math.random() * colors.length);
    //   const r = Math.random()
    //   const g = Math.random()
    //   const b = Math.random()
    //   const col = "rgb()"
    //   const bodyElement = document.getElementById("body")
    //   bodyElement.style.backgroundColor = colors[randomIndex]
      return colors[randomIndex];
    };

    setBackgroundColor(randomColor());
  }, [count]);

  return (
    <div style={{ display: 'grid', placeItems: 'center', backgroundColor: backgroundColor }}>
      <h1>{count}</h1>
      <button onClick={increment}>Up</button>
      <button onClick={decrement}>Down</button>
    </div>
  );
};

export default Counter;
