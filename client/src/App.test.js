import React from "react";
import "@testing-library/jest-dom/extend-expect";
import * as rtl from "@testing-library/react";
import App from "./App";

afterEach(rtl.cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  rtl.render(<App />, div);
});
