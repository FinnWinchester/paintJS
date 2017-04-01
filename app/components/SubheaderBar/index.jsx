import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {Title, Input} from 'components';

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

SubheaderBarComponent.propTypes = {};

const mapStateToProps = state => {
  return {subheader: state.subheader};
};
const mapDispatchToProps = dispatch => {
  return {};
}

var SubheaderBar = connect(mapStateToProps, mapDispatchToProps)(SubheaderBarComponent);
export default SubheaderBar;
