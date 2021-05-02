import styled from 'styled-components'

export const Container = styled.section`
 
  background-color: var(--dark-violet);
  background-image: url("images/bg-boost-desktop.svg");
  background-repeat: no-repeat;
  background-size: cover;

  height: 250px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 720px) {
    background-image: url("images/bg-boost-mobile.svg");

  }
  
  div {
    max-width: 1120px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
      color: white;
      font-size: 2rem;
      margin-bottom: 0.5rem;
      text-align: center;
    }

  }



`