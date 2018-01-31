import React, { Component } from 'react';
import ConsoleScreen from './ConsoleScreen';
import ConsoleInput from './ConsoleInput';
import handleCommand from './../utils/consoleEngine';

import './console.css';

class Console extends Component {
  constructor(props) {
    super(props);
    this.limit = 13;
    this.state = {
      history: [{text: 'Hi, welcome on my homepage. Type \'help\' to get a list of all available commands.'}],
    }

    this.print = this.print.bind(this);
  }

  async print(command) {
    const state = this.state;

    state.history.push({text: [command]})

    if (command === 'clear') {
      state.history = [];
    } else {
      const response = handleCommand(command);
      await response.text.forEach(text => state.history.push({type: response.type, text}));
      if (state.history.length >= this.limit) {
        state.history = state.history.splice((state.history.length) - this.limit, state.history.length - 1);
      }
    }

    this.setState(state);
  }

  render() {
    return (
      <div className="console">
        <div className="console__bar">
          <div className="console__button console__button--close"></div>
          <div className="console__button console__button--min"></div>
          <div className="console__button console__button--max"></div>
        </div>
        <ConsoleScreen history={ this.state.history } />
        <ConsoleInput handle={ this.print } />

      </div>
    )
  }

}

export default Console;