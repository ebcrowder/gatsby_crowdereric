import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <nav className="navbar navbar-expand-lg">
    <a className="navbar-brand" href="#">
      <Link to="/">{siteTitle}</Link>
    </a>

    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">
          <Link to="/page-2">portfolio</Link>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          <Link to="/page-3">about</Link>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          <Link to="/page-4">contact</Link>
        </a>
      </li>
    </ul>
  </nav>
)

export default Header
