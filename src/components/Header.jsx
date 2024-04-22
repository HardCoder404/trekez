import React, { useState,useEffect} from 'react'
import {Search} from 'lucide-react'

const Header = () => {

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 10) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <header className={`header ${isSticky ? 'sticky' : ''}`} data-header>
    <div className="overlay" data-overlay></div>
    
    <div className="header-top">
      <div className="container">

        <a href="tel:+01123456790" className="helpline-box">

          <div className="icon-box">
            <ion-icon name="call-outline"></ion-icon>
          </div>

          <div className="wrapper">
            <p className="helpline-title">For Further Inquires :</p>

            <p className="helpline-number">+01 (123) 4567 90</p>
          </div>

        </a>

        <a href="#" className="logo">
             <span className='Trek'>Trek</span> <span className='EZ'>EZ</span>
            </a>

        <div className="header-btn-group">
          <input type="text" placeholder='Search' />
          <Search className='cursor-pointer' size={30} />

          <div className="login">Login</div>

          <button className="nav-open-btn" aria-label="Open Menu" data-nav-open-btn>
            <ion-icon name="menu-outline"></ion-icon>
          </button>

        </div>

      </div>
    </div>

    <div className="header-bottom">
      <div className="container">

        <ul className="social-list">

          <li>
            <a href="#" className="social-link">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" className="social-link">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" className="social-link">
              <ion-icon name="logo-youtube"></ion-icon>
            </a>
          </li>

        </ul>

        <nav className="navbar" data-navbar>

          <div className="navbar-top">

            <button className="nav-close-btn" aria-label="Close Menu" data-nav-close-btn>
              <ion-icon name="close-outline"></ion-icon>
            </button>

          </div>

          <ul className="navbar-list">

            <li>
              <a href="#home" className="navbar-link" data-nav-link>home</a>
            </li>

            <li>
              <a href="#" className="navbar-link" data-nav-link>about us</a>
            </li>

            <li>
              <a href="#destination" className="navbar-link" data-nav-link>destination</a>
            </li>

            <li>
              <a href="#package" className="navbar-link" data-nav-link>packages</a>
            </li>

            <li>
              <a href="#gallery" className="navbar-link" data-nav-link>gallery</a>
            </li>

            <li>
              <a href="#contact" className="navbar-link" data-nav-link>contact us</a>
            </li>

          </ul>

        </nav>

      </div>
    </div>

  </header>
  )
}

export default Header