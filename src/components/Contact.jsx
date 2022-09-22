import React from 'react';

function Contact() {
  return (
    <div id='contact'>
        <h1>BOOK YOUR TABLE</h1>
        <form>
            <input type='text'placeholder='Full Name'/>
            <input type='email' placeholder='Email'/>
            <input type='date' placeholder='Date'/>
            <input type='time' placeholder='Time'/>
            <input type='submit' placeholder='FIND A TABLE'/>
        </form>
      
    </div>
  )
}

export default Contact;
