import React from 'react';
import {Link} from 'react-router';
import {DrawerMenu} from 'components';

let HeaderBarComponent = () => (
  <div>
    <nav className="header-bar">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo center">
          PaintJS
        </Link>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li>
            <Link to="/home" activeClassName="active-link">Home</Link>
          </li>
          <li>
            <Link to="/paint" activeClassName="active-link">Paint</Link>
          </li>
        </ul>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="https://github.com/FinnWinchester/paintJS" target="_blank">Fork me on GitHub!</a>
          </li>
        </ul>
      </div>
      <DrawerMenu/>
    </nav>
  </div>
);

export default HeaderBarComponent;
