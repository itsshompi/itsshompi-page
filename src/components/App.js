import React, { Component } from 'react';

import LeftSide from './leftside/main';
import RightSide from './rightside/main';

class App extends Component {
  render() {
    return (
      <div>
        <LeftSide/>
        <RightSide/>
      </div>
    );
  }
}

export default App;
