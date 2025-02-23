
import React, { useState, useEffect } from 'react';

function ExampleWithDependency() {
  const [count, setCount] = useState(0);
 

 
  useEffect(() => {
    console.log("No of time clicked:" , count);
  }, [count]); 

  return (
    <div>
      <h1>Count: {count}</h1>
  
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
 
    </div>
  );
}

export default ExampleWithDependency;
