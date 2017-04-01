import React, {PropTypes} from 'react';
import {Link} from 'react-router';

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

export default PanelHeaderComponent;
