import React, { Component } from "react";
import CardContainer from "./CardContainer";
import axios from "axios";

export class Display extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        this.setState({ data: res.data });
      })
      .catch(err => console.log("Error: ", err));
  }

  render() {
    return (
      <div>
        <CardContainer data={this.state.data} />
      </div>
    );
  }
}
