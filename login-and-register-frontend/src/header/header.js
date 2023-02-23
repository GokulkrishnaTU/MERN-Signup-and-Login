import React from 'react'
import "./header.css"

function header() {
  return (
    <div>
        <div className="container">
            <div className="log">
                <h4>Logo</h4>

            </div>
            <div className="menu">
                <ul>
                    <li>Home</li>
                    <li>Employer</li>
                    <li>Candidate</li>
                    <li>Pages</li>
                    <li>Contact</li>
                </ul>
            </div>

        <div className="button">
            <button className='bttn'>Login</button>
   

            <button className='bttn'>Register</button>
           
        </div>
        </div>

        <div className="midImg">
            <h1 className='mid-txt1'>Create an Account</h1>
            <h5 className='mid-txt'>Home  Signup</h5>
            
        </div>

      
    </div>
  )
}

export default header
