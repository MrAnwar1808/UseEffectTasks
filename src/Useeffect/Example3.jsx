
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Example3(){

    const [name, setName] = useState('')

    useEffect(() => {
        console.log(`The name you Entered: ${name}`)
    })
    return(
        <div>
        <h3>Enter Your name: {name}</h3>
        <input
            type="text"
            placeholder="Enter name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
        />

        </div>
    )
}

export default Example3