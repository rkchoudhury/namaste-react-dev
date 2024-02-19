import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Contact from "../src/components/Contact";

it("Should load Contact Us Component", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

it("Should load input in Contact Us Component", () => {
  render(<Contact />);
  const inputBoxes = screen.getAllByRole("textbox");
  expect(inputBoxes.length).toBe(2);
});

it("Should load button in Contact Us Component", () => {
  render(<Contact />);
  const button = screen.getByText("Submit");
  expect(button).toBeInTheDocument();
});
