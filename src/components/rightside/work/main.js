import React, { Component } from 'react';

//CSS
import './main.css';

export default class Work extends Component {
  render() {
    return (
      <section className="shompi_section">
        <div className="shompi_section_content">
          <div className="shompi_main_title">
            <span>Last works</span>
            <h3>My Works</h3>
          </div>
          <div className="texts">
            <ul className="list">
              <li>03/2017 - Present</li>
              <li>Development Leader / Backend Developer</li>
              <li>FONDECYT Project of Initiation In Research 2017 No. 11170583. Universidad Catolica de Temuco</li>
              <li>I work as a development leader with the SCRUM methodology, in turn I work in the 
                development of our Application Programming Interface (API) that helps to obtain data 
                from schools in Chile for different years built using Go (Golang), MongoDB, Python</li>
                <li><img width="100%" className="img-work"/></li>
            </ul>

            <ul className="list">
              <li>08/2014  - 11/2015</li>
              <li>Development Leader / Backend Developer</li>
              <li>Random Network LTDA - Temuco, Chile.</li>
              <li>
                I worked in a team composed of 4 people in the development of different web applications 
                using Laravel Framework (PHP) and Ruby On Rails Framework. In addition, I was the leader 
                of the CloudEducation project, which aimed to reduce the work of teachers, granting plans 
                and management mechanisms for the educational complex.
              </li>
              <li><img width="100%" className="img-work"/></li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}


