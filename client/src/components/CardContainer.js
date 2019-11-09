import React from "react";
import Card from "./Card";

const CardContainer = props => {
  return (
    <div>
      {props.data.map(player => {
        return <Card player={player} />;
      })}
    </div>
  );
};

export default CardContainer;
