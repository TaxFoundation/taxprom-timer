import React, { Component } from 'react';
import Options from './components/Options';
import Timer from './components/Timer';

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
      <div className="App">
        {
          this.state.timerStarted
            ? <Timer time={this.state.timerLength} />
            : <Options
              updateTimerLength={this.updateTimerLength}
              startTimer={this.startTimer}  
            />
        }
        

      </div>
    );
  }
}

export default App;
