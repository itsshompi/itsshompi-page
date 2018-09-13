import React, { Component } from 'react';

//CSS
import './info.css';

//Images
import avatar from '../../images/me_02.jpg';

export default class Info extends Component {
  render() {
    return (
      <div className="container-info fadeInLeft animated">
        <div className="inner-block">
          <div className="content-block">
            <img className="avatar" src={avatar} role="presentation" alt="Felipe Schneeberger"/>
            <h1>Hey, I'm Shompi,</h1>
            <h3>a Chilean passionate about <span>artificial intelligence</span> & <br/> <span>full stack developer</span>  studying <br/> <span>computer engineering</span>  in Temuco, Chile.</h3>
            <div className="content-button">
              <a className="main-button" href="mailto:itsshompi@gmail.com">Contact Me!</a>
            </div>
            <div className="footer">
              <p>Social Networks</p>
              <ul>
                <li><a href="https://github.com/itsshompi" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a></li>
                <li><a href="https://www.youtube.com/channel/UCpsVc3k595ADJaHoC1s6zWA" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube"></i></a></li>
                <li><a href="https://twitter.com/itsshompi" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a></li>
                <li><a href="https://www.instagram.com/itsshompi" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a></li>
                <li><a href="https://www.facebook.com/itsshompi" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a></li>
                <li><a href="https://twitch.tv/itsshompi" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitch"></i></a></li>
              </ul>
              <p>Created with <i className="fa fa-heart"></i> in Temuco, Chile.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
