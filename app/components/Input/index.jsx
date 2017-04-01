import React, {PropTypes} from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: [
        'input-field', ...this.props.classes
      ]
    };
    if (this.props.placeholder) {
      this.state.placeholder = this.props.placeholder;
    }
  }

  render() {
    return (
      <div className={this.state.classes}>
        {this.props.icon
          ? <i className="material-icons prefix">{this.props.icon}</i>
          : null}
        <input {...this.state.placeholder} type={this.props.type} id={this.props.id}/>
        <label htmlFor={this.props.id}>{this.props.label}</label>
      </div>
    );
  }
}

Input.defaultProps = {
  placeholder: false,
  type: 'text',
  id: '_input_id',
  classes: [],
  label: '',
  icon: false
};

export default Input;
