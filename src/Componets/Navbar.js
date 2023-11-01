import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
      <nav>
              <ul>
                  <li className=' flex gap-10 text-center mt-10 font-bold text-[1.5rem]' >
                            <li className=' hover:text-orange-600'><NavLink to="/">Home</NavLink></li>
                            <li className=' hover:text-orange-600'><NavLink to="/about">AboutUs</NavLink></li>
                            <li className=' hover:text-orange-600'><NavLink to="/contact">ContactUs</NavLink></li>
                           <li className=' hover:text-orange-600'> <NavLink to="/services">Services</NavLink> </li>
                           <li className=' hover:text-orange-600'> <NavLink to="/">HireMe</NavLink></li>
                  </li>
              </ul>
            </nav>
            
  )
}

export default Navbar