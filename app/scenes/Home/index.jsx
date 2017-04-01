import React from 'react';
import {connect} from 'react-redux';
import {HomeMain} from './scenes';

class HomeComponent extends React.Component {
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

export default HomeComponent;
