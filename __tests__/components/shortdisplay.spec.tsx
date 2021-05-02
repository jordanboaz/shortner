import { ShortDisplay } from "../../components";
import { render, fireEvent } from "@testing-library/react";

const originalClipboard = { ...global.navigator.clipboard };
const copyFunction = jest.fn();

const short1 = {
  canonical: "http://google.com",
  short: "http://goog.cm",
};

const short2 = {
  canonical: "http://facebook.com",
  short: "http://fb.cm",
};

const shortLinks = [short1, short2];

describe("ShortDisplay", () => {
  beforeEach(() => {
    Object.assign(navigator, {
      clipboard: {
        writeText: copyFunction,
      },
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
    Object.assign(navigator, {
      clipboard: originalClipboard,
    });
  });

  it("should render", () => {
    const { container } = render(<ShortDisplay shortLinks={shortLinks} />);

    expect(container).toBeTruthy();
  });

  it("should render original link and shortned link", () => {
    const { getByText } = render(<ShortDisplay shortLinks={shortLinks} />);

    expect(getByText(short1.canonical)).toBeTruthy();
    expect(getByText(short1.short)).toBeTruthy();
  });

  it("should copy content to clipboard", () => {
    const { getByTestId } = render(<ShortDisplay shortLinks={shortLinks} />);

    const button_0 = getByTestId("copyButton_0");

    fireEvent.click(button_0);

    expect(copyFunction).toHaveBeenCalledWith(short1.short);
  });
});
