import styled from 'styled-components'

export const Container = styled.form`
  background-color: var(--dark-violet);
  background-image: url("images/bg-shorten-desktop.svg");
  background-repeat: no-repeat;
  background-size: cover;


  width: 100%;
  padding: 3rem;
  border-radius: 0.5rem;
  max-width: 1120px;

  display: flex;
  flex: 1;
  flex-direction: row;
  position: relative;

  @media (max-width: 720px){
    flex-direction: column;
    background-image: url("images/bg-shorten-mobile.svg");
  }

 
    input {
      display: flex;
      flex: 1;
      outline: 0;
      padding: 0 1.5rem;
      margin-right: 1.5rem;
      border-radius: 0.5rem;
      background-color: white;
      border: 3px solid white;
      height: 3.5rem;

      @media (max-width: 720px){
        margin-right: 0;
        min-height: 3.5rem;
      }
 

      &::placeholder {
        color: var(--grayish-violet);
        font-size: 1rem;
        font-weight: 500;
        }

      &.error {
        border-color: var(--red);

        &::placeholder {
          color: var(--red)
        }
      }
    }

    small {
      position: absolute;
      font-style: italic;
      color: var(--red);
      font-weight: 200;
      bottom: 1.5rem;

      @media (max-width: 720px){
        position: relative;
        bottom: 0;
        margin-top: 0.5rem;
      }
    }
 

  button {
    height: 3.5rem;
    width: 10rem;
    border-radius: 0.5rem;
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

    @media (max-width: 720px){
      margin-top: 1.5rem;
      width: 100%;
    }

  }
    
`