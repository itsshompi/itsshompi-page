import React, { Component } from 'react';

//CSS
import './main.css';

import About from './about/main';
import Work from './work/main';
import Freelance from './freelance/main';

export default class RightSide extends Component {
  render() {
    return (
      <div className="container-main fadeInRight animated">
        <About/>
        <Work/>
        <Freelance/>
      </div>
    );
  }
}
