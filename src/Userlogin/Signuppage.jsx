
import React, { useState } from "react";


function Signuppage({setCurrentPage}){

      const [firstName, setFirstName] = useState("");
      const [lastName, setLastName] = useState("");
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [reenterPassword, setReenterPassword] = useState("");
      const [phoneNumber, setPhoneNumber] = useState("");
      const [address, setAddress] = useState("");
      const [error, setError] = useState(""); 
   

      
        const handleSubmit = (e) => {
          e.preventDefault();
      
      
          if (!firstName || !lastName || !email || !password || !reenterPassword || !phoneNumber || !address) {
            setError("Please fill in all fields.");
            return;
          }
      
          if (password !== reenterPassword) {
            setError("Passwords do not match.");
            return;
          }
      
          if (password.length < 6) {
            setError("Password must be at least 6 characters long.");
            return;
          }
      
        
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(email)) {
            setError("Please enter a valid email address.");
            return;
          }
      
       
          const addressWordCount = address.split(/\s+/).length;
          if (addressWordCount > 100) {
            setError("Address cannot exceed 100 words.");
            return;
          }

          const userData = { firstName, lastName, email, password, phoneNumber, address };
          localStorage.setItem("user", JSON.stringify(userData));

        
        
   
    setError("");
    alert("Form submitted successfully!");
    setCurrentPage("login");
 

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setReenterPassword("");
    setPhoneNumber("");
    setAddress("");
    }
     const Loginbtn = () => {
        
    setCurrentPage("login")
      

     }
    return(
    <div className="container">
        <h2>Registration Form</h2>
        <form onSubmit={handleSubmit}>
        <div>
            <label>First Name:</label>
            <input 
            type="text" 
            value={firstName} 
            onChange={(e) => setFirstName(e.target.value)} 
            />
        </div>
       <div>
            <label>Last Name:</label>
            <input 
            type="text" 
            value={lastName} 
            onChange={(e) => setLastName(e.target.value)} 
            />
       </div>
       <div>
            <label>Email:</label>
            <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            />
      </div>
      <div>
            <label>Password:</label>
            <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            />
      </div>
      <div>
            <label>Re-enter Password:</label>
            <input 
            type="password" 
            value={reenterPassword} 
            onChange={(e) => setReenterPassword(e.target.value)} 
            />
     </div>
     <div>
            <label>Phone Number:</label>
            <input 
            type="text" 
            value={phoneNumber} 
            onChange={(e) => setPhoneNumber(e.target.value)} 
            />
     </div>
     <div>
            <label>Address:</label>
            <textarea 
            value={address} 
            onChange={(e) => setAddress(e.target.value)} 
            />
     </div>

            {error && <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>} 
     <div>
            <button type="submit">Submit</button>
     </div>

     </form>

     <button onClick={Loginbtn}>Login</button>

        </div>
    )
}

export default Signuppage