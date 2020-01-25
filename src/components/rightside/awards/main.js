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
              <li>October 2018</li>
              <li>DESAFIO UCT</li>
              <li>First place and $3.100.000CLP</li>
              <li>in open university competition, with recognition software for patent plates on mobile devices.</li>
            </ul>
            <ul className="list">
              <li>September 2018</li>
              <li>HACKAMERICAS CHILE BY Y4PT</li>
              <li>First Regional Place and National Finalist</li>
              <li>Finalista en Hackamericas Chile con software de reconocimiento de placas patentes en dispositivos moviles.</li>
            </ul>
            <ul className="list">
              <li>Junary 2015</li>
              <li>HACELERA HACK - LEAN STARTUP</li>
              <li>First place and entry to business incubator (Incubatec UFRO)</li>
              <li>Finalista en Hackamericas Chile con software de reconocimiento de placas patentes en dispositivos moviles.</li>
            </ul>
            <ul className="list">
              <li>August 2014</li>
              <li>SERCOTEC CHILE - SEED CAPITAL</li>
              <li>$2.500.000CLP</li>
              <li>Finalista en Hackamericas Chile con software de reconocimiento de placas patentes en dispositivos moviles.</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

