import React from 'react';

// TODO: Add a comment explaining how we are able to extract the key value pairs from props

function NavTabs({ currentPage, handlePageChange }) {
  return (
<div>
    <ul className="nav nav-tabs bg-dark text-light border border-dark border-3">
      <li className="nav-item border border-dark">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for

          className={currentPage === 'Home' ? 'nav-link active bg-success' : 'nav-link text-light bg-secondary'}
        >
          Home
        </a>
      </li>
      <li className="nav-item border border-dark">
        <a
          href="#Portfolio"
          onClick={() => handlePageChange('Portfolio')}
          //  TODO: Add a comment explaining what this logic is doing

          className={currentPage === 'Portfolio' ? 'nav-link active bg-success' : 'nav-link text-light bg-secondary'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item border border-dark">
        <a
          href="#blog"
          onClick={() => handlePageChange('Blog')}
          //  TODO: Add a comment explaining what this logic is doing

          className={currentPage === 'Blog' ? 'nav-link active bg-success' : 'nav-link text-light bg-secondary'}
        >
          Blog
        </a>
      </li>
      <li className="nav-item border border-dark">
        <a
          href="#contact"
          //  TODO: Add a comment explaining what this logic is doing

          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active bg-success' : 'nav-link text-light bg-secondary'}
        >
          Contact
        </a>
      </li>
    </ul>
    </div>

  );
}

export default NavTabs;
