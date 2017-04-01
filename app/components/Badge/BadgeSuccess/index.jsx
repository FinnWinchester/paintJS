import React from 'react';
import {Badge} from 'components';

export default class BadgeSuccess extends React.Component {
  render() {
    return (
      <Badge extraClasses="badge-success" text={this.props.text} />
    );
  }
}
