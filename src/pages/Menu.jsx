import  { useState } from 'react';
import { 
  Header, 
  Nav, 
  Logo, 
  MobileMenu, 
  NavList, 
  NavItem, 
  NavLink, 
  Line 
} from './menu.styles';

const Menu = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <Header>
      <Nav>
        <Logo href="/">Tiger Codes</Logo>
        <MobileMenu onClick={handleClick} className={isActive ? 'active' : ''}>
          <Line />
          <Line />
          <Line />
        </MobileMenu>
        <NavList className={isActive ? 'active' : ''}>
          <NavItem><NavLink href="#">Início</NavLink></NavItem>
          <NavItem><NavLink href="#">Sobre</NavLink></NavItem>
          <NavItem><NavLink href="#">Projetos</NavLink></NavItem>
          <NavItem><NavLink href="#">Contato</NavLink></NavItem>
        </NavList>
      </Nav>
    </Header>
  );
};

export default Menu;
