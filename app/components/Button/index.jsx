import React from 'react';
import ButtonPrimary from './ButtonPrimary';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: ['btn', 'waves-effect', 'waves-light', this.props.extraClasses.split(' ')].join(' ')
    };
  }

  render() {
    return (
      <button type={this.props.type} className={this.state.classes}>{this.props.text}</button>
    );
  }
}

export {Button, ButtonPrimary};
