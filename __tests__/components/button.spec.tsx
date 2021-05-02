import { Button } from "../../components";
import { render, fireEvent } from "@testing-library/react";

describe("Button", () => {
  it("should render", () => {
    const { container } = render(<Button type="button">Click me</Button>);

    expect(container).toBeTruthy();
  });

  it("should display children", () => {
    const child = "Click me";
    const { getByText } = render(<Button type="button">{child}</Button>);

    expect(getByText(child)).toBeTruthy();
  });

  it("should dispatch on click", () => {
    const onClick = jest.fn();
    const child = "Click me";
    const { getByRole } = render(
      <Button type="button" onClick={onClick}>
        {child}
      </Button>
    );

    const button = getByRole("button");
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });
});
