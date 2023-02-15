import React from 'react'
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <div>
        <div>Home</div>
        <div>
            <NavLink to="/SignIn">
                <div>Sign In</div>
            </NavLink>
        </div>
    </div>
    
    
  )
}

export default Home