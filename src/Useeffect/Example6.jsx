
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Employee.css"
import Example6child from "./Example6child";

function Example6(){

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [employees, setEmployees] = useState([])

    const handleSubmit = (event) => {
        event.preventDefault()
        alert("Form Submited successfully! ")
    }
    
    useEffect(() => {

        const initialdata = [
            {name     : "Anwar",
             id       : "124",
             role     : "Developer",
             project  : "Banking Sector",
             company  : "ITS",
            },
            {name     : "Farhan",
             id       : "144",
             role     : "Tester",
             project  : "Banking Sector",
             company  : "ITS",
            },
            {name     : "Shaik",
             id       : "134",
             role     : "Web Designer",
             project  : "Banking Sector",
             company  : "ITS",
            },
        ];
        setEmployees(initialdata)


    },[])

    return(
        <div>
            <form onSubmit={handleSubmit} className="page">
                <h1>Login Form</h1>
                <label htmlFor="name">Name: </label>
                <input type="text"
                       value={name}
                       placeholder="Enter Name..."
                       onChange={(event) => setName(event.target.value)} />
                <label htmlFor="email">E-mail: </label>
                <input type="email"
                       value={email}
                       placeholder="Enter Email..."
                       onChange={(event) => setEmail(event.target.value)} />
                <label htmlFor="password">Password: </label>
                <input type="text"
                       value={password}
                       placeholder="Enter password..."
                       onChange={(event) => setPassword(event.target.value)} />

                <button type="submit">Submit</button>
            </form>

            <h1>List of Employee's</h1>
            <ul>
                {employees.map((employee) => (
                    <li key={employee.id} >
                        <strong>Name: </strong>{employee.name}<br />
                        <strong>Role: </strong>{employee.role}<br />
                        <strong>Project :</strong>{employee.project}<br />
                        <strong>Company :</strong>{employee.company}<br />
                        <br />
                        </li>
                ))}
               


            </ul>

            <Example6child />
        </div>

    )
}

export default Example6