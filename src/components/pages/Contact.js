import React from 'react';

export default function Contact() {
  return (
    <div className='section is-medium columns'>

      <div className='column is-half border border-3 border-dark'>

      <div className='container has-text-centered is-size-3'>
      <div className='content'>Contact Page</div>
      </div>


      <div className='section'>
      <div className='content'>Your Name:</div>
      <input className="input" type="email" placeholder="Name"/>
      </div>

      <div className='section'>
      <div className='content'>Your Email:</div>
      <input className="input" type="email" placeholder="email@email.com"/>
      </div>

      <div className='section'>
      <div className='content'>Message:</div>
      <input className="textarea" type="email" placeholder="Hello!"/>
      </div>

      <div className='has-text-centered m-3'>
        <button className='button '>
            Submit
        </button>

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
