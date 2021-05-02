import { Container } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export function Header() {
  const [barMenuOpen, setBarMenuOpen] = useState(false);
  return (
    <Container className={barMenuOpen ? "modalMenu" : ""}>
      <section>
        <img src="/images/logo.svg" alt="shortly" />

        <button type="button" onClick={() => setBarMenuOpen(!barMenuOpen)}>
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
      </section>
      <nav className={barMenuOpen ? "modalMenu" : ""}>
        <ul>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Resources</a>
          </li>
        </ul>

        <div>
          <a>Login</a>
          <button>Sign Up</button>
        </div>
      </nav>
    </Container>
  );
}
