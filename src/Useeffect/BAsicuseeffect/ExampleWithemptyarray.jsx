
import React, { useState, useEffect } from 'react';

function ExampleWithEmptyArray() {
  const [count, setCount] = useState(0);


  useEffect(() => {
    console.log('Component mounted and the Effect ran only once in the initial stage)');
  }, []); // Empty array means it runs only once

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default ExampleWithEmptyArray;
