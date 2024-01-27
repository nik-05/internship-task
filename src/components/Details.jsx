import React from 'react';
import Summary from '../components/Summary';

const Details = ({ location }) => {
  const { show } = location.state;

  return (
    <div className="details">
      <h1>Show Details</h1>
      <Summary show={show} />
    </div>
  );
};

export default Details;