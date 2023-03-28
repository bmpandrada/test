import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import reactLogo from '../../assets/logo/react.svg';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import SendIcon from '@mui/icons-material/Send';
import { navLinks } from '../../data/data';
import {
    BrowserRouter as Router, Link
  } from 'react-router-dom';

const Nabar = () => {
    const [toogle, setToggle] = useState(true);
  return (
    <header>
    <nav className='navbar'>
    <div className='navbar__header'>
      <Link to='/'> <img className='navbar__img' src={reactLogo} alt="logo" />
      </Link>
    </div>
    <a href="https://www.linkedin.com/in/bruce-michael-andrada-565b561a4/"><LinkedInIcon  className='icon'/></a>
    <a href="https://bruce-folio.vercel.app/"><ContactPageIcon  className='icon'/></a>
    <a href = "mailto: bmpandrada@gmail.com"><SendIcon  className='icon'/></a>


    <ul className={`${toogle ? 'navbar__list' : 'navbar__list  show active'}`}>
      {navLinks.map(({id, links, title})=>{

     
     return <li className='navbar__item'>
        <Link to={links} onClick={()=>setToggle(!toogle)} key={id}>{title}</Link>
      </li>
    })}
      
    </ul>
    <div className='navbar__burger' onClick={()=>setToggle(!toogle)}>
    {toogle ?  <MenuIcon style={{ fontSize: "3rem",  transition: 'all 0.6s ease-in' }} /> : 
    <CloseIcon style={{ fontSize: "3rem",  transition:' all 0.6s ease-in' }}/>}
      </div>
    </nav>

      </header>
  )
}

export default Nabar
