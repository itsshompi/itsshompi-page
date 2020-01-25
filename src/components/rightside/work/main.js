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
              <li>
                Used technology: <br/>
                <a href="https://golang.org/" target="blank__"><i class="devicon-go-plain colored"></i></a>
                <a href="https://www.python.org/" target="blank__"><i class="devicon-python-plain colored"></i></a>
                <a href="https://www.mongodb.com/" target="blank__"><i class="devicon-mongodb-plain colored"></i></a>
                <a href="https://reactjs.org/" target="blank__"><i class="devicon-react-original colored"></i></a>
                <a href="https://www.nginx.com/" target="blank__"><i class="devicon-nginx-original colored"></i></a>
                <a href="https://www.javascript.com/" target="blank__"><i class="devicon-javascript-plain colored"></i></a>
              </li>
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
              <li>
                Used technology: <br/>
                <a href="https://www.php.net/" target="blank__"><i class="devicon-php-plain colored"></i></a>
                <a href="https://laravel.com/" target="blank__"><i class="devicon-laravel-plain colored"></i></a>
                <a href="https://www.ruby-lang.org" target="blank__"><i class="devicon-ruby-plain colored"></i></a>
                <a href="https://rubyonrails.org/" target="blank__"><i class="devicon-rails-plain colored"></i></a>
                <a href="https://www.postgresql.org/" target="blank__"><i class="devicon-postgresql-plain colored"></i></a>
                <a href="https://www.mysql.com/" target="blank__"><i class="devicon-mysql-plain colored"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}


