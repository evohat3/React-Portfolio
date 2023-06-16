import React, { useState } from 'react';
import NavTabs from './NavTabs';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './Footer'
import Home from './pages/Home'

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  // TODO: Add a comment describing the functionality of this method
  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if(currentPage === 'Contact') {
      return <Contact />
    } else 
    return <Home />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div     className="has-background-link-light">
      {/* // TODO: Add a comment describing what we are passing as props */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange}/>
      {/* // TODO: Add a comment explaining what is happening on the following line */}
      {renderPage()}
      <Footer />
    </div>
  );
}
