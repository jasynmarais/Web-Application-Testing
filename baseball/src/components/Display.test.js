import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Display from './Display';

afterEach(rtl.cleanup);

test("renders without crashing", () => {
  rtl.render(<Display />);
});
test("props are working correctly", () => {
  const display = rtl.render(<Display balls={2} strikes={2}/>);
  display.getByText(/Balls: 2/);
  display.getByText(/Strikes: 2/);
});