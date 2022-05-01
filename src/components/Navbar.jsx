import React from 'react'
import Cardwidget from './Cartwidget';

function Navbar(){
    return <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-center">
    <a className="navbar-brand" href="/">VOMEA</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="/sillas">Sillas</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/sillones">Sillones</a>
          </li>
        <li className="nav-item">
          <a className="nav-link" href="/Bazar">Bazar</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="desactivado">Disabled</a>
        </li>
        <Cardwidget/>
      </ul>
    </div>
  </nav>
}

export default Navbar;