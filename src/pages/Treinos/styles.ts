import styled from "styled-components";

export const Main = styled.main`
  padding-top: 10rem;
`

export const Opcoes = styled.div`
  align-items: center;
  display: flex;
  gap: 1rem;
  justify-content: center;

  label {
    align-items: center;
    border: 1px solid #ffffff;
    display: flex;
    height: 50px;
    justify-content: center;
    width: 45px;
  }

  .ativado {
    background-color: #ffffff;
    color: #000000;
  }
`

export const Opcao = styled.input`
  display: none;
`

export const Exercicios = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  height: 100%;
  width: 100%;

  .desativado {
    display: none;
  }
`