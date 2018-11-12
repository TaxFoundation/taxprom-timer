import React, { Component } from 'react';
import styled, {ThemeProvider} from 'styled-components';
import Options from './components/Options';
import Timer from './components/Timer';
import BG from './images/splash-bg.png';

const theme = {
  purple: '#4C2E86',
  darkPurple: '#322261',
  teal: '#12BCD3',
  pink: '#E04681',
  white: '#ffffff',
  bgColor: this.darkPurple,
  textColor: this.purple,
};

const StyledApp = styled.div`
  align-items: center;
  background-color: ${props => props.theme.bgColor};
  background-image: url('${BG}');
  background-position: 50% 50%;
  background-size: cover;
  box-sizing: border-box;
  color: ${props => props.theme.textColor};
  display: grid;
  font-family: 'Oswald', sans-serif;
  font-size: 16px;
  grid-template: auto / auto;
  height: 100vh;
  justify-items: center;
  width: 100%;
`;

class App extends Component {
  constructor() {
    super();

    this.state = {
      timerLength: 15,
      timerStarted: false
    };

    this.updateTimerLength = this.updateTimerLength.bind(this);
    this.startTimer = this. startTimer.bind(this);
  }

  updateTimerLength(time) {
    this.setState({timerLength: time});
  }

  startTimer() {
    this.setState({timerStarted: true});
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledApp>
          {
            this.state.timerStarted
              ? <Timer time={this.state.timerLength} />
              : <Options
                timerLength={this.state.timerLength}
                updateTimerLength={this.updateTimerLength}
                startTimer={this.startTimer}  
              />
          }
        </StyledApp>
      </ThemeProvider>
    );
  }
}

export default App;
