import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

const StyledTimer = styled.div`
  p {
    margin: 0;
  }
`;

const Time = styled.p`
  font-size: 15rem;
  line-height: 1.2;
  text-align: center;
`;

const TimeText = styled.p`
  font-size: 2rem;
  text-align: center;
`;

const EndedText = styled.p`
  background: ${props => props.theme.white};
  font-size: 2.7rem;
  line-height: 1.4;
  max-width: 700px;
  padding: 1rem;
  text-align: center;
`;

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seconds: this.props.time * 60,
      timer: null,
    };

    this.tick = this.tick.bind(this);
    this.secondsToMinutesAndSeconds = this.secondsToMinutesAndSeconds.bind(this);
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
        {this.state.seconds >= 0 ? (
          <Fragment>
            <Time>{this.secondsToMinutesAndSeconds(this.state.seconds)}</Time>
            <TimeText>Until Bars Close and the Dinner Begins</TimeText>
          </Fragment>
        ) : (
          <EndedText>
            Please be seated and join us in honoring the Tax Foundation's 2018 Distinguished Service Award recipients!
          </EndedText>
        )}
      </StyledTimer>
    );
  }
}

export default Timer;
