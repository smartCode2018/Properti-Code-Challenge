import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "@/pages/index";

describe("Home", () => {
  it("accepts a number", () => {
    const {} = render(<Home />);

    const input = screen.getByTestId(/required-input/i);
    expect(input).toBeInTheDocument();
    expect(input).toBeRequired();
  });
});
