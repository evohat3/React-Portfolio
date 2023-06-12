import React from 'react';

export default function AboutMe() {
  return (
    <div
      style={{
        backgroundImage: `url('https://i.imgur.com/agmtalV.jpg')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >

<div className='columns is-centered '>

  <div className='column'>
    <p className="bd-notification is-info has-background-info is-size-1 text-center has-text-light border border-5 ">About Me</p>
    <div className="columns">

      <div className="column is-mobile p-6">

          <img
            src="https://evohat3.github.io/Personal-Portfolio/assets/images/122324444_10164329569685321_7295052208409172869_n.jpg"
            className="img-thumbnail bg-dark text-white rounded-circle"
            style={{
              boxShadow:'0px 0px 100px 20px'
            }}
            alt="Evohat3"
          />

        
      </div>
      <div className="column is-mobile">
        <p className="bd-notification is-info">

        <section className="section border border-dark has-background-info mb-6 mt-6 " style={{ boxShadow:'10px 10px 5px'}}>
  <h1 className="title has-text-light">Medium section</h1>
  <h2 className="subtitle  has-text-light">
    A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading.
  </h2>
</section>

<section className="section border border-dark has-background-info mb-6" style={{ boxShadow:'10px 10px 5px'}}>
  <h1 className="title has-text-light">Section</h1>
  <h2 className="subtitle has-text-light">
    A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading.
  </h2>
</section>

<section className="section border border-dark has-background-info mb-6" style={{ boxShadow:'10px 10px 5px'}}>
  <h1 className="title has-text-light">Section</h1>
  <h2 className="subtitle has-text-light">
    A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading.
  </h2>
</section>


        </p>
      </div>
    </div>
  </div>
      
 
    </div>

    </div>
  );
}





/*        

      <section className="header bg-dark has-text-centered border border-5">
  <h1 className=" has-text-light is-size-1">About Me</h1>
</section>



        <div className="p-5 columns">
          <div className='column mt-6'>
          <img
            src="https://evohat3.github.io/Personal-Portfolio/assets/images/122324444_10164329569685321_7295052208409172869_n.jpg"
            className="img-thumbnail d-block bg-dark text-white rounded-circle"
            style={{
              
              boxShadow:'0px 0px 100px 20px'

            }}
            alt="Evohat3"
          />
</div>


          <div className="column">
<div className=''>

<section className="section border border-dark has-background-info mb-6 mt-6" style={{ boxShadow:'10px 10px 5px'}}>
  <h1 className="title has-text-light">Medium section</h1>
  <h2 className="subtitle  has-text-light">
    A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading.
  </h2>
</section>

<section className="section border border-dark has-background-info mb-6" style={{ boxShadow:'10px 10px 5px'}}>
  <h1 className="title has-text-light">Section</h1>
  <h2 className="subtitle has-text-light">
    A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading.
  </h2>
</section>

<section className="section border border-dark has-background-info mb-6 " style={{ boxShadow:'10px 10px 5px'}}>
  <h1 className="title has-text-light">Section</h1>
  <h2 className="subtitle has-text-light">
    A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading.
  </h2>
</section>

</div>

          </div>

        </div>

  */


