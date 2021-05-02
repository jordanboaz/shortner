import { HTMLProps } from "react";
import { Container } from "./styles";

type buttonType = "button" | "submit" | "reset";

export function Button({
  type,
  onClick,
  children,
}: HTMLProps<HTMLButtonElement>) {
  return (
    <Container type={type as buttonType} onClick={onClick}>
      {children}
    </Container>
  );
}
