import styled from "styled-components";

export const Container = styled.main`
  padding-top: 2rem;

  h2 {
    font-size: 1.4rem;
    text-align: center;
  }
`

export const Treinos = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
  justify-content: center;
  width: 100%;

  h3 {
    border-bottom: 3px solid gold;
    font-size: 1.8rem;
    margin: 2rem 0;
  }

  li {
    height: 15.62rem;
    list-style: none;
    margin-bottom: 4rem;
    width: 80vw;

    img {
      height: 9.37rem;
      width: 100%;
    }

    h4 {
      font-size: 1rem;
      margin: 1rem 0;
      text-align: center;
      text-transform: capitalize;
    }

    p {
      font-weight: 600;
      font-size: 1.5rem;
      text-align: center;
    }
  }
`