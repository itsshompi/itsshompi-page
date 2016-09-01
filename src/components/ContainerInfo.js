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
            <h3 className="delay-1-6s fadeIn animated">a Chilean developer (Full Stack)</h3>
            <h4 className="delay-1-7s fadeIn animated">I'm studying computer engineering <br/> in the city of Temuco, Chile.</h4>
            <div className="logos delay-1-8s fadeIn animated">
              <p className="stack">My Stack:</p>
              <a href="https://golang.org/" target="_blank"><img src={go_logo} role="presentation"/></a>
              <a href="https://www.mongodb.com" target="_blank"><img src={mongodb_logo} role="presentation"/></a>
              <a href="https://facebook.github.io/react/" target="_blank"><img src={reactjs_logo} role="presentation"/></a>
              <a href="http://redux.js.org/" target="_blank"><img src={redux_logo} role="presentation"/></a>
            </div>
            <a className="main-button delay-2-5s fadeIn animated">Contact Me!</a>
            <div className="footer delay-3s fadeIn animated">
              <ul>
                <li><a><i className="fa fa-github"></i></a></li>
                <li><a><i className="fa fa-youtube"></i></a></li>
                <li><a><i className="fa fa-twitter"></i></a></li>
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
