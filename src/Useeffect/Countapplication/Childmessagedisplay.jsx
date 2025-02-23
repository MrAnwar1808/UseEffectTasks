
import React from "react";

function Childmessagedisplay({message, count}){
    return(
        <div>
            <p>{message}</p>
            <p>Current Count: {count}</p>

        </div>
    )
}

export default Childmessagedisplay