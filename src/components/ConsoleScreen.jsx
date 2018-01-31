import React from 'react';
import PropTypes from 'prop-types';

class ConsoleScreen extends React.Component {
  render() {
    const { history } = this.props;

    console.log("HIST", history);
    return (
      <div className="console__screen-wrapper">
        <div className="console__screen">
          { history.map(line =>
            <div
              key={Math.random()}
              className={`console__line ${ line.type ? `console__line--${line.type}` : ""}`}
              dangerouslySetInnerHTML={{__html: line.text}}/>)
          }
        </div>
      </div>
    )
  }
}

ConsoleScreen.propTypes = {
  history: PropTypes.array.isRequired,
}

export default ConsoleScreen;