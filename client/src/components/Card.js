import React from "react";

const Card = props => {
  return (
    <div>
      <h2>{props.player.name}</h2>
      <p>{props.player.country}</p>
      <p>{props.player.searches}</p>
    </div>
  );
};

export default Card;
