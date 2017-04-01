import React from 'react';
import {Link} from 'react-router';

export default class DrawerMenu extends React.Component {
  render() {
    return (
      <ul id="slide-out" className="side-nav">
        <li>
          <div className="userView">
            <a href="/"><img className="circle" src="http://materializecss.com/images/yuna.jpg"/></a>
            <a href="/">
              <span className="white-text name">John Doe</span>
            </a>
            <a href="/">
              <span className="white-text email">jdandturk_gmail.com</span>
            </a>
          </div>
        </li>
        <li>
          <a href="/">
            <i className="material-icons">cloud</i>First Link With Icon</a>
        </li>
        <li>
          <Link to="/">Second Link</Link>
        </li>
        <li>
          <div className="divider"></div>
        </li>
        <li>
          <a className="subheader">Subheader</a>
        </li>
        <li>
          <a className="waves-effect" href="/">Third Link With Waves</a>
        </li>
      </ul>
    );
  }
}
