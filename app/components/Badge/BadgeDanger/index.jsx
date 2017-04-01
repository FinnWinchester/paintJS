import React from 'react';
import {Badge} from 'components';

export default class BadgeDanger extends React.Component {
  render() {
    return (
      <Badge extraClasses="badge-danger" text={this.props.text} />
    );
  }
}
