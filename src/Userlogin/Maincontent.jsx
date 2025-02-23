import React, { useState, useEffect } from "react";
import Signuppage from "./Signuppage";
import Loginpage from "./Loginpage";
import Homepage from "./Homepage";
import './Styles.css';

function Maincontent() {
  const [currentPage, setCurrentPage] = useState("signup"); 
  // const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    
    const user = JSON.parse(localStorage.getItem("user"));
    
  
    if (user) {
      setCurrentPage("home");
    } else {
      setCurrentPage("signup"); 
    }
  }, []); 

  return (
    <div>
      {currentPage === "signup" && <Signuppage setCurrentPage={setCurrentPage} />}
      {currentPage === "login" && <Loginpage setCurrentPage={setCurrentPage}  />}
      {currentPage === "home" && <Homepage setCurrentPage={setCurrentPage} />}
    </div>
  );
}

export default Maincontent;
