import React, { Component } from 'react';

class Options extends Component {
  render() {
    return (
      <div className="options">
        <input
          type="number"
          value={this.props.timerLength}
          onChange={event => this.props.updateTimerLength(event.target.value)}
        />
        <button onClick={this.props.startTimer}>Start Timer</button>
      </div>
    );
  }
}

export default Options;
