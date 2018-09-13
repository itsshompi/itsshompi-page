import React, { Component } from 'react';

import Info from './Info/info';
import Main from './Main/main';

class App extends Component {
  render() {
    return (
      <div>
        <Info/>
        <Main/>
      </div>
    );
  }
}

export default App;
