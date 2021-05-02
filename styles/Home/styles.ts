import styled from 'styled-components'

export const Container = styled.main`
  max-width: 1500px;
  margin: 0 auto;
  padding: 4rem 2rem 8rem;

  @media (max-width: 1500px){
    overflow-x: hidden;
  }


  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 800px) {
    flex-direction: column-reverse;
    justify-content: center;

  }
 
  section {
    max-width: 500px;

    @media (max-width: 800px) {
      margin-top: 2rem;
    }

    @media (max-width: 720px) {
      text-align: center;
    }

    h1 {
      font-size: 3rem;
      line-height: 1.2em;
      color: var(--very-dark-blue);
    }

    p {
      margin-top: 0.5rem;
      color: var(--grayish-violet);
      line-height: 1.7rem;
      margin-bottom: 2rem;
    }

  }

  img {
    margin-right: -12rem;


    @media (max-width: 720px) {
     width: 500px;
    }
  }

`

export const Content = styled.section`
  padding: 0 2rem 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: #F0F1F6;

  > h1 {
    font-size: 2rem;
    line-height: 1.2em;
    color: var(--very-dark-blue);
    margin-top: 4rem;
  }

  > p {
    max-width: 500px;
    text-align: center;
    margin: 1rem 0 6rem;
    color: var(--grayish-violet);
    line-height: 1.7rem;
  }

  > form {
    margin-top: -4rem;
  }  

`