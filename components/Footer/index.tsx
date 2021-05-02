import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faPinterest,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Container } from "./styles";

export interface Link {
  label: string;
  url: string;
  icon?: string;
}

export interface Config {
  title: string;
  links: Link[];
}

interface Props {
  config: Config[];
  social: Link[];
}

export function Footer({ config, social }: Props) {
  const getIcon = (icon: string) => {
    switch (icon) {
      case "fb":
        return faFacebookSquare;
      case "tw":
        return faTwitter;
      case "pi":
        return faPinterest;
      case "in":
        return faInstagram;
    }
  };
  return (
    <Container>
      <div>
        <img src="/images/logo2.svg" alt="shortly" />
        <section>
          {config.map((e) => {
            return (
              <ul key={e.title}>
                <li>{e.title}</li>
                {e.links.map((v) => {
                  return (
                    <li key={v.label}>
                      <a href={v.url}>{v.label}</a>
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </section>
        <div>
          {social.map((e) => {
            return (
              <a key={e.label} href={e.url}>
                <FontAwesomeIcon
                  icon={getIcon(e.icon)}
                  color="#FFF"
                  size="lg"
                />
              </a>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
