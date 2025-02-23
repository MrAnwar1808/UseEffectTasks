
import React, { useEffect } from 'react';
import { useState } from 'react';
import './Employee.css'


function Example6child() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Message Sent!');
  }

  useEffect(() => {
    console.log(`
        Name   : ${name},
        E-mail : ${email},
        Message: ${message}
        `)
  })

  return (
    <div >

      <h1>FeedBack Form</h1>
      <form onSubmit={handleSubmit} className='page'>

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          value={name}
          placeholder='Enter name...'
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          placeholder='Enter email...'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="message">Message:</label>
        <textarea
          placeholder='Enter your message...'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Example6child;
