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
            Soy Felipe Schneeberger, actualmente estudio Ingeniería civil en informática en la <a href="https://www.uctemuco.cl" target="_blank" rel="noopener noreferrer">Universidad Católica de Temuco</a>, Chile.
          </p>
          <p className="copy">
            Hoy me encuentro en la creación de una empresa enfocada en el área investigación y desarrollo de inteligencia artificial llamada <strong>Valaris AI.</strong>
          </p>
          <p className="copy">
            Me gusta investigar sobre el estado del arte de la inteligencia artificial, aunque también me dedico a crear aplicaciones web con lenguajes de programación como <strong>JavaScript, Go, Ruby, Python.</strong>
          </p>
          <p className="copy">
            Para el desarrollo web me especializo en las siguientes tecnologías:
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
              <li>Empresa Random Network LTDA. (2013)</li>
              <li>Co-Founder y Desarrollador Web</li>
            </ul>
            <ul className="list">
              <li>Construmart Temuco (2012)</li>
              <li>Asistente de venta en Patio Constructor</li>
            </ul>
            <ul className="list">
              <li>Constructura Construmart Temuco (2012)</li>
              <li>Encargado de Montaje de Racks</li>
            </ul>
          </p>
          <hr className="divisor"/>
          <h3 className="sub-title"><span>Proyectos:</span> </h3>
          <p className="copy">
            <ul className="list">
              <li>Sandbox Augmented Reality/Virtual Reality - (2018)</li>
              <li>Este proyecto combina aplicaciones de visualización 3D creadas por investigadores en UC Davis. La arena se moldea con la mano y el paisaje cobra vida en tiempo real, mediante la proyección de un mapa topográfico, contorno de las topográficas y agua simulada.</li>
            </ul>
            <ul className="list">
              <li>Aplicación y Pagina Web para Restaurant "Las Terrazas Cocholgue" - (2017)</li>
              <li>Aplicación web para la administración del restaurant y Aplicación android tipo WebView para tablets que ocupan los garzones o meseros. La aplicación se conecta con las impresoras termicas / POS para enviar el pedido a la cocina y ademas obtener el recibo para el cliente.</li>
            </ul>
            <ul className="list">
              <li>Aplicación para Restaurant "Fusión Temuco" (2017)</li>
              <li>Aplicación que permite poder llevar un registro de todos los pedidos en el restaurant, ademas de entregar un detalle de lo recaudado. La aplicación trabaja con impresoras termincas / POS.</li>
            </ul>
            <ul className="list">
              <li>Aplicacion Web DentalApp (2016)</li>
              <li>Aplicación que permite poder llevar un registro de los pacientes, ademas de poder </li>
            </ul>
            <ul className="list">
              <li>Aplicacion Desktop "Calculadora Colegio Bautista" (2016)</li>
              <li>Aplicación que permite calcular el interes por mora o interes de un cheque a fecha en base a los parametros establecidos por el colegio.</li>
            </ul>
            <ul className="list">
              <li>Aplicacion Web CloudEducation (2014)</li>
              <li>Aplcación web que ayuda tanto a profesores, directores, alumnos y apoderados a estar enterado de todo lo que sucede en el establecimiento, entregando información desde notas hasta plantillas de planificiaciones para profesores.</li>
            </ul>

          </p>
          <hr className="divisor"/>
          <h3 className="sub-title"><span>Actividades Universitarias:</span> </h3>
          <p className="copy">
            <ul className="list">
              <li>PRESIDENTE CENTRO DE ALUMNOS INGENIERIA CIVIL INFORMÁTICA</li>
              <li>Universidad Catolica de Temuco 2018 - 2019</li>
            </ul>
            <ul className="list">
              <li>AYUDANTE CERTIFICADO NIVEL AVANZADO UC TEMUCO</li>
              <li>Universidad Catolica de Temuco - 05/09/2018 al 05/10/2018</li>
            </ul>
            <ul className="list">
              <li>INVESTIGADOR COLABORADOR EN PROYECTO FONDECYT 11170583 UCT</li>
              <li>Universidad Catolica de Temuco - 07/03/2018 al 01/08/2018</li>
            </ul>
            <ul className="list">
              <li>AYUDANTIA EN INTRODUCCIÓN A LOS SISTEMAS DE BASE DE DATOS. UCT</li>
              <li>Universidad Catolica de Temuco - 07/03/2018 al 01/08/2018</li>
            </ul>
            <ul className="list">
              <li>AYUDANTE CERTIFICADO NIVEL BASICO UC TEMUCO</li>
              <li>Universidad Catolica de Temuco - 05/09/2017 al 15/11/2017</li>
            </ul>
            <ul className="list">
              <li>CLASES DE REFORZAMIENTO DE MATEMÁTICA PARA QUINTO BÁSICO.</li>
              <li>Universidad Catolica de Temuco - 01/09/2017 al 04/11/2017</li>
            </ul>
            <ul className="list">
              <li>CREACIÓN DE HERRAMIENTA PARA DISMINUIR LA SEGREGACIÓN SOCIOECONÓMICA.</li>
              <li>Universidad Catolica de Temuco - 03/04/2017 al 08/11/2017</li>
            </ul>
            <ul className="list">
              <li>AYUDANTIA TALLER DE INTEGRACIÓN I</li>
              <li>Universidad Catolica de Temuco - 08/09/2016 al 12/12/2016</li>
            </ul>
          </p>

          <hr className="divisor"/>
          <h3 className="sub-title"><span>Premios:</span> </h3>
          <p className="copy">
            <ul className="list">
              <li>DESAFIO UCT (2018)</li>
              <li>Primer lugar ($3M) de concurso universitario abierto, con software de reconocimiento de placas patentes en dispositivos moviles.</li>
            </ul>
            <ul className="list">
              <li>HACKAMERICAS (2018)</li>
              <li>Finalista en Hackamericas Chile con software de reconocimiento de placas patentes en dispositivos moviles.</li>
            </ul>
            <ul className="list">
              <li>HACELERA HACK - LEAN STARTUP (2015)</li>
              <li>Primer lugar con la aplicación QuickPark.</li>
            </ul>
            <ul className="list">
              <li>CAPITAL SEMILLA SERCOTEC (2014)</li>
              <li>$2M para el desarrollo de la aplicación CloudEducation.</li>
            </ul>
            <ul className="list">
              <li>CAMPEONATO INTERLICEOS TEMUCO FUTBOL (2010 - HOBBIE)</li>
              <li>Tercer Lugar (Capitan de la selección)</li>
            </ul>
            <ul className="list">
              <li>CAMPEONATO DE LA HISPANIDAD FUTBOL (2009 - HOBBIE)</li>
              <li>Primer Lugar, Mejor Arquero y Mejor Jugador del Campeonato</li>
            </ul>
            <ul className="list">
              <li>KUNG FU CHAMPIONSHIP CHILE (2009 - HOBBIE)</li>
              <li>Tercer lugar en la categoria amateour</li>
            </ul>
          </p>
          <hr className="divisor"/>
          <h3 className="sub-title"><span>Cursos web terminados:</span> </h3>
          <p className="copy">
            <ul className="list">
              <li>Coursera:</li>
              <li>Detección de objetos por Universitat Autònoma de Barcelona</li>
            </ul>
          </p>
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
              <li>Learn Git</li>
            </ul>
          </p>
        </div>
      </div>
    );
  }
}
