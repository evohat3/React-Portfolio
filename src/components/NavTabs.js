import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
  return (
<div className='navbar-menu is-active has-background-grey'>

<div className='navbar-start'>
  <h1 className=' has-text-light is-size-1'>Nigel Poblete</h1>
  </div>

  <div className='navbar-end pb-3'>
    <ul className="nav nav-tabs bg-dark text-light border border-dark border-3 ">
      <li className="nav-item border border-dark m-2">
        <a
          href="#AboutMe"
          onClick={() => handlePageChange('AboutMe')}
          className={currentPage === 'AboutMe' ? 'nav-link active bg-success' : 'nav-link text-light bg-primary'}
        >
          About Me
        </a>
      </li>
      <li className="nav-item border border-dark m-2">
        <a
          href="#Portfolio"
          onClick={() => handlePageChange('Portfolio')}

          className={currentPage === 'Portfolio' ? 'nav-link active bg-success' : 'nav-link text-light bg-primary'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item border border-dark m-2">
        <a
          href="#Resume"
          onClick={() => handlePageChange('Resume')}


          className={currentPage === 'Resume' ? 'nav-link active bg-success' : 'nav-link text-light bg-primary'}
        >
          Resume
        </a>
      </li>
      <li className="nav-item border border-dark m-2">
        <a
          href="#contact"

          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active bg-success' : 'nav-link text-light bg-primary'}
        >
          Contact
          </a>
        </li>
      </ul>
    </div>
</div>

  );
}

export default NavTabs;
