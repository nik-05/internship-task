import React from "react";

const ShowCard = ({ show, onClick }) => {
  return (
    <div className="show-card">
      <img src={show.image} alt={show.name} />
      <h3>{show.name}</h3>
      <p>{show.genres.join(", ")}</p>
      <button onClick={() => onClick(show)}>View Summary</button>
    </div>
  );
};

export default ShowCard;
