import React, { Component } from 'react';

class Options extends Component {
  render() {
    return (
      <div className="options">
        <input type="number" value="15" onChange={this.props.updateTimerLength} />
        <button onClick={this.props.startTimer}>Start Timer</button>
      </div>
    );
  }
}

export default Options;
