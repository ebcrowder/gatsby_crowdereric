import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import posed from 'react-pose';

import logo from '../img/logo.png';

const ListItem = styled.li`
  justify-self: center;
`;

const HeaderWrapper = styled.nav`
  display: grid;
  grid-template-columns: 5rem 5rem 5rem 5rem;
  grid-template-rows: 5rem;
  align-items: center;
  justify-items: center;
  list-style-type: none;
`;

const NavLink: any = styled.a`
  &.active,
  &[partially-active] {
    font-weight: bold;
  }
`;

const Logo = styled.img`
  width: 80px;
  height: 80px;
  align-self: auto;
`;

const LogoContainer = posed.div({
  hover: {
    scale: 1.2,
  },
  hoverable: true,
  init: {
    scale: 1,
  },
  press: {
    scale: 1.1,
  },
  pressable: true,
});

const isPartiallyActive = ({ isPartiallyCurrent }: any) => {
  return isPartiallyCurrent ? { 'partially-active': 'true' } : null;
};

const isActive = ({ isCurrent }: any) => {
  return isCurrent ? { 'partially-active': 'true' } : null;
};

const Header = () => (
  <>
    <HeaderWrapper role="navigation" aria-label="navigation">
      <NavLink as={Link} to="/" getProps={isActive}>
        <LogoContainer>
          <Logo src={logo} alt="logo" aria-label="logo" />
        </LogoContainer>
      </NavLink>
      <ListItem className="nav-item">
        <NavLink as={Link} to="/blog" getProps={isPartiallyActive}>
          blog
        </NavLink>
      </ListItem>
      <ListItem className="nav-item">
        <NavLink as={Link} to="/about" getProps={isPartiallyActive}>
          about
        </NavLink>
      </ListItem>
      <ListItem className="nav-item">
        <NavLink as={Link} to="/cv" getProps={isPartiallyActive}>
          cv
        </NavLink>
      </ListItem>
    </HeaderWrapper>
  </>
);

export default Header;
