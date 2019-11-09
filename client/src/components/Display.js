import React, { Component } from "react";
import Card from "./Card";
import axios from "axios";

export class Display extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        console.log(res.data);
        this.setState({ data: res.data });
      })
      .catch(err => console.log("Error: ", err));
  }

  render() {
    return (
      <div>
        {this.state.data.map(player => {
          return <Card player={player} />;
        })}
      </div>
    );
  }
}
