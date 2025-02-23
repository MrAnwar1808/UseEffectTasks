
import React from "react";

function Homepage({ setCurrentPage }) {
  const handleLogout = () => {
   
    localStorage.removeItem("user");
    setCurrentPage("login");
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Homepage;
