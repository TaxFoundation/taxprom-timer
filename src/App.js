import React, { Component, Fragment } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Options from './components/Options';
import Timer from './components/Timer';
import BG from './images/background.svg';
import BebasNeue from './fonts/BebasNeue-Regular.woff2';

const theme = {
  white: '#fff',
  gold: '#fbb316',
  teal: '#00acc1',
  blue: '#005b97',
  darkBlue: '#003f6c',
  bgColor: '#fff',
  textColor: '#005b97',
  fontFamily: '"Bebas Neue", sans-serif',
};

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Bebas Neue';
    src: url('${BebasNeue}');
  }

  html, body {
    font-family: 'Bebas Neue', sans-serif;
    margin: 0;
    padding: 0;
  }
`;

const StyledApp = styled.div`
  background-color: ${props => props.theme.bgColor};
  background-image: url('${BG}');
  background-position: 50% 50%;
  background-size: cover;
  box-sizing: border-box;
  color: ${props => props.theme.textColor};
  display: grid;
  font-size: 16px;
  grid-template: 100vh / 100vw;
  height: 100vh;
  width: 100%;
`;

const Container = styled.div`
  align-items: center;
  align-self: stretch;
  background-color: ${props => props.theme.bgColor};
  border: 5px solid ${props => props.theme.gold};
  display: grid;
  justify-items: center;
  justify-self: stretch;
  margin: 10%;
`;

class App extends Component {
  constructor() {
    super();

    this.state = {
      timerLength: 15,
      timerStarted: false,
    };

    this.updateTimerLength = this.updateTimerLength.bind(this);
    this.startTimer = this.startTimer.bind(this);
  }

  updateTimerLength(time) {
    this.setState({ timerLength: time });
  }

  startTimer() {
    this.setState({ timerStarted: true });
  }

  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <StyledApp>
            <Container>
              {this.state.timerStarted ? (
                <Timer time={this.state.timerLength} />
              ) : (
                <Options
                  timerLength={this.state.timerLength}
                  updateTimerLength={this.updateTimerLength}
                  startTimer={this.startTimer}
                />
              )}
            </Container>
          </StyledApp>
        </ThemeProvider>
      </Fragment>
    );
  }
}

export default App;
