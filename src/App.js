import React, { Component, Fragment } from 'react';
import styled, {createGlobalStyle, ThemeProvider} from 'styled-components';
import Options from './components/Options';
import Timer from './components/Timer';
import BG from './images/background.svg';
import Container from './images/container.svg';

const theme = {
  white: '#ffffff',
  bgColor: '#4C2E86',
  textColor: '#322261',
};

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
`;

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
  grid-template: 100vh / 100vw;
  height: 100vh;
  justify-items: center;
  width: 100%;

  > div {
    align-self: stretch;
    background-image: url('${Container}');
    background-size: 100% 100%;
    justify-self: stretch;
    margin: 3rem;
  }
`;

class App extends Component {
  constructor() {
    super();

    this.state = {
      timerLength: 15,
      timerStarted: false
    };

    this.updateTimerLength = this.updateTimerLength.bind(this);
    this.startTimer = this.startTimer.bind(this);
  }

  updateTimerLength(time) {
    this.setState({timerLength: time});
  }

  startTimer() {
    this.setState({timerStarted: true});
  }

  render() {
    return (
      <Fragment>
        <GlobalStyle></GlobalStyle>
        <ThemeProvider theme={theme}>
          <StyledApp>
            <div>
              {
                this.state.timerStarted
                  ? <Timer time={this.state.timerLength} />
                  : <Options
                    timerLength={this.state.timerLength}
                    updateTimerLength={this.updateTimerLength}
                    startTimer={this.startTimer}  
                  />
              }
            </div>
          </StyledApp>
        </ThemeProvider>
      </Fragment>
    );
  }
}

export default App;
