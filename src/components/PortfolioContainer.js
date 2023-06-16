import React, { createContext, useState } from 'react';
import NavTabs from './NavTabs';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './Footer'
import Home from './pages/Home'
import Header from './Header';
import ReactSwitch from 'react-switch';
import './utils/Portfolio.css';



export const ThemeContext = createContext(null) 

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('AboutMe');


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

const [theme, setTheme] = useState('light');

const toggleTheme = () => {
  setTheme((curr) => (curr === 'light' ? 'dark' : 'light '));
};

  return (

    
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className='Portfolio' id={theme}>
      <div className='columns is-mobile border border-3 border-dark m-2 '>
        <div className='column'>
          <div className=''>
        <Header /> 
        </div>
        </div>


<div className='column'>
<div className='switch'>
      <label> {theme === 'dark' ? 'Dark Mode' : 'Light Mode'} </label>
      <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'}/>

      </div>
</div>

      
      <div className='mr-6'>
      <div className='level-item has-text-centered'>

      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange}/>
      </div>
      </div>
      
      </div>
      {renderPage()}
      <Footer />

      </div>
    </ThemeContext.Provider>

  );
}
