import { Shortner } from "../../components";
import { render, fireEvent, act } from "@testing-library/react";

const originalLocalStorage = { ...global.localStorage };

const mockedLink = {
  canonical: "http://google.com",
  short: "http://goog.cm",
};

const localStorageMock = (() => {
  const store = {
    shortLinks: JSON.stringify([mockedLink]),
  };
  return {
    getItem: (k) => store[k],
    setItem: jest.fn(),
    clear: jest.fn(),
  };
})();

describe("Shortner", () => {
  beforeEach(() => {
    Object.defineProperty(window, "localStorage", { value: localStorageMock });
  });

  afterEach(() => {
    jest.resetAllMocks();
    Object.defineProperty(window, "localStorage", {
      value: originalLocalStorage,
    });
  });

  it("should render", () => {
    const { container } = render(<Shortner />);
    expect(container).toBeTruthy();
  });

  it("should display button and field to input url", () => {
    const { getByPlaceholderText, getByText } = render(<Shortner />);

    expect(getByPlaceholderText("Shorten a link here...")).toBeTruthy();
    expect(getByText("Shorten It!")).toBeTruthy();
  });

  it("should display error message when not input is passed", () => {
    const { getByText, getByTestId } = render(<Shortner />);

    const button = getByTestId("buttonSubmit");

    fireEvent.click(button);

    expect(getByText("Please add a link")).toBeTruthy();
  });

  it("should load stored links", () => {
    const { getByText } = render(<Shortner />);

    expect(getByText(mockedLink.short)).toBeTruthy();
    expect(getByText(mockedLink.canonical)).toBeTruthy();
  });
});
