import { Treinos, Container } from '../../../../styles/globalTreino';

import AgachamentoLivre from '../../../../assets/img/treinoc/agachamento-livre.png';
import LegPress from '../../../../assets/img/treinoc/leg-press.png';
import CadeiraExtensora from '../../../../assets/img/treinoc/cadeira-extensora.png';
import Squat from '../../../../assets/img/treinoc/squat.png';

export default function TreinoB() {

  return (
    <Container>
      <h2>Pernas</h2>

      <Treinos>
        <h3>Pernas</h3>
        <p style={{ textAlign: "center" }}>5 mimutos de bicicleta</p>
        <li>
          <img src={AgachamentoLivre} alt="agachamento" />
          <h4>agachamento</h4>
          <p>03x15</p>
        </li>
        <li>
          <img src={LegPress} alt="leg press" />
          <h4>leg press</h4>
          <p>03x15</p>
        </li>
        <li>
          <img src={CadeiraExtensora} alt="cadeira extensora" />
          <h4>cadeira extensora</h4>
          <p>03x15</p>
        </li>
        <li>
          <img src={Squat} alt="squat" />
          <h4>squat</h4>
          <p>03x15</p>
        </li>
      </Treinos>
    </Container>
  );
}