
import React, { useState } from "react";

function Loginpage({ setCurrentPage, setLoggedIn }){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    

    const handleSubmit = (e) => {
        e.preventDefault();
        
    const StoredData = JSON.parse(localStorage.getItem("user"));

    if(!StoredData){ 
        setError("Email not found, please signup")
        return;
    }

    if(email !== StoredData.email){
        setError("incorrect email")
        return;
    }

    if(password !== StoredData.password){
        setError("incorrect password")
        return;
    }

    setError("")
    // setLoggedIn(true);
    setCurrentPage("home")

    

    }
    const Signupbtn = () => {
        // setLoggedIn(true);
    setCurrentPage("signup")

    }


    return(

        <div className="container">
           <form on onSubmit={handleSubmit}>
            <h1>Login here!</h1>

            <label htmlFor="email">Email: </label>
            <input type="text"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password">Password: </label>
            <input type="text"
                   value={password}
                   onChange={(e) => setPassword(e.target.value)}
            />
            {error && <div style={{ color: "red" }}>{error}</div>}
           
            <button type="submit">Login</button>
            
           </form>

           <button onClick={Signupbtn}>Signup</button>

        </div>

    )
}

export default Loginpage