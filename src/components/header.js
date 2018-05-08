import React from 'react'
import Link from 'gatsby-link'

import { rotate360, Rotate } from '../components/brand'

const Header = ({ siteTitle }) => (
  <nav className="navbar navbar-expand-sm">
    <a className="navbar-brand">
      <Link to="/">
        <Rotate componentClass="rotate">
          <h1>🌲</h1>
        </Rotate>
      </Link>
    </a>

    <ul className="navbar-nav">
      <li className="nav-item">
        <Link to="/page-2">portfolio</Link>
      </li>
      <li className="nav-item">
        <Link to="/page-3">about</Link>
      </li>
      <li className="nav-item">
        <Link to="/page-4">contact</Link>
      </li>
    </ul>
  </nav>
)

export default Header
