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
    clearInterval(this.state.timer);
  }

  tick() {
    this.setState({ seconds: this.state.seconds - 1 });
    if (this.state.seconds < 0) clearInterval(this.state.timer);
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
            <div>
              <p className="timer__time">
                {this.secondsToMinutesAndSeconds(this.state.seconds)}
              </p>
              <p className="timer__after">
                Until We Begin with Vice President Mike Pence
              </p>
            </div>
          ) : (
            <p className="timer__ended">
              Please be seated and join us in honoring the Tax Foundation's 2017 Distinguished Service Award recipient,<br /><span className="timer__name">Vice President Mike Pence!</span>
            </p>
          )}
      </div>
    );
  }
}

export default Timer;
