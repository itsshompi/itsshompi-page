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
            <p>In my free time I dedicate myself to learning new methods of machine learning. The new knowledge is applied 
              to create machine learning models for e-sport betting and trading in general.
            </p>
          </div>
        </div>
      </section>
    );
  }
}
