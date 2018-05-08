import React from 'react'
import Link from 'gatsby-link'

import { rotate360, Rotate } from '../components/brand'

const Header = ({ siteTitle }) => (
  <nav className="navbar navbar-expand-lg">
    <a className="navbar-brand">
      <Link to="/">
        <Rotate>
          <h1>🌲</h1>
        </Rotate>
      </Link>
    </a>

    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link">
          <Link to="/page-2">portfolio</Link>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link">
          <Link to="/page-3">about</Link>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link">
          <Link to="/page-4">contact</Link>
        </a>
      </li>
    </ul>
  </nav>
)

export default Header
