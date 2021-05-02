import { CTA } from "../../components";
import { render, fireEvent } from "@testing-library/react";

describe("CTA", () => {
  it("should render", () => {
    const { container } = render(
      <CTA title="CTA" buttonText="Click me" onClick={() => {}} />
    );

    expect(container).toBeTruthy();
  });

  it("should display title and button text CTA", () => {
    const child = "Click me";
    const title = "CTA";
    const { getByText } = render(
      <CTA title={title} buttonText={child} onClick={() => {}} />
    );

    expect(getByText(title)).toBeTruthy();
    expect(getByText(child)).toBeTruthy();
  });

  it("should dispatch on click", () => {
    const onClick = jest.fn();
    const child = "Click me";
    const title = "CTA";
    const { getByRole } = render(
      <CTA title={title} buttonText={child} onClick={onClick} />
    );

    const button = getByRole("button");
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });
});
