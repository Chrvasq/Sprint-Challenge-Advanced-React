import React from "react";
import { Display } from "./components/Display";
import Nav from "./components/Nav";
import "./styles.scss";

function App() {
  return (
    <div className="App">
      <Nav />
      <Display />
    </div>
  );
}

export default App;
