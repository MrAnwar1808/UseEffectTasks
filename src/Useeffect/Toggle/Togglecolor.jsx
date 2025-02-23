
import React, { useState, useEffect } from 'react';

function Togglecolor() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
   
    if (isDarkMode) {
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white'
      document.button.text = 'Darkmode'
    } else {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black'
    }
  }, [isDarkMode]);

  return (
    <div>
      <h1>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</h1>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        Toggle Mode
      </button>
    </div>
  );
}

export default Togglecolor;
