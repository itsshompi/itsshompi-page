import React, { Component } from 'react';
import '../css/app.css';
import '../css/animation.css';
import '../css/animation-delay.css';

class Video extends Component {
  render() {
    return (
      <video preload="auto" id="video" loop="true" autoPlay="true" muted="true" className="delay-1s fadeInLeft animated">
        <source type="video/webm" src="http://43eb74ada891f0f09679-c04bb4ac5bb47a13c85d2a60607693e6.r18.cf2.rackcdn.com/frost/coding.webm" />
        <source type="video/mp4" src="http://43eb74ada891f0f09679-c04bb4ac5bb47a13c85d2a60607693e6.r18.cf2.rackcdn.com/frost/coding.mp4"/>
      </video>
    );
  }
}

export default Video;
