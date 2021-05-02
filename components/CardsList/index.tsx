import { Container, CardWrapper, Card, Line } from "./styles";

export type ICard = {
  title: string;
  description: string;
  icon: string;
};

interface Props {
  list: ICard[];
}

export function CardList({ list }: Props) {
  return (
    <Container data-testid="cardListContainer">
      {list.map((e, index) => {
        const image = `/images/${e.icon}.svg`;
        return (
          <CardWrapper key={index}>
            {index !== 0 && <Line index={index} />}
            <Card index={index}>
              <div>
                <img src={image} alt={e.icon} />
              </div>
              <h1>{e.title}</h1>
              <p>{e.description}</p>
            </Card>
          </CardWrapper>
        );
      })}
    </Container>
  );
}
