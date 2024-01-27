import React, { useState, useEffect } from "react";
import ShowCard from "./components/ShowCard";

const HomePage = ({ history }) => {
  const [shows, setShows] = useState([]);
  useEffect(() => {
    // Fetch data from the API
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => response.json())
      .then((data) => setShows(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const viewSummary = (show) => {
    history.push({
      pathname: `/details/${show.id}`,
      state: { show },
    });
  };
  return (
    <div className="home">
      <h1>TV Shows</h1>
      <div className="show-list">
        {shows.map((show) => (
          <ShowCard
            key={show.id}
            show={show.show}
            onClick={viewSummary}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
