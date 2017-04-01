import React from 'react';

export default class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: [props.size, 'title', 'truncate'].join(' ')
    };
  }

  render() {
    return (
      <div className={this.state.classes}>
        {this.props.text}
      </div>
    );
  }
}
