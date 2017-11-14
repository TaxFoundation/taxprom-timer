import React, { Component } from 'react';

class Options extends Component {
  render() {
    return (
      <div className="options">
        <label className="options__label" htmlFor="minutes">Minutes for Countdown</label>
        <input
          className="options__minutes"
          id="minutes"
          type="number"
          value={this.props.timerLength}
          onChange={event => this.props.updateTimerLength(event.target.value)}
        />
        <button
          className="options__start"
          onClick={this.props.startTimer}
        >
          Start Timer
        </button>
      </div>
    );
  }
}

export default Options;
