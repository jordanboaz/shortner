import styled from 'styled-components';

export const Container = styled.section`
  background-color: var(--very-dark-violet);
  padding: 0 2rem;

  > div {
    padding: 4rem 0;
    max-width: 1120px;
    margin: 0 auto;

    display: grid;
    grid-template-columns: 0.7fr 1.8fr 0.5fr;
    gap: 1rem;

    @media (max-width: 720px){
      display: flex;
      flex: 1;
      flex-direction: column;
      align-items: center;
       text-align: center;
      
      > img {
        width: 100px;
        margin-bottom: 1rem;
       }
    }

    a:hover, svg:hover {
      color: var(--cyan);
    }

    section {
      display: flex;
      flex-direction: row;
      justify-content: space-around;

      @media (max-width: 720px){
       flex-direction: column;
       align-items: center;
    }

      li {
        list-style-type: none;
        color: #FFF;
        font-weight: 300;
        line-height: 2rem;
        font-size: 0.8rem;

 
        &:first-child{
          font-weight: 700;
          margin-bottom: 1rem;
          font-size: 1rem;
        }
      }
    }

    div {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      flex: 1;

      @media (max-width: 720px){
        margin-top: 1rem;
        align-items: center;
        width: 200px;
      }
    }

  }
  
`