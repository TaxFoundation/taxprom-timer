import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seconds: this.props.time * 60,
      timer: null
    };

    this.tick = this.tick.bind(this);
    this.secondsToMinutesAndSeconds = this.secondsToMinutesAndSeconds.bind(
      this
    );
  }

  componentDidMount() {
    let timer = setInterval(this.tick, 1000);
    this.setState({ timer });
  }

  componentWillUnmount() {
    this.clearInterval(this.state.timer);
  }

  tick() {
    this.setState({ seconds: this.state.seconds - 1 });
    if (this.state.seconds < 0) this.clearInterval(this.state.timer);
  }

  secondsToMinutesAndSeconds(seconds) {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;
    let secondsPadding = remainingSeconds < 10 ? 0 : '';

    return `${minutes}:${secondsPadding}${remainingSeconds}`;
  }

  render() {
    return (
      <div className="timer">
        {this.state.seconds >= 0
          ? (
            <p className="timer__time">
              {this.secondsToMinutesAndSeconds(this.state.seconds)}
            </p>
          ) : (
            <p className="timer__ended">
              Please be seated--Tax Prom is starting!
            </p>
          )}
      </div>
    );
  }
}

export default Timer;
