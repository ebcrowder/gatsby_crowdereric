import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const HeaderWrapper = styled.nav`
  display: grid;
  grid-template-columns: 6rem 6rem 6rem 6rem 6rem;
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

const ListItem = styled.li`
  align-self: end;
`;

const Header = () => (
  <HeaderWrapper>
    <ListItem className="nav-item">
      <Link to="/">home</Link>
    </ListItem>
    <ListItem className="nav-item">
      <Link to="/blog">blog</Link>
    </ListItem>
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
