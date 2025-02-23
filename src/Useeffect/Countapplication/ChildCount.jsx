
import React from "react";
import Grandchildcount from "./Grandchildcount";
import Grandchildmessage from "./Grandchildmessage";

function ChildCount({count, message, increment, decrement, reset}){

    return(

        <div>
            <Grandchildmessage message={message} />
            <Grandchildcount count={count} />
           
            <button onClick={increment} disabled = {count === 20}>increment</button>
            <button onClick={decrement} disabled = {count === 0}>Decrement</button>
            <button onClick={reset}>reset</button>

        </div>
    )
}

export default ChildCount