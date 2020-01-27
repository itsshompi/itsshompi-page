import React, { Component } from 'react';

//CSS
import './main.css';

export default class University extends Component {
  render() {
    return (
      <section className="shompi_section">
        <div className="shompi_section_content">
          <div className="shompi_main_title">
            <span>My latest university activities</span>
            <h3>University Activities</h3>
          </div>
          <div className="texts">
            <ul className="list">
              <li>04/2019 - 06/2019</li>
              <li>Web Application</li>
              <li>Empresas AgroTop (Temuco, Chile)</li>
              <li>
              El proyecto fue realizado con Node.JS y MySQL. La aplicación consiste en poder generar el proceso de 
              envíos de productos, documentando cuando es que se recepcionan los documentos necesarios, y además 
              establecer fechas de estimación para el arribo de cargar enviadas en los buques.
              </li>
              <li>
                Used technology: <br/>
                <a href="https://nodejs.org/" target="blank__"><i class="devicon-nodejs-plain colored"></i></a>
                <a href="https://www.nginx.com/" target="blank__"><i class="devicon-nginx-original colored"></i></a>
                <a href="https://www.javascript.com/" target="blank__"><i class="devicon-javascript-plain colored"></i></a>
                <a href="https://www.mysql.com/" target="blank__"><i class="devicon-mysql-plain colored"></i></a>
              </li>
            </ul>
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
          </div>
        </div>
      </section>
    );
  }
}