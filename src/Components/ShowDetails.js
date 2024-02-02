import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import '../style.css';

const defaultImageUrl = 'https://static.tvmaze.com/uploads/images/medium_portrait/413/1034988.jpg';

const ShowDetails = () => {
  const { id } = useParams();

  // Fetch show details based on the ID from the API
  const [showDetails, setShowDetails] = useState({});
  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => setShowDetails(data));
  }, [id]);

  return (
    <div className="container" >
      
    <div className='listbox2'>
      <h1>Show Details</h1>
      <div className='listbox55' key={showDetails.id} >
        <h3>{showDetails.name}</h3>
        {showDetails.image && showDetails.image.medium ? (
          <img src={showDetails.image.medium} alt={showDetails.name} />
        ) : (
          <img src={defaultImageUrl} alt={showDetails.name} />
        )}
        {/* <p>IMDB: {showDetails.rating.average}</p> */}
        <p> <span>Language</span> {showDetails.language}</p>
        <h3>Summry</h3>
        <p>  {showDetails.summary}</p>
       
        <hr />
      </div>
    </div>
    </div>
  );
};

export default ShowDetails;
