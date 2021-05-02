import styled from 'styled-components';

export const Container = styled.button`
  height: 3rem;
  width: 14rem;
  border-radius: 2rem;
  border: 0;
  outline: 0;
  background: var(--cyan);

  font-weight: 700;
  font-size: 1.2rem;
  color: white;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(1.2)
  }

`