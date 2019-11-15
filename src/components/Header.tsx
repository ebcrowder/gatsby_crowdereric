import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

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

const styles = {
  active: {
    fontWeight: 'bold',
  },
};

const Logo = styled.img`
  width: 80px;
  height: 80px;
  align-self: auto;
`;

const Header = () => (
  <HeaderWrapper role="navigation" aria-label="navigation">
    <Link to="/" partiallyActive={true} activeStyle={styles.active}>
      <Logo src={logo} alt="logo" aria-label="logo" />
    </Link>
    <ListItem className="nav-item">
      <Link to="/blog" partiallyActive={true} activeStyle={styles.active}>
        blog
      </Link>
    </ListItem>
    <ListItem className="nav-item">
      <Link to="/about" partiallyActive={true} activeStyle={styles.active}>
        about
      </Link>
    </ListItem>
    <ListItem className="nav-item">
      <Link to="/cv" partiallyActive={true} activeStyle={styles.active}>
        cv
      </Link>
    </ListItem>
  </HeaderWrapper>
);

export default Header;
