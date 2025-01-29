import React from 'react'
import logo from '../Headersection/OQFY.jpg'
import { FaRegBell } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import './header.css'



const Header = () => {
  return(
    <div className>
      <nav className='nav-bar'>
        <ul className='navbar'>
        <li className='nav-light'><img src={logo} style={{ width:'30px'}}/>OQFY</li>
        <li className='nav-list'>
          <select value="" className='service'>
              <option value="">Services</option>
              <option value="">Contract Services</option>
              <option value="">E-Stamp Services</option>
              <option value="">E-Sign Services</option>
              <option value="">Document Verification</option>
              <option value="">Property Registration</option>
              <option value="">Service Settings</option>
              <option value="">Service Help</option>
              </select>
        </li>
        <li className='nav-list'>User Mnaagement</li>
        <li className='nav-list'>My Orders</li>
        <li className='nav-list'>Reports</li>
        <li className='nav-list'>Stamp Inventory</li>
        <li className='nav-list'>Bar Codes</li>
        <li className='nav-list'>Invoice</li>
        <button className='nav-list'>Coming Soon</button>
        <div className='icon'>
          <li className='nav-icon'><FaRegBell className='nav-icons'/>2</li>
          <li className='nav-m'>
           <button className='nav-link'><RiArrowDropDownLine
           className='down-icon'/>
           Michael Smith<span className='red'>M</span></button>
          </li>
          </div>
    
        </ul>
      </nav>
    </div>
  )
}

export default Header
