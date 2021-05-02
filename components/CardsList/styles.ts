import styled from 'styled-components'

interface NumberProps {
  index: number;
}

const CARD_SIZE = 320;
const SMALL_CARD = 200;
const HEIGHT_STEP = 3;
const LINE_SIZE = 3;
const LINE_THICKNESS = 0.5;

export const Container = styled.section`
  max-width: 1120px;
  display: flex;
  flex-direction: row;

  @media (max-width: 720px) { 
    flex-direction: column;  
    align-items: center; 
    justify-content: center; 
  }
`

export const CardWrapper = styled.div`
  display: flex;


  @media (max-width: 720px) { 
    flex-direction: column;  
    align-items: center;  
  }
`;

export const Card = styled.div<NumberProps>`
  padding: 1.5rem;
  border-radius: 0.5rem;
  background: white;
  height: ${CARD_SIZE}px;
  margin-top: ${({ index }) => `${index * HEIGHT_STEP}rem`};

  @media (max-width: 720px) { 
      text-align: center;
      margin-top: 2rem;
      height: ${SMALL_CARD}px;
    }


  div:first-child {
    background: var(--dark-violet);
    width: 80px;
    height: 80px;
    margin-top: -4rem;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    display: flex;

    @media (max-width: 720px) { 
      margin: -4rem auto 0 ;
    }

  }

  h1 {
    margin-top: 2rem;
    font-size: 1.2rem;
    line-height: 1.2em;
    color: var(--very-dark-blue);
  }

  p {
    max-width: 500px;
    margin: 1rem 0 2rem;
    color: var(--grayish-violet);
    line-height: 1.7rem;
  }
`

export const Line = styled.div<NumberProps>`
    height: ${LINE_THICKNESS}rem;
    width: ${LINE_SIZE}rem;
    margin-top: calc( ${({ index }) => `${(index - 1) * HEIGHT_STEP}rem + ${CARD_SIZE / 2}px`});
    background: var(--cyan);

    @media (max-width: 720px) { 
    margin-top: 0;
    width: ${LINE_THICKNESS}rem;
    height: ${LINE_SIZE}rem;
  }
`