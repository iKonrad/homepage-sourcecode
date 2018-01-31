import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ConsoleInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.value === '') {
      return;
    }

    this.props.handle(this.state.value)
    const state = this.state;
    state.value = "";
    this.setState(state);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div className="console__input">
        <form onSubmit={ this.handleSubmit }>
          <input className="console__input" onChange={ this.handleChange } value={this.state.value} placeholder="Type here" type="text" />
        </form>
      </div>
    )
  }
}

ConsoleInput.propTypes = {
  handle: PropTypes.func.isRequired,
}

export default ConsoleInput;