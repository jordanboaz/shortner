import styled from 'styled-components'

export const Container = styled.li`   
  max-width: 1120px;
  width: 100%;

  margin: 2rem 0;
  list-style: none;

  ul {
    border-radius: 0.5rem;
    background-color: white;
    padding: 1.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    & + ul {
      margin-top: 1rem;
    }

    @media (max-width: 720px){
      flex-direction: column;
      align-items: flex-start;
    }

    div {
      min-width: 240px;
      margin-left: 0.5rem;
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: flex-end;

      @media (max-width: 720px){
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        width: 100%;
        margin: 0.7rem 0 0;
        padding: 0.7rem 0 0;
        border-top: 1px solid var(--gray);
      }
    }

    p {
      color: var(--very-dark-violet);
      font-weight: 700;
      max-width: 65%;
      word-break: break-all;
      
      @media (max-width: 720px){
        max-width: 100%;
      }
    }

    span {
      color: var(--cyan);
    }

    button {
      margin-left: 2rem;
      height: 2.5rem;
      width: 6rem;
      border-radius: 0.5rem;
      border: 0;
      outline: 0;
      background: var(--cyan);

      font-weight: 500;
      font-size: 1rem;
      color: white;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(1.2)
      }

      &.active {
        background-color: var(--dark-violet);
      }

      @media (max-width: 720px){
        margin: 0.7rem 0 0;
        width: 100%;
      }
    }

  }
`