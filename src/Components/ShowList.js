// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../style.css';

// const ShowList = ({ shows }) => {
//   return (
//     <div className='container'>
//        {shows.map((show) => (
//         <div className='listbox' key={show.show.id}>
//           <h3>{show.show.name}</h3>
//           <img src={show.show.image.medium} alt={show.show.name} />
//           {/* <p>{show.show.summary}</p> */}
//           <Link to={`/details/${show.show.id}`}>
//             <button>Show Details</button>
//           </Link>
//           <hr />
//         </div>
//       ))}
     
//     </div>

//   );
// };

// export default ShowList;

import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

const ShowList = ({ shows }) => {
  const defaultImageUrl = 'https://static.tvmaze.com/uploads/images/medium_portrait/413/1034988.jpg';

  return (
    <>
    <div className="title"><h1>Movies Hub</h1></div>
    <div className='container'>
      {shows.map((show) => (
        <div className='listbox' key={show.show.id}>
         <h3>{show.show.name}</h3>
          {show.show.image && show.show.image.medium ? (
            <img src={show.show.image.medium} alt={show.show.name} />
          ) : (
            <img src={defaultImageUrl} alt={show.show.name} />
          )}
           
          <p>IMDB : {show.show.rating.average}</p>
          <Link to={`/details/${show.show.id}`}>
            <button>Show Details</button>
          </Link>
          <hr />
        </div>
      ))}
    </div>
    </>
  );
};

export default ShowList;

