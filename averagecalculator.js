// AverageCalculator.js
import React, { useState } from 'react';
import axios from 'axios';

const AverageCalculator = () => {
  const [windowPrevState, setWindowPrevState] = useState([]);
  const [windowCurrState, setWindowCurrState] = useState([]);
  const [numbers, setNumbers] = useState([]);
  const [average, setAverage] = useState('');

  const fetchNumbers = async (numberId) => {
    try {
      const response = await axios.get(http://localhost:3001/numbers/${numberId});
      const { windowPrevState, windowCurrState, numbers, avg } = response.data;
      setWindowPrevState(windowPrevState);
      setWindowCurrState(windowCurrState);
      setNumbers(numbers);
      setAverage(avg);
    } catch (error) {
      console.error('Error fetching numbers:', error);
    }
  };

  return (
    <div>
      <button onClick={() => fetchNumbers('p')}>Fetch Prime Numbers</button>
      <button onClick={() => fetchNumbers('f')}>Fetch Fibonacci Numbers</button>
      <button onClick={() => fetchNumbers('e')}>Fetch Even Numbers</button>
      <button onClick={() => fetchNumbers('r')}>Fetch Random Numbers</button>

      <h2>Window Prev State: {windowPrevState.join(', ')}</h2>
      <h2>Window Curr State: {windowCurrState.join(', ')}</h2>
      <h2>Numbers: {numbers.join(', ')}</h2>
      <h2>Average: {average}</h2>
    </div>
  );
};

export default AverageCalculator;