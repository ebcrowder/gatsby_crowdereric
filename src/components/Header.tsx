import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import logo from '../img/logo.svg';

const ListItem = styled.li`
  align-self: end;
`;

const HeaderWrapper = styled.nav`
  display: grid;
  grid-template-columns: 5rem 5rem 5rem 5rem 5rem;
  grid-template-rows: 5rem;
  align-items: center;
  justify-items: center;
  list-style-type: none;

  @media (max-width: 900px) {
    grid-template-columns: 5rem 5rem 5rem 5rem 5rem;
    font-size: 13px;
    text-align: center;
  }
`;

const NavLink: any = styled.a`
  &.active,
  &[partially-active] {
    color: #00bfa5;
    fill: #00bfa5;
  }
`;

const Logo = styled.img`
  width: 90px;
  height: 90px;
`;

const isPartiallyActive = ({ isPartiallyCurrent }: any) => {
  return isPartiallyCurrent ? { 'partially-active': 'true' } : null;
};

const isActive = ({ isCurrent }: any) => {
  return isCurrent ? { 'partially-active': 'true' } : null;
};

const Header = () => (
  <HeaderWrapper role="navigation" aria-label="navigation">
    <NavLink as={Link} to="/" getProps={isActive}>
      <Logo src={logo} alt="logo" aria-label="logo" />
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
      <NavLink as={Link} to="/contact" getProps={isPartiallyActive}>
        contact
      </NavLink>
    </ListItem>
  </HeaderWrapper>
);

export default Header;
