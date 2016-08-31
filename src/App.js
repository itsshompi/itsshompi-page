import React, { Component } from 'react';
import './App.css';
import './animation.css';
import go_logo from './go_logo.png';
import mongodb_logo from './mongodb_logo.png';
import reactjs_logo from './reactjs_logo.png';
import redux_logo from './redux_logo.png';

class App extends Component {
  render() {
    return (
      <div>
        <div className="container-info fadeInLeft animated">
          <div className="inner-block">
            <h1>Hey, I'm Felipe,</h1>
            <h3 className="">a Chilean front-end and back-end developer <br/>studing in Chile at TEMUCO</h3>
            <div className="logos">
              <a href="https://golang.org/" target="_blank"><img src={go_logo} role="presentation"/></a>
              <a href="https://www.mongodb.com" target="_blank"><img src={mongodb_logo} role="presentation"/></a>
              <a href="https://facebook.github.io/react/" target="_blank"><img src={reactjs_logo} role="presentation"/></a>
              <a href="http://redux.js.org/" target="_blank">  <img src={redux_logo} role="presentation"/></a>
            </div>
          </div>
        </div>
        <div className="container-main fadeInRight animated">
          <div className="about">

            <h1 className="title">About Me</h1>
            <h3 className="sub-title">Who I am?</h3>
            <p className="copy">
              I'm Felipe Schneeberger (Shompi), currently studying computer engineering in Temuco, Chile.
            </p>
            <p className="copy">
              I'm currently developing an own project called <strong>Kuubit.</strong>
            </p>
            <p className="copy">
              I like Web applications development with programming languages such as <strong>Javascript, Go, Ruby, Python.</strong>
            </p>
            <p className="copy">
              I'm specialized in web development with the following stack:
              <ul>
                <li><strong>Frontend:</strong> ReactJS & Redux.</li>
                <li><strong>Backend:</strong> Go</li>
                <li><strong>Database:</strong> MongoDB</li>
              </ul>
            </p>
            <h3 className="sub-title">Finished web courses: </h3>
            <h4 className="name-institution">Platzi: </h4>
            <p className="copy">
              <ul>
                <li>Curso Profesional de React.js</li>
                <li>Curso profesional de Ruby on Rails</li>
                <li>Introducción al Diseño de Interfaces</li>
                <li>Introducción al marketing y estrategias digitales</li>
                <li>Curso profesional de Git y GitHub</li>
                <li>Curso de SQL y MySQL</li>
                <li>Curso de UX: Diseño de Experiencia de Usuario</li>
                <li>Curso de Responsive Design</li>
                <li>Curso de PostgreSQL</li>
                <li>Curso de Programación Básica </li>
                <li>Curso de PHP con Laravel</li>
                <li>Curso de Javascript y JQuery Febrero 2015</li>
                <li>Curso de Javascript y JQuery 2014</li>
                <li>Curso de Illustrator</li>
                <li>Curso de HTML5 y CSS3</li>
                <li>Curso de Diseño de Interfaces Móviles</li>
                <li><strong>Carrera:</strong> Bases de Datos (MySQL, PostgresSQL, MongoDB, Redis)</li>
              </ul>
            </p>
            <h4 className="name-institution">Edx.org: </h4>
            <p className="copy">
              <ul>
                <li>Entrepreneurship 101: Who is your customer? By MITx </li>
                <li>Entrepreneurship 102: What can do for your customer? By MITx </li>
                <li>CS50x3 Introduction to Computer Science By HARVARDx </li>
              </ul>
            </p>
            <h4 className="name-institution">Udemy: </h4>
            <p className="copy">
              <ul>
                <li>Gestión avanzada de datos con MongoDB </li>
                <li>Build Realtime Apps | ReactJS, Golang, RethinkDB </li>
                <li>Learn How To Code: Google's Go (golang) Programming Language </li>
                <li>The Complete Web Developer Bootcamp - Beginner to Expert </li>
                <li>Ruby on rails en español en videos cortos y simples </li>
              </ul>
            </p>
            <h4 className="name-institution">Codecademy: </h4>
            <p className="copy">
              <ul>
                <li>HTML & CSS - Traducción al Español (América Latina) </li>
                <li>JavaScript - Traducción al Español (América Latina) </li>
                <li>PHP</li>
              </ul>
            </p>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
