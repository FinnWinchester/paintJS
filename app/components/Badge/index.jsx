import React from 'react';
import BadgePrimary from './BadgePrimary';
import BadgeSuccess from './BadgeSuccess';
import BadgeWarning from './BadgeWarning';
import BadgeDanger from './BadgeDanger';

class Badge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: ['badge', 'new', this.props.extraClasses.split(' ')].join(' ')
    };
  }

  render() {
    return (
      <span className={this.state.classes}>{this.props.text}</span>
    );
  }
}

Badge.defaultProps = {
  extraClasses: ''
};

export {Badge, BadgePrimary, BadgeSuccess, BadgeWarning, BadgeDanger};
