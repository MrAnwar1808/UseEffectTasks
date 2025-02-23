
import React, { useEffect } from 'react';

function Example1() {
  useEffect(() => {
    console.log("Component mounted!");
  }, []);

  return(
  <div>
    <h1>Welcome to useEffect topic!</h1>
  </div>

)}

export default Example1;
