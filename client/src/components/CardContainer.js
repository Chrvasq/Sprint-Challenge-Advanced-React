import React from "react";
import Card from "./Card";

const CardContainer = props => {
  return (
    <div className="card-container">
      {props.data.map(player => {
        return <Card key={player.id} player={player} />;
      })}
    </div>
  );
};

export default CardContainer;
