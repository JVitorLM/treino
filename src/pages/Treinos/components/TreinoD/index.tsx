import { Treinos, Container } from '../../../../styles/globalTreino';

import ElevacaoLateral from '../../../../assets/img/treinod/elevacao-lateral.png';
import ElevacaoLateralCabo from '../../../../assets/img/treinod/elevacao-lateral-cabo.png';
import ElevacaoLateralMaq from '../../../../assets/img/treinod/elevacao-lateral-maquina.png';
import CrucifixoInversoNoCabo from '../../../../assets/img/treinod/crucifixo-inverso-cabo.png';
import UnilateralNaPolia from '../../../../assets/img/treinod/unilateral-na-polia.png';
import DesenvolvimentoComHalteres from '../../../../assets/img/treinod/desenvolvimento-com-halteres.png';
import ElevaçãoFrontalComHalteres from '../../../../assets/img/treinod/elevação-frontal-com-halteres.png';
import ElevaçãoFrontalCordaDeCostas from '../../../../assets/img/treinod/elevacao-frontal-de-corda-de-costas-na-polia.png';
import Encolhimento from '../../../../assets/img/treinod/encolhimento.png';

export default function TreinoD() {

  return (
    <Container>
      <h2>Ombros</h2>

      <Treinos>
        <h3>Ombros</h3>

        <li>
          <img src={ElevacaoLateral} alt="elevacao lateral" />
          <h4>elevacao lateral</h4>
          <p>03x15</p>
        </li>
        <li>
          <img src={ElevacaoLateralCabo} alt="elevacao lateral com cabo" />
          <h4>elevacao lateral com cabo</h4>
          <p>03x15</p>
        </li>
        <li>
          <img src={ElevacaoLateralMaq} alt="elevacao lateral na máquina" />
          <h4>elevacao lateral na máquina</h4>
          <p>03x15</p>
        </li>
        <li>
          <img src={CrucifixoInversoNoCabo} alt="crucifixo inverso no cabo" />
          <h4>crucifixo inverso no cabo</h4>
          <p>03x15</p>
        </li>
        <li>
          <img src={UnilateralNaPolia} alt="unilateral na polia" />
          <h4>unilateral na polia</h4>
          <p>03x15</p>
        </li>
        <li>
          <img src={DesenvolvimentoComHalteres} alt="desenvolvimento com halteres" />
          <h4>desenvolvimento com halteres</h4>
          <p>03x15</p>
        </li>
        <li>
          <img src={ElevaçãoFrontalComHalteres} alt="elevação frontal com halteres" />
          <h4>elevação frontal com halteres</h4>
          <p>03x15</p>
        </li>
        <li>
          <img src={ElevaçãoFrontalCordaDeCostas} alt="elevação frontal corda de costas ( na polia )" />
          <h4>elevação frontal corda de costas ( na polia )</h4>
          <p>03x15</p>
        </li>
        <li>
          <img src={Encolhimento} alt="encolhimento" />
          <h4>encolhimento</h4>
          <p>03x15</p>
        </li>
      </Treinos>
    </Container>
  );
}