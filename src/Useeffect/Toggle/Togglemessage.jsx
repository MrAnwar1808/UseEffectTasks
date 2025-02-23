
import React, { useState } from 'react';

function ToggleMessage() {
  const [isHello, setIsHello] = useState(true); 

  const toggleText = () => {
    setIsHello(!isHello); 
  };

  return (
    <div>
      <h1>{isHello ? 'Hello' : 'Goodbye'}</h1>
      <button onClick={toggleText}>Toggle Text</button>
    </div>
  );
}

export default ToggleMessage;


