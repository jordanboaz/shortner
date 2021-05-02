import { useState, FormEvent, ChangeEvent, useEffect } from "react";
import { ShortDisplay } from "../ShortDisplay";
import { shorten, Response as ShortenResponse } from "../../services/shorten";
import { Container } from "./styles";

export interface ShortLinks {
  canonical: string;
  short: string;
}

const MAX_STORAGE_RECOVERY = 5;

export function Shortner() {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [shortLinks, setShortLinks] = useState<ShortLinks[]>([]);

  useEffect(() => {
    // Fetch from storage
    fetchSavedLinks();
  }, []);

  const fetchSavedLinks = () => {
    const links = JSON.parse(localStorage.getItem("shortLinks"));
    if (Array.isArray(links)) {
      // Let's consider only the last 5 searched
      setShortLinks(links.slice(-MAX_STORAGE_RECOVERY));
    }
  };
  const updateLocalStorage = (links: ShortLinks[]) => {
    localStorage.setItem("shortLinks", JSON.stringify(links));
  };

  const handleShortenURL = async (event: FormEvent) => {
    event.preventDefault();

    if (!value) {
      setError("Please add a link");
      return;
    }

    setLoading(true);
    const response = await shorten(value);
    setLoading(false);

    handleResponse(response);
  };

  const handleResponse = (response: ShortenResponse) => {
    if (!response.ok) {
      setError(response.message!);
    } else {
      const { result } = response;
      setValue("");
      const updatedLinks = [
        ...shortLinks,
        { canonical: result.original_link, short: result.short_link },
      ];
      setShortLinks(updatedLinks);
      updateLocalStorage(updatedLinks);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (error) {
      setError("");
    }
    setValue(event.target.value);
  };

  return (
    <>
      <Container onSubmit={handleShortenURL}>
        <input
          type="text"
          placeholder="Shorten a link here..."
          value={value}
          className={!!error ? "error" : ""}
          onChange={handleChange}
          disabled={loading}
          data-testid="inputLink"
        />
        {!!error && <small>{error}</small>}
        <button data-testid="buttonSubmit" type="submit" disabled={loading}>
          Shorten It!
        </button>
      </Container>
      <ShortDisplay shortLinks={shortLinks} />
    </>
  );
}
