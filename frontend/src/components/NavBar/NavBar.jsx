import React from 'react'

import { images } from '../../constants';
import './NavBar.scss';

function NavBar() {
  return (
    <nav className="app__navbar" >
      <div className="app__navbar-logo">
        <img src={ images.logo } alt="logo" />
      </div>
      <ul className="app__navbar-links" >
        {[ 'Home', 'About', 'Work', 'Skills', 'Contact' ].map((item)=>(
          <li className="app__flex p-text " key={`link-${item}`} >
            <div />
            <a href={`#${item}`}>{item}</a>

          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar