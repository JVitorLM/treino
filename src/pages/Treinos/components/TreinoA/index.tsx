import { Treinos, Container } from '../../../../styles/globalTreino';

import CrucifixoInclinado from '../../../../assets/img/treinoa/crucifixo-inclinado.png';
import Supino from '../../../../assets/img/treinoa/supino-inclinado.png';
import CrucifixoReto from '../../../../assets/img/treinoa/crucifixo-reto.png';
import TricepsTesta from '../../../../assets/img/treinoa/tricepis-testa.png';
import TricepsPulley from '../../../../assets/img/treinoa/triceps-pulley-unilateral.png'
import TricepsNoSupino from '../../../../assets/img/treinoa/triceps-no-banco-do-supino.png';


export default function TreinoA() {

  return (
    <Container>
      <h2>Peitos | Trícepis | Panturrilha</h2>

      <Treinos>
        <h3>Peito</h3>

        <li>
          <img src={CrucifixoInclinado} alt="" />
          <h4>crucifixo inclinado com halteres</h4>
          <p>03x15</p>
        </li>
        <li>
          <img src={Supino} alt="" />
          <h4>supino inclinado</h4>
          <p>03x15</p>
        </li>
        <li>
          <img src={CrucifixoReto} alt="" />
          <h4>crucifixo reto com halteres</h4>
          <p>03x15</p>
        </li>

        <h3>Trícepis</h3>
        <li>
          <img src={TricepsPulley} alt="" />
          <h4>triceps-pulley-unilateral</h4>
          <p>03x15</p>
        </li>
        <li>
          <img src={TricepsTesta} alt="" />
          <h4>trícepis testa</h4>
          <p>03x15</p>
        </li>
        <li>
          <img src={TricepsNoSupino} alt="" />
          <h4>tríceps no banco do supino</h4>
          <p>03x15</p>
        </li>

        <h3>Panturrilha</h3>
        <li>
          <img src={''} alt="Panturrilha no Smith " />
          <h4>Panturrilha no Smith</h4>
          <p>03x15</p>
        </li>
        <li>
          <img src={''} alt="Panturrilha Sentada" />
          <h4>Panturrilha Sentada</h4>
          <p>03x15</p>
        </li>
        <li>
          <img src={''} alt="Panturrilha 'Ala Pacholok'" />
          <h4>Panturrilha "Ala Pacholok"</h4>
          <p>03x15</p>
        </li>
        <li>
          <img src={''} alt="Panturrilha no Degrau Unilateral " />
          <h4>Panturrilha no Degrau Unilateral </h4>
          <p>03x15</p>
        </li>
      </Treinos>
    </Container>
  );
}