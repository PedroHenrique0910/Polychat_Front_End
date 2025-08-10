import React, { useState } from 'react';
import { HeaderContainer } from './styles';
import Logo from '../logo/logo';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderContainer menuOpen={menuOpen}>
      <Logo id="polychatLogo" />

      <button id="openMenu" onClick={() => setMenuOpen(true)}>
        &#9776;
      </button>

      <nav>
        <button id="closeMenu" onClick={() => setMenuOpen(false)}>X</button>
        <a href="#">Inicio</a>
        <a href="#">Produtos</a>
        <a href="#">Sobre</a>
        <a href="#">Contato</a>
      </nav>
    </HeaderContainer>
  );
}

export default Header;
