import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import { Rotate } from '../components/brand';

const HeaderWrapper = styled.nav`
  display: grid;
  grid-template-columns: 5rem 7rem 7rem 7rem;
  grid-template-rows: 5rem;
  text-align: center;
  list-style-type: none;

  @media (max-width: 900px) {
    grid-template-columns: 5rem 8rem 5rem 5rem;
    font-size: 13px;
    text-align: center;
  }
`;

const ListItem = styled.li`
  align-self: end;
`;

const Header = () => (
  <HeaderWrapper>
    <Link to="/">
      <Rotate>
        <span role="img" className="nav-logo" aria-label="logo">
          🌲
        </span>
      </Rotate>
    </Link>

    <ListItem className="nav-item">
      <Link to="/portfolio">portfolio</Link>
    </ListItem>
    <ListItem className="nav-item">
      <Link to="/about">about</Link>
    </ListItem>
    <ListItem className="nav-item">
      <Link to="/contact">contact</Link>
    </ListItem>
  </HeaderWrapper>
);

export default Header;
