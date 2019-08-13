import React, { Component } from 'react';

//CSS
import './main.css';

export default class Awards extends Component {
  render() {
    return (
      <section className="shompi_section">
        <div className="shompi_section_content">
          <div className="shompi_main_title">
            <span>Last awards</span>
            <h3>Awards</h3>
          </div>
          <div className="texts">
            <ul className="list">
              <li>10/2018</li>
              <li>Desafio Uct</li>
              <li>First place in open university competition, with recognition software for patent plates on mobile devices.</li>
              
              <li>FONDECYT Project of Initiation In Research 2017 No. 11170583. Universidad Catolica de Temuco</li>
             
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
              <li><img width="100%" alt="Random Network LTDA"className="img-work"/></li>
            </ul>
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
          </div>
        </div>
      </section>
    );
  }
}

