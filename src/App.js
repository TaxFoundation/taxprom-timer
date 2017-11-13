import React, { Component } from 'react';
import Options from './components/Options';
import Timer from './components/Timer';
import './style.css';
import BG from './images/splash-bg.jpg';

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
      <div className="App" style={{backgroundImage:`url(${BG})`}}>
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
    );
  }
}

export default App;
