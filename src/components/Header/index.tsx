import { memo, useState } from "react";
import { BotaoMenu, MenuLateral, Cabecalho } from "./styles";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Header() {

  const [nav, setNav] = useState(false)

  function mostrar() {

    if (nav) {
      setNav(false);
    } else {
      setNav(true);
    }
  }

  return (
    <Cabecalho>
      <BotaoMenu onClick={mostrar}>
        <AiOutlineMenu className={nav ? 'fechado' : ''} />
      </BotaoMenu>
      <MenuLateral>
        <nav className={nav ? '' : 'fechado'}>
          <AiOutlineClose onClick={mostrar} />
          <ul>
            <li>
              <Link to="/" onClick={mostrar}>Inicio</Link>
            </li>
            <li>
              <Link to="/treinos" onClick={mostrar}>Treinos</Link>
            </li>
          </ul>
        </nav>
      </MenuLateral>
    </Cabecalho>
  );
}

export default memo(Header);