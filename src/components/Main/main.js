import React, { Component } from 'react';

//CSS
import './main.css';

export default class Main extends Component {
  render() {
    return (
      <div className="container-main fadeInRight animated">
        <div className="about">
          <h1 className="title">Sobre Mi</h1>
          <h3 className="sub-title"><span>¿Quien soy?</span></h3>
          <p className="copy">
            Soy Felipe Schneeberger, mis amigos me llaman "Shompi" y actualmente estudio Ingeneria civil en informática en la <a href="https://www.uctemuco.cl" target="_blank" rel="noopener noreferrer">Universidad Catolica de Temuco</a>, Chile.
          </p>
          <p className="copy">
            Hoy me encuentro en la creación de una empresa enfocada en el area investigación y desarrollo de inteligencia artificial llamada <strong>Valaris AI.</strong>
          </p>
          <p className="copy">
            Me gusta investigar sobre el estado del arte de la inteligencia artificial, aunque tambien me dedico a crear aplicaciones web con lenguajes de programación como <strong>Javascript, Go, Ruby, Python.</strong>
          </p>
          <p className="copy">
            Para el desarrollo web me especializo en las siguientes tecnologias:
            <ul>
              <li><strong>Frontend:</strong> ReactJS & Redux.</li>
              <li><strong>Backend:</strong> Go</li>
              <li><strong>Database:</strong> MongoDB</li>
            </ul>
          </p>
          <hr className="divisor"/>
          <h3 className="sub-title"><span>Trabajos:</span> </h3>
          <p className="copy">
            <ul className="list">
              <li>Proyecto FONDECYT De Iniciación En Investigación 2017 Nro. 11170583 (2017 - Actualidad)</li>
              <li>La Definición De Población Educativa “Prioritaria” De La Ley Nro. 20.248 Como Indicador De Vulnerabilidad En El Estudio De La Segregación Socio-Económica En El Sistema De Educación Básica Chilena.</li>
            </ul>
            <ul className="list">
              <li></li>
              <li></li>
            </ul>
          </p>
          <hr className="divisor"/>
          <h3 className="sub-title"><span>Proyectos:</span> </h3>
          <p className="copy">
            <ul className="list">
              <li></li>
              <li></li>
            </ul>
            <ul className="list">
              <li></li>
              <li></li>
            </ul>
            <ul className="list">
              <li></li>
              <li></li>
            </ul>
            <ul className="list">
              <li></li>
              <li></li>
            </ul>
            <ul className="list">
              <li></li>
              <li></li>
            </ul>
          </p>
          <hr className="divisor"/>
          <h3 className="sub-title"><span>Awards:</span> </h3>
          <p className="copy">
            <ul className="list">
              <li>HACKAMERICAS 2018</li>
              <li>Finalist at Hackamericas Chile with patent recognition software in mobile devices.</li>
            </ul>
            <ul className="list">
              <li>CAPITAL SEMILLA SERCOTEC</li>
              <li>$3.500 USD for the development of CloudEducation Application.</li>
            </ul>
            <ul className="list">
              <li>HACELERA HACK - LEAN STARTUP</li>
              <li>First place with QuickPark Application.</li>
            </ul>
            <ul className="list">
              <li>CAPITAL SEMILLA CORFO $50.000 USD</li>
              <li>Second stage</li>
            </ul>
            <ul className="list">
              <li>KUNG FU CHAMPIONSHIP CHILE 2009 (HOBBIE)</li>
              <li>Third place on amateour category</li>
            </ul>
          </p>
          <hr className="divisor"/>
          <h3 className="sub-title"><span>Finished web courses:</span> </h3>
          <p className="copy">
            <ul className="list">
              <li>Platzi:</li>
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
            </ul>
          </p>
        </div>
      </div>
    );
  }
}
