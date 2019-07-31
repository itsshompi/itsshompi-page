import React, { Component } from 'react';

//CSS
import './main.css';

export default class About extends Component {
  render() {
    return (
      <section className="shompi_section">
        <div className="shompi_section_content">
          <div className="shompi_main_title">
            <span>Information</span>
            <h3>About Me</h3>
          </div>
          <div className="texts">
            <p>My name is <strong>Felipe Schneeberger</strong> and I am a creative person from Temuco, Chile. 
              My main professional focuses are: Backend development, and Artificial Intelligence. 
            </p>
            <p>I have skills to coordinate teams and I like being able to be a real contribution within 
              these, besides this I can work in multiple tasks in an organized way and respecting the 
              deadlines.
            </p>
            <p>I have a great versatility adaptable to the different programming languages used in the labor market, 
              although I have a specialization in the following technologies: 
              <strong>Go (Golang), Python, NodeJS, MongoDB, MariaDB, PostgreSQL.</strong>
            </p>
            <p>Today I find myself as an independent worker and as a research assistant in the 
              FONDECYT Project No. 11170583 of the Universidad Catolica de Temuco.
            </p>
          </div>
          <div className="about_short_contact_wrap">
            <ul>
              <li>
                <span><label>Age:</label> 25</span>
              </li>
              <li>
                <span><label>City:</label> Temuco, Chile</span>
              </li>
              <li>
                <span><label>Interests:</label> Climbing & Mathematics </span>
              </li>
              <li>
                <span><label>Study:</label> U. Catolica de Temuco</span>
              </li>
              <li>
                <span><label>Website:</label> <a href="https://github.com/itsshompi" target="_blank" rel="noopener noreferrer">itsshompi.github.io</a></span>
              </li>
              <li>
                <span><label>Mail:</label> <a href="mailto:itsshompi@gmail.com">itsshompi@gmail.com</a></span>
              </li>
              <li>
                <span><label>Twitter:</label> <a href="https://twitter.com/itsshompi" target="_blank" rel="noopener noreferrer">@itsshompi</a></span>
              </li>
              <li>
                <span><label>Instagram:</label> <a href="https://www.instagram.com/itsshompi" target="_blank" rel="noopener noreferrer">@itsshompi</a></span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}
