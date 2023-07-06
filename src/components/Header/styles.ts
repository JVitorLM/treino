import styled from "styled-components";

export const Cabecalho = styled.header`
  background-color: #B2B2B2;
  height: 6.25rem;
  position: fixed;
  width: 100%;

  .fechado {
    display: none;
  }
`

export const BotaoMenu = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  margin-left: 2rem;
  width: 100%;
  
  svg {
      color: #ffffff;
      height: 3.12rem;
      width: 3.12rem;
  }
  
`

export const MenuLateral = styled.div`

  nav {
    background-color: #736F72;
    height: 100vh;
    left: 0;
    position: absolute;
    top: 0;
    width: 40vw;

    svg {
      color: #ffffff;
      width: 1.87rem;
      height: 1.87rem;
      margin: 1rem 0 0 1rem;
    }
    
    ul {
      display: flex;
      flex-direction: column;
      margin-top: 4rem;
      width: 100%;

      li {
        align-items: center;
        border-bottom: 2px solid #E9E3E6;
        display: flex;
        height: 1.87rem;
        justify-content: center;
        list-style: none;
        padding: 1.2rem 0;
        width: 100%;

        a {
          color: #E9E3E6;
          text-decoration: none;

        }
      }
    }
  }
 
`