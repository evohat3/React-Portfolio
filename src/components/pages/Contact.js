import React from 'react';

export default function Contact() {
  return (
    <div className='section is-medium has text-center columns'>

      <div className='column is-half'>

      <div className='content'>Contact Page</div>


      <div className='section'>
      <div className='content'>Your Name:</div>
      <input className="input" type="email" placeholder="Name"/>
      </div>

      <div className='section'>
      <div className='content'>Your Email:</div>
      <input className="input" type="email" placeholder="email@email.com"/>
      </div>

      </div>

      <div className='column'>
        <div className='section bg-dark'>
          <div>HELLO WORLD</div>

        </div>

      </div>


    </div>
  );
}
