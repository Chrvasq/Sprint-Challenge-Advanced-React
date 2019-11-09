import React from "react";

const Card = props => {
  return (
    <div className="card">
      <h2>{props.player.name}</h2>
      <p>{props.player.country}</p>
      <p>Number of searches: {props.player.searches}</p>
    </div>
  );
};

export default Card;
