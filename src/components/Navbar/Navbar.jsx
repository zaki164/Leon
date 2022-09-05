import { useState, useRef, useEffect } from 'react';
import images from '../../constants';

import './Navbar.css';

const Navbar = () => {
  const [toggle, settoggle] = useState(false);
  const iconref = useRef();
  const handleicon = (e) => {
    e.stopPropagation();
    settoggle(!toggle);
  }
  useEffect(() => {
    document.addEventListener('click', (e) => {
      if (toggle === true) {
        if (e.target !== iconref) {
          settoggle(false);
        }
      }
    })
  })
  return (
    <header>
      <div className='container flex_between'>
        <img className="logo" src={images.logo} alt="logo" />
        <div className="links">
          <span className="icon" onClick={handleicon} ref={iconref}>
            <span></span>
            <span></span>
            <span></span>
          </span>
          {toggle && (
            <ul>
              <li><a href="#Services">Services</a></li>
              <li><a href="#Portfolio">Portfolio</a></li>
              <li><a href="#About">About</a></li>
              <li><a href="#Contact">Contact</a></li>
            </ul>
          )}
        </div>
      </div>
    </header>
  )
}
export default Navbar;
