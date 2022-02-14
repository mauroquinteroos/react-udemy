import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

describe("Testing in <App/>", () => {
  test("It has to show Hello Mauro", () => {
    const greeting = "Hello World";
    const { getByText } = render(<App greeting={greeting} />);
    expect(getByText(greeting)).toBeInTheDocument();
  });
});
