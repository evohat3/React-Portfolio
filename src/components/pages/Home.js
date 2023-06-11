// import React from 'react';

// export default function Home() {
//   return (
//     <div className="bg-dark" style={{ backgroundImage: `url('https://i.imgur.com/agmtalV.jpg')` }}>
//       <div>
//         <h1 className="d-block p-2 bg-primary text-white">Home Page</h1>
//         <div>
//           <img
//             src="https://evohat3.github.io/Personal-Portfolio/assets/images/122324444_10164329569685321_7295052208409172869_n.jpg"
//             className="img-thumbnail d-block bg-dark text-white rounded-circle mx-auto d-block"
//             alt="Evohat3"
//           />
//           <p className="">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque velit, lobortis ut magna varius, blandit
//             rhoncus sem. Morbi lacinia nisi ac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Cras non
//             risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdiet ac. Sed nec nulla aliquam, bibendum odio
//             eget, vestibulum tortor. Cras rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in tristique
//             ex. Donec nec ornare elit. Donec blandit est sed risus feugiat porttitor. Vestibulum molestie hendrerit
//             massa non consequat. Vestibulum vitae lorem tortor. In elementum ultricies tempus. Interdum et malesuada
//             fames ac ante ipsum primis in faucibus.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from 'react';

export default function Home() {
  return (
    <div
      className="bg-dark"
      style={{
        backgroundImage: `url('https://i.imgur.com/agmtalV.jpg')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
      <div>
      <section className="section bg-primary border border-dark border-5 
       has-text-centered">
  <h1 className="title">Home Page</h1>
  <h2 className="subtitle">
  </h2>
</section>

        <div className="mt-5">
          <img
            src="https://evohat3.github.io/Personal-Portfolio/assets/images/122324444_10164329569685321_7295052208409172869_n.jpg"
            className="img-thumbnail d-block bg-dark text-white rounded-circle"
            style={{
              

            }}
            alt="Evohat3"
          />
          <p className="float-end">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque velit, lobortis ut magna varius, blandit
            rhoncus sem. Morbi lacinia nisi ac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Cras non
            risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdiet ac. Sed nec nulla aliquam, bibendum odio
            eget, vestibulum tortor. Cras rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in tristique
            ex. Donec nec ornare elit. Donec blandit est sed risus feugiat porttitor. Vestibulum molestie hendrerit
            massa non consequat. Vestibulum vitae lorem tortor. In elementum ultricies tempus. Interdum et malesuada
            fames ac ante ipsum primis in faucibus.
          </p>
        </div>
      </div>
    </div>
  );
}