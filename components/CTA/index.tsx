import { Button } from "../Button";
import { Container } from "./styles";

interface Props {
  title: string;
  buttonText: string;
  onClick: () => void;
}

export function CTA({ title, buttonText, onClick }: Props) {
  return (
    <Container>
      <div>
        <h1>{title}</h1>
        <Button type="button" onClick={onClick}>
          {buttonText}
        </Button>
      </div>
    </Container>
  );
}
