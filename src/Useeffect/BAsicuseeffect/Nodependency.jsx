
import React, { useEffect, useState } from 'react';

function ExampleWithoutArray() {
  const [count, setCount] = useState(0);

  // This will run after every render
  useEffect(() => {
    console.log('Component rendered or re-rendered');
  });

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default ExampleWithoutArray;
