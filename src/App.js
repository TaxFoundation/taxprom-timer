import React, { Component, Fragment } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Options from './components/Options';
import Timer from './components/Timer';
import BG from './images/bg.png';

const theme = {
  black: '#000000',
  blueDark: '#001429',
  blue: '#00548b',
  blueLight: '#0096b5',
  yellow: '#ffc200',
};

const GlobalStyle = createGlobalStyle`
/* lato-300 - latin */
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 300;
  src: url('./fonts/lato-v16-latin-300.eot'); /* IE9 Compat Modes */
  src: local('Lato Light'), local('Lato-Light'),
       url('./fonts/lato-v16-latin-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('./fonts/lato-v16-latin-300.woff2') format('woff2'), /* Super Modern Browsers */
       url('./fonts/lato-v16-latin-300.woff') format('woff'), /* Modern Browsers */
       url('./fonts/lato-v16-latin-300.ttf') format('truetype'), /* Safari, Android, iOS */
       url('./fonts/lato-v16-latin-300.svg#Lato') format('svg'); /* Legacy iOS */
}

/* libre-baskerville-regular - latin */
@font-face {
  font-family: 'Libre Baskerville';
  font-style: normal;
  font-weight: 400;
  src: url('./fonts/libre-baskerville-v7-latin-regular.eot'); /* IE9 Compat Modes */
  src: local('Libre Baskerville'), local('LibreBaskerville-Regular'),
       url('./fonts/libre-baskerville-v7-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('./fonts/libre-baskerville-v7-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('./fonts/libre-baskerville-v7-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('./fonts/libre-baskerville-v7-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('./fonts/libre-baskerville-v7-latin-regular.svg#LibreBaskerville') format('svg'); /* Legacy iOS */
}

/* libre-baskerville-italic - latin */
@font-face {
  font-family: 'Libre Baskerville';
  font-style: italic;
  font-weight: 400;
  src: url('./fonts/libre-baskerville-v7-latin-italic.eot'); /* IE9 Compat Modes */
  src: local('Libre Baskerville Italic'), local('LibreBaskerville-Italic'),
       url('./fonts/libre-baskerville-v7-latin-italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('./fonts/libre-baskerville-v7-latin-italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('./fonts/libre-baskerville-v7-latin-italic.woff') format('woff'), /* Modern Browsers */
       url('./fonts/libre-baskerville-v7-latin-italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('./fonts/libre-baskerville-v7-latin-italic.svg#LibreBaskerville') format('svg'); /* Legacy iOS */
}


  html, body {
    color: ${theme.black};
    font-family: 'Lato', sans-serif;
    margin: 0;
    padding: 0;

    @media (min-width: 800px) {
      font-size: 2vmin;
    }
  }
`;

const StyledApp = styled.div`
  background-color: ${theme.blueDark};
  background-image: url('${BG}');
  background-position: 50% 50%;
  background-size: cover;
  box-sizing: border-box;
  display: grid;
  font-size: 16px;
  grid-template: 100vh / 100vw;
  height: 100vh;
  width: 100%;
`;

const Container = styled.div`
  align-items: center;
  align-self: stretch;
  background-color: #fff;
  border: 1vw solid ${theme.yellow};
  display: grid;
  justify-items: center;
  justify-self: stretch;
  margin: 10%;
  padding: 1rem;
`;

class App extends Component {
  constructor() {
    super();

    this.state = {
      timerLength: 5,
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
