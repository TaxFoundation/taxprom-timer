import React, { Component } from 'react';
import styled from 'styled-components';

const StyledOptions = styled.div`
  text-align: center;

  label {
    display: block;
    font-size: 1.6rem;
    margin-bottom: 0.8rem;
  }

  input {
    background-color: ${props => props.theme.white};
    border: 2px solid ${props => props.theme.pink};
    border-radius: 4px;
    color: ${props => props.theme.textColor};
    display: block;
    font-size: 2rem;
    margin-bottom: 3rem;
    text-align: center;
  }

  button {
    background-color: ${props => props.theme.pink};
    border: 1px solid ${props => props.theme.pink};
    border-radius: 4px;
    color: ${props => props.theme.white};
    display: inline-block;
    font-size: 2rem;
    text-align: center;
  }
`;

class Options extends Component {
  render() {
    return (
      <StyledOptions>
        <label htmlFor="minutes">Minutes for Countdown</label>
        <input
          id="minutes"
          type="number"
          value={this.props.timerLength}
          onChange={event => this.props.updateTimerLength(event.target.value)}
        />
        <button
          onClick={this.props.startTimer}
        >
          Start Timer
        </button>
      </StyledOptions>
    );
  }
}

export default Options;
