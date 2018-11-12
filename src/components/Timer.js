import React, { Component } from 'react';
import styled from 'styled-components';

const StyledTimer = styled.div`
  p {
    margin: 0;
  }

  .timer__time {
    font-size: 15rem;
    line-height: 1.2;
    text-align: center;
  }

  .timer__after {
    font-size: 2rem;
    line-height: 0;
    text-align: center;
  }

  .timer__ended {
    background: ${props => props.theme.white};
    font-size: 2.7rem;
    line-height: 1.4;
    max-width: 700px;
    padding: 1rem;
    text-align: center;
  }

  .timer__name {
    font-size: 3rem;
    font-weight: 700;
  }

`;

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
      <StyledTimer>
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
      </StyledTimer>
    );
  }
}

export default Timer;
