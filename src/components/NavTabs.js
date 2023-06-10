import React from 'react';

// TODO: Add a comment explaining how we are able to extract the key value pairs from props

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs bg-secondary text-light">
      <li className="nav-item border border-dark border-3">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for

          className={currentPage === 'Home' ? 'nav-link active bg-success' : 'nav-link text-light'}
        >
          Home
        </a>
      </li>
      <li className="nav-item border border-dark border-3">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          //  TODO: Add a comment explaining what this logic is doing

          className={currentPage === 'About' ? 'nav-link active bg-success' : 'nav-link text-light'}
        >
          About
        </a>
      </li>
      <li className="nav-item border border-dark border-3">
        <a
          href="#blog"
          onClick={() => handlePageChange('Blog')}
          //  TODO: Add a comment explaining what this logic is doing

          className={currentPage === 'Blog' ? 'nav-link active bg-success' : 'nav-link text-light'}
        >
          Blog
        </a>
      </li>
      <li className="nav-item border border-dark border-3">
        <a
          href="#contact"
          //  TODO: Add a comment explaining what this logic is doing

          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active bg-success' : 'nav-link text-light'}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
