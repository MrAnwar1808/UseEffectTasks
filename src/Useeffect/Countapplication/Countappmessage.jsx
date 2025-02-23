
import React, { useState } from "react";
import ChildCount from "./ChildCount";
import './Countdisplay.css'


function ParentCountapplication(){

    const [count, setCount] = useState(0)
    // const message = 'welcome to the count application page!'

    const message = () => {
        if (count === 0){
             return "Let's start counting!"
        }
        if (count === 20){
             return "Maximum count reached!"
        }
        return "Counting Started!";
    };

    const increment = () => {
        if(count < 20){
            setCount(count + 2)
            
        }
    }

    const decrement = () => {
        if(count > 0){
            setCount(count - 2)
            
        }
    }

    const reset = () => {
        setCount(0)
        
    }
    return(
        <div className="container">
            <h1>welcome to the count application page</h1>
      
            <ChildCount 
            
            count = {count}
            message={message()}
            increment={increment}
            decrement={decrement}
            reset={reset}
           
            />

           
        </div>
    )
}

export default ParentCountapplication