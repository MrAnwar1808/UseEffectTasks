import React from "react";
import Togglecolor from "./Togglecolor";
import ToggleMessage from "./Togglemessage";
import ToggleVisibility from "./Togglevisibility";
import './Alltoggle.css'

function Alltoggle() {
  return (
    <div>
      <h2>Toggle Components in Table</h2>
      <table>
        <thead>
          <tr>
            <th>Component</th>
            <th>Functionality</th>
            <th>Toggle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Toggle Color</td>
            <td>Switch between Dark Mode and Light Mode</td>
            <td><Togglecolor /></td>
          </tr>
          <tr>
            <td>Toggle Message</td>
            <td>Switch between "Hello" and "Goodbye"</td>
            <td><ToggleMessage /></td>
          </tr>
          <tr>
            <td>Toggle Visibility</td>
            <td>Show or hide a message</td>
            <td><ToggleVisibility /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Alltoggle;
