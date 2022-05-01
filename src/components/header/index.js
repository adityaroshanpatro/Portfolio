import React, { useState } from 'react'
import './header.css'
import Mobile from './mobile'
import Web from './web'
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return <div className='header'>
    <div className='logo'>PortFolio </div>
    <div className='menu'>
      <div className='web-menu'>
        <div>
        {/* <i class="fi fi-rr-apps"></i> */}
        <Web/>
        </div>
      </div>
      <div className='mobile-menu'>
        <div onClick={()=>setIsOpen(!isOpen)}>
        <i class="fi fi-rr-apps menu-icon"></i>
        </div>
        {isOpen&& <Mobile isOpen={isOpen} setIsOpen={setIsOpen}/>}
      </div>
    </div>
    </div>
}

export default Header