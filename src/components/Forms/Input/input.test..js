import Input from "./index";
import { screen, render, userEvent } from "../../../Tests";

describe("Input", () => {
  it("should start empty", () => {
    render(<Input value="" action={() => {}} />);
    expect(screen.queryByDisplayValue()).not.toBeDefined();
  });
});
