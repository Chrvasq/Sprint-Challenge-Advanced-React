import React from "react";
import { render } from "@testing-library/react";
import Nav from "./Nav";

it("renders without crashing", () => {
  render(<Nav />);
});
