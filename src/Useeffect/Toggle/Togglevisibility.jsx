

import React, { useState } from 'react';

function ToggleVisibility() {
  const [isVisible, setIsVisible] = useState(false); 

  const toggleVisibility = () => {
    setIsVisible(!isVisible); 
  };

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide' : 'Show'} Message
      </button>
      {isVisible && <p>This is a toggled message!</p>}
    </div>
  );
}

export default ToggleVisibility;