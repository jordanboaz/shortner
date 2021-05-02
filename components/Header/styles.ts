import styled from 'styled-components'

export const Container = styled.header`
  max-width: 1120px;
  margin: 0 auto;
  padding:  2rem;
  display: flex;
  align-items: center;
  flex-direction: row;

  &.modalMenu {
    flex-direction: column;
    
  }
  
  section {
    display: flex;
    justify-content: space-between;

    @media (max-width: 720px) {
      flex: 1;
      width: 100%;

    }
    
    img {
      width: 7rem;
      cursor: pointer;
    }

    button {
      margin-left: auto;
      outline: 0;
      border: 0;
      background-color: transparent;

      @media (min-width: 721px) {
        display: none;
      }
    }
  }

  nav {
    display: flex;
    flex-direction: row;
 
    flex: 1;

    @media (max-width: 720px) {
      display: none;
      /* flex: 1; */
      flex-direction: column;
      align-items: center;
      /* justify-content: center; */
      padding: 2rem;
      background-color: var(--dark-violet);
      border-radius: 1rem;
      margin-top: 1rem;
      width: 100%;
    }

    &.modalMenu {
      display: flex;
    }

    a {
      cursor: pointer;
      font-weight: 700;
      color: var(--grayish-violet);

      @media (max-width: 720px){
        color: white;
      }
      

      &:hover {
        color: var(--very-dark-violet);
      }
    }

    ul {
      list-style: none;
      display: flex;
      flex-direction: inherit;
      
      li {
        margin-left: 2rem;

        @media (max-width: 720px){
          text-align: center;
          margin: 0 0 1.5rem;
        }
      }

      
    }

    div {
      margin-left: auto;
      display: flex;
      /* flex-direction: inherit; */

      @media (max-width: 720px){
        flex-direction: inherit;
        align-items: inherit;
        justify-content: inherit;
        margin-left: 0;
        width: 100%;
        border-top: 1px solid var(--grayish-violet);
        padding: 1.5rem 0 0;
      }

    }
  
    button {
      height: 2rem;
      width: 6rem;
      padding: 0 1rem;
      border-radius: 2rem;
      border: 0;
      outline: 0;
      margin-left: 2rem;
      background: var(--cyan);

      font-weight: 700;
      font-size: 1rem;
      color: white;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(1.2)
      }

      @media (max-width: 720px){
        margin: 1.5rem 0 0;
        width: 100%;
        height: 2.5rem;
      }
    }

  }
 

  

`