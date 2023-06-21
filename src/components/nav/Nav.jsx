import React from 'react'
import './nav.css'
import {AiOutlineHome,AiOutlineUser} from 'react-icons/ai'
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'

function Nav() {
  const [activeNav, setActiveNav] = useState('#')
  return (
    
    <nav>
      <a href="#" className={activeNav === '#' ? 'active' : ''} onClick={() => setActiveNav('#')}><AiOutlineHome/></a>
      <a href="#about" className={activeNav === '#about' ? 'active' : ''} onClick={() => setActiveNav('#about')}><AiOutlineUser/></a>
      <a href="#experience" className={activeNav === '#experience' ? 'active' : ''} onClick={() => setActiveNav('#experience')}><BiBook/></a>
      <a href="#contacts" className={activeNav === '#contacts' ? 'active' : ''} onClick={() => setActiveNav('#contacts')}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav