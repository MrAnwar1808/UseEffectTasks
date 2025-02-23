
import React, { useEffect, useState } from "react";
import './createform.css'

function Creataccount(){

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reenterPassword, setReenterPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState(""); 
  const [formData, setFormData] = useState([]);


  useEffect(() => {
    console.log(`
      First Name: ${firstName},
      Last Name: ${lastName},
      Email: ${email},
      Password: ${password},
      Re-enter Password: ${reenterPassword},
      Phone Number: ${phoneNumber},
      Address: ${address}
    `);
  }, [firstName, lastName, email, password, phoneNumber, reenterPassword, address]); 

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

    const newData = {
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
    };
    setFormData((prevData) => [...prevData, newData]);

  
    setError("");
    alert("Form submitted successfully!");
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setReenterPassword("");
    setPhoneNumber("");
    setAddress("");


  };

  return (
    <div>
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

      <h3>Submitted Data:</h3>
      <table border="1" style={{ width: "100%", marginTop: "20px", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {formData.map((data, index) => (
            <tr key={index}>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              <td>{data.email}</td>
              <td>{data.phoneNumber}</td>
              <td>{data.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    
    </div>
  );
}
  

export default Creataccount