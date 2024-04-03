import './counter.css';
import React, { useState } from 'react';

const initialValue = 0;

const Counter = () => {
  const [count, setCount] = useState(initialValue);

  const decrement = () => {
    setCount(count - 1);
  };

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div id='count' className="counter">
      <button id='btn-decr' onClick={decrement}>-</button>
      <span id='counter-value'>{count}</span>
      <button id='btn-incr' onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
