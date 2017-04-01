import React from 'react';
import {Badge} from 'components';

export default class BadgeWarning extends React.Component {
  render() {
    return (
      <Badge extraClasses="badge-warning" text={this.props.text} />
    );
  }
}
