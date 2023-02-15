import React from 'react'
import { NavLink } from 'react-router-dom';


function SignIn() {
  return (
    <div>
        <div>SignIn</div>
        <NavLink to="/SignUp">
                <div>Sign Up</div>
        </NavLink>
        <NavLink to="/ForgotPassword">
            <div>Forgot Password</div>
        </NavLink>
        <NavLink to="/">
            <div>Home</div>
        </NavLink>
    </div>
    
  )
}

export default SignIn