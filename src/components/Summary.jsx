import React from 'react';

const Summary = ({ show }) => {
  return (
    <div className="summary">
      <h2>{show.name}</h2>
      <img src={show.image.original} alt={show.name} />
      <p dangerouslySetInnerHTML={{ __html: show.summary }} />
      {/* Add a button for booking movie ticket */}
    </div>
  );
};

export default Summary;