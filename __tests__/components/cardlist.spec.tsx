import { CardList } from "../../components/CardsList";
import { render } from "@testing-library/react";

const cards2 = [
  { title: "Card 1", description: "Description 1", icon: "" },
  { title: "Card 2", description: "Description 2", icon: "" },
];

describe("CardList", () => {
  it("should render", () => {
    const { container } = render(<CardList list={[]} />);

    expect(container).toBeTruthy();
  });

  it("should render 2 cards when card list contains it", () => {
    const { getByTestId } = render(<CardList list={cards2} />);

    const parent = getByTestId("cardListContainer");
    expect(parent).toBeTruthy();
    expect(parent.childNodes.length).toBe(2);
  });

  it("should render card info", () => {
    const { getByText } = render(<CardList list={cards2} />);

    expect(getByText(cards2[0].title)).toBeTruthy();
    expect(getByText(cards2[0].description)).toBeTruthy();
  });
});
