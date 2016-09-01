import React, { Component } from 'react';

//Components
import Video from './Video';
import ContainerInfo from './ContainerInfo';
import ContainerMain from './ContainerMain';
//Import CSS
import '../css/app.css';
import '../css/animation.css';
import '../css/animation-delay.css';

class App extends Component {
  render() {
    return (
      <div>
        <Video/>
        <ContainerInfo/>
        <ContainerMain/>
      </div>

    );
  }
}

export default App;
