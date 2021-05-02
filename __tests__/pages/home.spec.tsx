import Home from "../../pages";
import { render } from "@testing-library/react";
describe("Home", () => {
  it("should render", () => {
    const { container } = render(<Home />);

    expect(container).toBeTruthy();
  });

  it("should display get started button", () => {
    const { findByText } = render(<Home />);

    expect(findByText("Get started")).toBeTruthy();
  });

  it("should display image", () => {
    const { findAllByAltText } = render(<Home />);

    expect(findAllByAltText("girl coding")).toBeTruthy();
  });
});
