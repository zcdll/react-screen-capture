import React, { Component } from 'react';
import './App.css';
import ScreenCapture from './ScreenCapture';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenCapture: ''
    }
  }

  handleScreenCapture = (screenCapture) => {
    this.setState({
      screenCapture
    })
  }

  render() {
    const { screenCapture } = this.state

    return (
      <ScreenCapture onEndCapture={ this.handleScreenCapture }>
        { ({ onStartCapture }) => (
          <React.Fragment>
            <div>
              <h2>Start editing to see more magic happen</h2>
            </div>
            <button onClick={ onStartCapture }>Capture</button>
            <br/>
            <br/>
            <img src={ screenCapture }/>
          </React.Fragment>
        ) }
      </ScreenCapture>
    );
  }
}

export default App;
