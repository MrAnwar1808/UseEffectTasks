
import React from 'react';
import { useState } from 'react';
import './Maincontent.css'

function Maincontent() {

  const [city, setCity] = useState("");

  
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <div className='main'>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Anwar</td>
            <td>Developer</td>
            <td>ITS</td>
          </tr>
          <tr>
            <td>Farhan</td>
            <td>Tester</td>
            <td>ITS</td>
          </tr>
        </tbody>
      </table>

      <ol>
        <h1>order-list</h1>
        <li>Project-1</li>
        <li>Project-2</li>
        <li>Project-3</li>
      </ol>

      <ul>
        <h1>Unorder-list</h1>
        <li>Day-1 Project work</li>
        <li>Day-2 Project work</li>
        <li>Day-3 Project work</li>
      </ul>

      <form>
        <h1>Form content</h1>
        <label htmlFor="name">First Name: </label>
        <input type="text" placeholder="Enter first name..." />
        <label htmlFor="lastname">Last Name: </label>
        <input type="text" placeholder="Enter last name..." />

        <label htmlFor="city">Select City: </label>
        <select id="city" value={city} onChange={handleCityChange}>
          <option value="">--Please choose a city--</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Suryapet">Suryapet</option>
          <option value="Kodad">Kodad</option>
        </select>
        <button className='btn'>Submit</button>
      </form>
    </div>
  );
}

export default Maincontent;
