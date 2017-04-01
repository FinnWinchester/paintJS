import React from 'react';
import {Button} from 'components';

export default class ButtonPrimary extends React.Component {
  render() {
    return (
      <Button extraClasses="btn-primary" text={this.props.text} />
    );
  }
}
