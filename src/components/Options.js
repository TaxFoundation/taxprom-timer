import React, { Component } from 'react';
import styled from 'styled-components';

const StyledOptions = styled.div`
  text-align: center;

  label {
    color: ${props => props.theme.blue};
    display: block;
    font-size: 4rem;
    margin-bottom: 2rem;
    text-transform: uppercase;
  }

  input {
    background-color: #fff;
    border: 2px solid ${props => props.theme.blue};
    border-radius: 4px;
    color: ${props => props.theme.blue};
    display: block;
    font-family: 'Lato', sans-serif;
    font-size: 3rem;
    margin: 0 auto 3rem;
    text-align: center;
  }

  button {
    background-color: ${props => props.theme.blue};
    border: 1px solid ${props => props.theme.blue};
    border-radius: 4px;
    color: #fff;
    display: inline-block;
    font-family: 'Libre Baskerville', sans-serif;
    font-size: 2rem;
    font-style: italic;
    padding: 1rem;
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
