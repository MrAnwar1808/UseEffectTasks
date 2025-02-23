
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Example2(){

const [count, setCount] = useState(0);

useEffect(() => {
    console.log(`Count has changed to: ${count}`);
  }, [count]);  

    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}

export default Example2