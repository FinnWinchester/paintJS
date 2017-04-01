import React from 'react';

class Icon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: ['material-icons']
    };

    var extraClasses = this.props.classes.split(' ');

    if (extraClasses.length > 0) {
      this.state.classes = [
        this.state.classes, ...extraClasses
      ]
    }

    this.state.classes = this.state.classes.join(' ');
  }

  render() {
    return (
      <i className={this.state.classes}>{this.props.icon}</i>
    );
  }
}

Icon.defaultProps = {
  classes: ''
};

export default Icon;
