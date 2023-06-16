import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
  return (
<div className='navbar-menu is-active has-background-black border border-danger border-3'>

<div className='navbar-start border border-3 border-light'>
  <h1 className=' has-text-light is-size-1'>Nigel Poblete</h1>
  </div>

{/*TODO light-dark reach switch  */}
    <div>
      <>hello!</>
    </div>

  <div className='navbar-end border border-3 '>
    <ul className="nav nav-tabs bg-dark text-light border border-dark border-5 ">

    <li className="nav-item border border-dark m-2">
        <a
          href="#Home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active has-background-primary' : 'nav-link text-light bg-primary'}
        >
          Home
        </a>
      </li>

      <li className="nav-item border border-dark m-2">
        <a
          href="#AboutMe"
          onClick={() => handlePageChange('AboutMe')}
          className={currentPage === 'AboutMe' ? 'nav-link active has-background-primary' : 'nav-link text-light bg-primary'}
        >
          About Me
        </a>
      </li>
      <li className="nav-item border border-dark m-2">
        <a
          href="#Portfolio"
          onClick={() => handlePageChange('Portfolio')}

          className={currentPage === 'Portfolio' ? 'nav-link active has-background-primary' : 'nav-link text-light bg-primary'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item border border-dark m-2">
        <a
          href="#Resume"
          onClick={() => handlePageChange('Resume')}


          className={currentPage === 'Resume' ? 'nav-link active has-background-primary' : 'nav-link text-light bg-primary'}
        >
          Resume
        </a>
      </li>
      <li className="nav-item border border-dark m-2">
        <a
          href="#contact"

          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active has-background-primary' : 'nav-link text-light bg-primary'}
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
