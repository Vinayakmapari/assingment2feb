import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import ShowDetails from './Components/ShowDetails';
import ShowList from './Components/ShowList';

const API_URL = 'https://api.tvmaze.com/search/shows?q=all';

function App() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setShows(data));
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ShowList shows={shows} />} />
          <Route path="/details/:id" element={<ShowDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
