import React from 'react';
import {Link} from 'react-router';

class SubheaderBarComponent extends React.Component {
  render() {
    if (this.props.subheader) {
      return (
        <nav className="subheader-bar">
          <div className="nav-wrapper">
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              {this.props.subheader.map((each) => (
                <li key={each.name}>
                  <Link to={each.to} activeClassName="active-link">{each.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      );
    }
    return (<div/>);
  }
}

export default SubheaderBarComponent;
