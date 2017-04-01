import React from 'react';
import {Badge} from 'components';

export default class BadgePrimary extends React.Component {
  render() {
    return (
      <Badge extraClasses="badge-primary" text={this.props.text} />
    );
  }
}
