import React, { Component } from 'react';

//Import CSS
import '../css/app.css';
import '../css/animation.css';
import '../css/animation-delay.css';

//Import Images
import go_logo from '../images/go-logo.jpg';
import mongodb_logo from '../images/mongodb-logo.jpg';
import reactjs_logo from '../images/reactjs-logo.jpg';
import redux_logo from '../images/redux-logo.jpg';
import avatar from '../images/me.jpg';

class ContainerInfo extends Component {
  render() {
    return (
      <div className="container-info fadeInLeft animated">
        <div className="inner-block">
          <div className="content-block delay-1-2s fadeIn animated">
            <img className="avatar delay-1-4s fadeIn animated" src={avatar} role="presentation"/>
            <h1 className="delay-1-5s fadeIn animated">Hey, I'm Shompi,</h1>
            <h3 className="delay-1-6s fadeIn animated">a Chilean <span>full stack developer</span> studying <br/> <span>computer engineering</span> in Temuco, Chile.</h3>
            <h4 className="delay-1-7s fadeIn animated"></h4>

            <a className="main-button delay-1-8s fadeIn animated" href="mailto:itsshompi@gmail.com" target="_top">Contact Me!</a>
            <div className="footer delay-1-9s fadeIn animated">
              <ul>
                <li><a href="https://github.com/itsshompi" target="_blank"><i className="fa fa-github"></i></a></li>
                <li><a href="https://www.youtube.com/channel/UCpsVc3k595ADJaHoC1s6zWA" target="_blank"><i className="fa fa-youtube"></i></a></li>
                <li><a href="https://twitter.com/itsshompi" target="_blank"><i className="fa fa-twitter"></i></a></li>
              </ul>
              <p>Created with <i className="fa fa-heart"></i> in Temuco, Chile.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContainerInfo;
