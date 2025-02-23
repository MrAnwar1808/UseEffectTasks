
import React, { useState } from "react";
import './Employee.css'

function Example7(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Email: ",email)
        console.log("Password: ", password)
        
        

        setError("")


        
        if(!email.includes("@gmail.com")){
            setError('invalid e-mail')
            return;
        }

        if(password.length < 6){
            setError('Atleast 6 characters long required')
            return;
        }
        

    setEmail("");
    setPassword("");
    
       
    }

    return(

        <div>
           <form onSubmit={handleSubmit} >
           <h1>Login Form</h1>
            <label htmlFor="email">Email: </label>
            <input type="email"
                   value={email}
                   placeholder="Enter email..."
                   onChange={(event) => setEmail(event.target.value)} 
            />

            <label htmlFor="password">Password: </label>
            <input type="password"
                   value={password}
                   placeholder="Enetr Password"
                   onChange={(event) => setPassword(event.target.value)}
            />

            <p>{error}</p>

            <button type="submit">Submit</button>
           </form>
        
        </div>

    )

}

export default Example7