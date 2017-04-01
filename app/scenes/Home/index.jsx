import React from 'react';
import {connect} from 'react-redux';
import {HomeMain, HomeAlter} from './scenes';

class HomeComponent extends React.Component {
  componentWillMount() {
    this.props.setSubheader();
  }

  render() {
    return (
      <div className="home-section content">
        <div className="non-fluid-container">
          {this.props.children || <HomeMain/>}
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
        subheader: [
          {
            name: 'Alter',
            to: '/home/alter'
          }, {
            name: 'Other',
            to: '/home/other'
          }
        ]
      }
    })
  };
}

var Home = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
export default Home;
