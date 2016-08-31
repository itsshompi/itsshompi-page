import React, { Component } from 'react';
import './App.css';
import './animation.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="container-info fadeInLeft animated">

        </div>
        <div className="container-main fadeInRight animated">
          <div className="about">
            <div className="tag">About Me</div>
            <p className="copy">
              I'm Felipe Schneeberger (Shompi), currently studying computer engineering in Temuco, Chile.
            </p>
            <p className="copy">
              I'm currently developing an own project called <strong>Kuubit.</strong>
            </p>
            <p className="copy">
              I like Web applications development with programming languages such as <strong>Javascript, Go, Ruby, Python.</strong>
            </p>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
