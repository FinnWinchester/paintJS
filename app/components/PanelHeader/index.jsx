import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {Title, Input, DrawerMenu} from 'components';

const style = {
  width: '55px'
};

class PanelHeaderComponent extends React.Component {
  render() {
    return (
      <div className="panel-header">
        <div className="panel-header-wrapper">
          <div className="panel-header-title">
            {this.props.title}
          </div>
        </div>
      </div>
    );
  }
}

PanelHeaderComponent.propTypes = {
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

var PanelHeader = connect(mapStateToProps, mapDispatchToProps)(PanelHeaderComponent);
export default PanelHeader;
