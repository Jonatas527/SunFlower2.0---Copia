import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const Logo = styled.a`
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  color: #000;
`;

export const MobileMenu = styled.div`
  display: none;
  cursor: pointer;
  flex-direction: column;
  justify-content: space-between;
  height: 25px;

  @media (max-width: 999px) {
    display: flex;
  }

  &.active ${Line}:nth-child(1) {
    transform: rotate(-45deg) translate(-8px, 8px);
  }

  &.active ${Line}:nth-child(2) {
    opacity: 0;
  }

  &.active ${Line}:nth-child(3) {
    transform: rotate(45deg) translate(-5px, -7px);
  }
`;

export const Line = styled.div`
  width: 30px;
  height: 3px;
  background-color: #000;
  transition: all 0.3s ease;
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;

  @media (max-width: 999px) {
    position: absolute;
    top: 8vh;
    right: 0;
    width: 50vw;
    height: 92vh;
    background: #23232e;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    transform: translateX(100%);
    transition: transform 0.3s ease-in;
  }

  &.active {
    transform: translateX(0);
  }
`;

export const NavItem = styled.li`
  margin-left: 20px;

  @media (max-width: 999px) {
    margin-left: 0;
    opacity: 0;
    animation: ${({ index }) => `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`};
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 18px;
`;

export const keyframes = {
  navLinkFade: `
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  `,
};
