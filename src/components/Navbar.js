import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  // Öffnet/schließt das mobile Menü
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // Zeigt oder versteckt den Button je nach Fensterbreite
  const showButton = () => {
    setButton(window.innerWidth > 960);
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    return () => window.removeEventListener('resize', showButton);
  }, []);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            GYMGATE
            <img
              src='/images/logo123.png'
              alt='GYMGATE Logo'
              className='footer-logo-image'
              style={{ marginLeft: 10, height: 32, verticalAlign: 'middle' }}
            />
          </Link>
          <div className='menu-icon' onClick={handleClick} aria-label="Menü öffnen/schließen" tabIndex={0}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/community' className='nav-links' onClick={closeMobileMenu}>
                Community
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contactandsupport' className='nav-links' onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/functionsfeatures' className='nav-links' onClick={closeMobileMenu}>
                Funktionen & Features
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/aboutus' className='nav-links' onClick={closeMobileMenu}>
                About Us
              </Link>
            </li>
            <li>
              <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                Sign Up
              </Link>
            </li>
          </ul>
          {button && (
            <Button buttonStyle='btn--primary' onClick={() => closeMobileMenu()}>
              SIGN UP
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
