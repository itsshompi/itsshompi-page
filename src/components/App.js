import React, { Component } from 'react';

import Info from './Info/info';
import AboutMe from './AboutMe/main';
import Menu from './Menu/menu';

class App extends Component {
  render() {
    return (
      <div>
        <Info/>
        <AboutMe/>
      </div>
    );
  }
}

export default App;
