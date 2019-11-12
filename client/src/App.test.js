import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import Nav from "./components/Nav";
import Display from "./components/Nav";

it("renders without crashing", () => {
  render(<App />);
});

it("renders Nav without crashing", () => {
  render(<Nav />);
});

it("renders Display without crashing", () => {
  render(<Display />);
});
