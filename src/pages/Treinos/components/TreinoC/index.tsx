import { Treinos, Container } from '../../../../styles/globalTreino';

import RemadaBaixa from '../../../../assets/img/treinob/remada-baixa-triangulo.png';
import PulleyFrente from '../../../../assets/img/treinob/pulley-frente.png';
import CrucifixoInverso from '../../../../assets/img/treinob/curcifixo-inverso-maquina.png';
import BicepsNaMaquina from '../../../../assets/img/treinob/biceps-na-maquina.png';
import BicepsBarraW from '../../../../assets/img/treinob/biceps-barra-w.png';
import RoscaBiceps from '../../../../assets/img/treinob/rosca-biceps-inclinada.png';

export default function TreinoC() {

  return (
    <Container>
      <h2>Costas | Bíceps | Panturrilha</h2>

      <Treinos>
        <h3>Costas</h3>

        <li>
          <img src={RemadaBaixa} alt="remada baixa" />
          <h4>remada baixa</h4>
          <p>03x15</p>
        </li>
        <li>
          <img src={PulleyFrente} alt="pulley frente" />
          <h4>pulley frente</h4>
          <p>03x15</p>
        </li>
        <li>
          <img src={CrucifixoInverso} alt="crucifixo inverso" />
          <h4>crucifixo inverso</h4>
          <p>03x15</p>
        </li>

        <h3>Bíceps</h3>
        <li>
          <img src={BicepsNaMaquina} alt="bíceps na maquina" />
          <h4>bíceps na maquina</h4>
          <p>03x15</p>
        </li>
        <li>
          <img src={BicepsBarraW} alt="bíceps na barra w" />
          <h4>bíceps na barra w</h4>
          <p>03x15</p>
        </li>
        <li>
          <img src={RoscaBiceps} alt="Biceps banco inclinado" />
          <h4>Biceps banco inclinado</h4>
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