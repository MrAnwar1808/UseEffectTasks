
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Example4(){

    const [users, setUsers] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() =>{
        const fetchUsers = async () => {
            setLoading(true); 
            try {
              const response = await fetch('https://dummyjson.com/users'); 
              if (!response.ok) {
                throw new Error('Failed to fetch user data');
              }
              const data = await response.json(); 
              setUsers(data.users); 
            //   setLoading(false); 

            } catch (error) {
              setError(error.message); 
            //   setLoading(false); 

            }finally{
                setLoading(false)
            }
          };
      
          fetchUsers(); 
        }, []); 
      
        
        if (loading) {
          return <div>Loading users...</div>;
        }
      
        if (error) {
          return <div>Error: {error}</div>;
        }
      
        return (
          <div>
            <h2>User List</h2>
            <ul>
              {users.map((user) => (
                <li key={user.id}>
                First Name  :  {user.firstName},<br />
                Last Name   :  {user.lastName},<br />
                Email       :  {user.email}, <br />
                <br />
                </li>
              ))}
            </ul>
          </div>
        );
      }

export default Example4