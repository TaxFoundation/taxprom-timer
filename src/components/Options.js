import React, { Component } from 'react';
import styled from 'styled-components';

const StyledOptions = styled.div`
  text-align: center;

  label {
    color: ${props => props.theme.blue};
    display: block;
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  input {
    background-color: ${props => props.theme.white};
    border: 2px solid ${props => props.theme.teal};
    border-radius: 4px;
    color: ${props => props.theme.textColor};
    display: block;
    font-family: ${props => props.theme.fontFamily};
    font-size: 2rem;
    margin-bottom: 3rem;
    text-align: center;
  }

  button {
    background-color: ${props => props.theme.teal};
    border: 1px solid ${props => props.theme.teal};
    border-radius: 4px;
    color: ${props => props.theme.white};
    display: inline-block;
    font-family: ${props => props.theme.fontFamily};
    font-size: 1.6rem;
    padding: 0.4rem;
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
        <button onClick={this.props.startTimer}>Start Timer</button>
      </StyledOptions>
    );
  }
}

export default Options;
