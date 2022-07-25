import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "@/pages/index";

describe("Home", () => {
  it("contains a form input, and input is required.", () => {
    const {} = render(<Home />);

    const input = screen.getByTestId(/required-input/i);
    //check if form input esxit in dom
    expect(input).toBeInTheDocument();
    //check if form input is required
    expect(input).toBeRequired();
  });
});
