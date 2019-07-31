import React, { Component } from 'react';

//CSS
import './info.css';

//Images
import avatar from '../../images/me_04.png';

export default class Info extends Component {
  render() {
    return (
      <div className="container-info fadeInDown animated">
        <div className="inner-block">
          <div className="content-block">
            <img className="avatar" src={avatar} role="presentation" alt="Felipe Schneeberger"/>
            <div className="principal">
              <h1>FELIPE SCHNEEBERGER</h1>
              <h2>COMPUTER SCIENCE ENGINEER</h2>
              <h3>MENTION: INFORMATION TECHNOLOGIES</h3>
              <h4>
                <span>Backend Developer</span>,<br/>
                 Passionate About <span>Artificial Intelligence</span>,
                 <br/> From Temuco, Chile.
              </h4>
              <p>
                You can contact me at: 
                <br/>
                <span>itsshompi@gmail.com</span>
              </p>
            </div>
            <div className="footer">
              <p>Social Networks</p>
              <ul>
                <li><a href="https://github.com/itsshompi" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a></li>
                <li><a href="https://www.instagram.com/itsshompi" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a></li>
              </ul>
              <p>Created with <i className="fa fa-heart"></i> in Temuco, Chile.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
