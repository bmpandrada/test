import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import SendIcon from '@mui/icons-material/Send';

const Footer = () => {
  return (
    <div className='footer'><div className='footer__text'>created by: Bruce Andrada &copy;</div>
    <div className='footer__contact'>    <a href="https://www.linkedin.com/in/bruce-michael-andrada-565b561a4/"><LinkedInIcon  className='icon'/></a>
    <a href="https://bruce-folio.vercel.app/"><ContactPageIcon  className='icon'/></a>
    <a href = "mailto: bmpandrada@gmail.com"><SendIcon  className='icon'/></a></div></div>
  )
}

export default Footer