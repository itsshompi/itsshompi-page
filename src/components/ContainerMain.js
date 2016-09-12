import React, { Component } from 'react';

//Import CSS
import '../css/app.css';
import '../css/animation.css';
import '../css/animation-delay.css';

class ContainerMain extends Component {
  render() {
    return (
      <div className="container-main fadeInRight animated">
        <div className="about">
          <h1 className="title">About Me</h1>
          <h3 className="sub-title"><span>Who I am?</span></h3>
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
          <hr className="divisor"/>
          <h3 className="sub-title"><span>Jobs: </span></h3>
          <p className="copy"></p>
          <hr className="divisor"/>
          <h3 className="sub-title"><span>Awards: </span></h3>
          <p className="copy"></p>
          <hr className="divisor"/>

          <h3 className="sub-title"><span>Finished web courses: </span></h3>
          <p className="copy">
            <ul className="list">
              <li>Platzi</li>
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
          <p className="copy">
            <ul className="list">
              <li>Edx.org:</li>
              <li>Entrepreneurship 101: Who is your customer? By MITx </li>
              <li>Entrepreneurship 102: What can do for your customer? By MITx </li>
              <li>CS50x3 Introduction to Computer Science By HARVARDx </li>
            </ul>
          </p>
          <p className="copy">
            <ul className="list">
              <li>Udemy:</li>
              <li>Gestión avanzada de datos con MongoDB </li>
              <li>Build Realtime Apps | ReactJS, Golang, RethinkDB </li>
              <li>Learn How To Code: Google's Go (golang) Programming Language </li>
              <li>The Complete Web Developer Bootcamp - Beginner to Expert </li>
              <li>Ruby on rails en español en videos cortos y simples </li>
            </ul>
          </p>
          <p className="copy">
            <ul className="list">
              <li>Codecademy:</li>
              <li>HTML & CSS - Traducción al Español (América Latina) </li>
              <li>JavaScript - Traducción al Español (América Latina) </li>
              <li>PHP</li>
              <li>Learn Git</li>
            </ul>
          </p>
        </div>
      </div>
    );
  }
}

export default ContainerMain;
