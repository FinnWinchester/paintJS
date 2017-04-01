import React from 'react';
import {connect} from 'react-redux';
import {PaintMain, PaintAlter} from './scenes';

class PaintComponent extends React.Component {
  componentWillMount() {
    this.props.setSubheader();
  }

  render() {
    return (
      <div className="home-section content">
        <div className="non-fluid-container">
          {this.props.children || <PaintMain/>}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    setSubheader: () => dispatch({
      type: 'SET_SUBHEADER',
      data: {
        subheader: false
      }
    })
  };
}

var Paint = connect(mapStateToProps, mapDispatchToProps)(PaintComponent);
export default Paint;
