import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {Title, Input, DrawerMenu} from 'components';

const style = {
  width: '55px'
};

let HeaderBarComponent = ({count, onPlusClick, onMinusClick}) => (
  <div>
    <nav className="header-bar">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo center">
          PaintJS
        </Link>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li>
            <a href="javascript:;" data-activates="slide-out" className="toggle-drawer">
              <i className="material-icons">menu</i>
            </a>
          </li>
          <li>
            <Link to="/home" activeClassName="active-link">Home</Link>
          </li>
          <li>
            <Link to="/paint" activeClassName="active-link">Paint</Link>
          </li>
        </ul>
      </div>
      <DrawerMenu/>
    </nav>
  </div>
);

HeaderBarComponent.propTypes = {
  onPlusClick: PropTypes.func.isRequired,
  onMinusClick: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {count: state.count};
};
const mapDispatchToProps = dispatch => {
  return {
    onPlusClick: () => dispatch({type: 'INCREMENT'}),
    onMinusClick: () => dispatch({type: 'DECREMENT'})
  };
}

var HeaderBar = connect(mapStateToProps, mapDispatchToProps)(HeaderBarComponent);
export default HeaderBar;
