import React, { useState } from 'react';
import "./counter.scss"

function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className='renderElement'>
      <main className='app'>
        <label className='countLabel'>{count}</label><br />
        <div className='countButtons'>
          <button className='countBtn' onClick={decrementCount}>-</button>
          <button className='countBtn' onClick={resetCount}>AC</button>
          <button className='countBtn' onClick={incrementCount}>+</button>
        </div>
      </main>
    </div >
  );
}

export default Counter;