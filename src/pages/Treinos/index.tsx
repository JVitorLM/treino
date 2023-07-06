import { lazy, useState } from "react";
import { Exercicios, Main, Opcao, Opcoes } from "./styles";
import ButaoUp from "../../components/BotaoUp";

const TreinoA = lazy(() => import('./components/TreinoA'));
const TreinoB = lazy(() => import('./components/TreinoB'));
const TreinoC = lazy(() => import('./components/TreinoC'));
const TreinoD = lazy(() => import('./components/TreinoD'));



export default function Treinos() {

  const [escolhido, setEscolhido] = useState('a');

  function escolha(e: React.MouseEvent) {
    let event = e.currentTarget.id;
    if(event === 'a') {
      setEscolhido('a')
    } else if(event === 'b') {
      setEscolhido('b')
    } else if(event === 'c') {
      setEscolhido('c')
    } else if(event === 'd') {
      setEscolhido('d')
    }
  }

  return(
    <Main>
      <Opcoes>
        <Opcao type="checkbox" id="a" onClick={(e) => escolha(e)}/>
        <label htmlFor="a" className={escolhido === 'a' ? 'ativado' : ''}>A</label>

        <Opcao type="checkbox" id="b" onClick={(e) => escolha(e)}/>
        <label htmlFor="b" className={escolhido === 'b' ? 'ativado' : ''}>B</label>

        <Opcao type="checkbox" id="c" onClick={(e) => escolha(e)}/>
        <label htmlFor="c" className={escolhido === 'c' ? 'ativado' : ''}>C</label>

        <Opcao type="checkbox" id="d" onClick={(e) => escolha(e)}/>
        <label htmlFor="d" className={escolhido === 'd' ? 'ativado' : ''}>D</label>  
      </Opcoes>

      <Exercicios>
        <div className={escolhido === 'a' ? '' : 'desativado'}>
          <TreinoA />
        </div>
        <div className={escolhido === 'b' ? '' : 'desativado'}>
          <TreinoB />
        </div>
        <div className={escolhido === 'c' ? '' : 'desativado'}>
          <TreinoC />
        </div>
        <div className={escolhido === 'd' ? '' : 'desativado'}>
          <TreinoD />
        </div>
      </Exercicios>
      <ButaoUp />
    </Main>
  );
}