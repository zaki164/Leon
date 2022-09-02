// import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import images from '../../constants';

import './Navbar.css';

const Navbar = () => {
  const [toggle, settoggle] = useState(false);

  return (
    <header>
      <div className='container flex_between'>
        <img className="logo" src={images.logo} alt="logo" />
        <div className="links">
          <span className="icon" onClick={() => settoggle(!toggle)}>
            <span></span>
            <span></span>
            <span></span>
          </span>
          {toggle && (
            <ul>
              <li><a href="#Services" onClick={() => settoggle(false)}>Services</a></li>
              <li><a href="#Portfolio" onClick={() => settoggle(false)}>Portfolio</a></li>
              <li><a href="#About" onClick={() => settoggle(false)}>About</a></li>
              <li><a href="#Contact" onClick={() => settoggle(false)}>Contact</a></li>
            </ul>
          )}
        </div>
      </div>
    </header>
  )
}
export default Navbar;
