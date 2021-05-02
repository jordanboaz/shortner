import { Container } from "./styles";
import { ShortLinks } from "../Shortner";
import { useEffect, useState } from "react";
interface Props {
  shortLinks: ShortLinks[];
}
export function ShortDisplay({ shortLinks }: Props) {
  const [touched, setTouched] = useState(-1);

  useEffect(() => {
    if (touched !== -1) {
      setTimeout(() => {
        setTouched(-1);
      }, 700);
    }
  }, [touched]);

  const handleCopy = (index: number) => {
    navigator?.clipboard?.writeText(shortLinks[index].short);
    setTouched(index);
  };

  return (
    <Container>
      {shortLinks.map((e, index) => {
        const active = touched === index;
        return (
          <ul key={`${e.canonical}_${index}`}>
            <p>{e.canonical}</p>
            <div>
              <span>{e.short}</span>
              <button
                data-testid={`copyButton_${index}`}
                className={active ? "active" : ""}
                onClick={() => handleCopy(index)}
              >
                {active ? "Copied!" : "Copy"}
              </button>
            </div>
          </ul>
        );
      })}
    </Container>
  );
}
