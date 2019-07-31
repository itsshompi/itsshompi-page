import React, { Component } from 'react';

//CSS
import './main.css';
//Images

//Projects
import bautista from '../../images/projects/bautista.png';
import dental from '../../images/projects/dental.png';
import ford from '../../images/projects/ford.png';
import friocid from '../../images/projects/friocid.png';
import agrotop from '../../images/projects/agrotop.png';
import las_terrazas from '../../images/projects/las_terrazas.png';
import ftemuco from '../../images/projects/ftemuco.png';
import cloudeducation from '../../images/projects/CloudEducation.png';
import s3e2 from '../../images/projects/s3e2.png';

export default class Main extends Component {
  render() {
    return (
      <div className="container-main fadeInRight animated">
        <section className="shompi_secction">
          <div className="shompi_about">
            <div className="shompi_main_title">
              <span>Information</span>
              <h3>About Me</h3>
            </div>
            <div className="texts">
              
              <p>My name is <strong>Felipe Schneeberger</strong> and I am a creative person from Temuco, Chile. 
              My main professional focuses are: Backend development, and Artificial Intelligence. </p>
              
              <p>I have skills to coordinate teams and I like being able to be a real contribution within 
              these, besides this I can work in multiple tasks in an organized way and respecting the 
              deadlines.</p>

              <p>I have a great versatility adaptable to the different programming languages used in the labor market, 
              although I have a specialization in the following technologies: 
              <strong>Go (Golang), Python, NodeJS, MongoDB, MariaDB, PostgreSQL.</strong></p>

              <p>Today I find myself as an independent worker and as a research assistant in the 
              FONDECYT Project No. 11170583 of the Universidad Catolica de Temuco.</p>

            </div>

            <div className="about_short_contact_wrap">
              <ul>
                <li>
                  <span><label>Age:</label> 25</span>
                </li>
                <li>
                  <span><label>City:</label> Temuco, Chile</span>
                </li>
                <li>
                  <span><label>Interests:</label> Climbing & Mathematics </span>
                </li>
                <li>
                  <span><label>Study:</label> U. Catolica de Temuco</span>
                </li>
                <li>
                  <span><label>Website:</label> <a href="https://github.com/itsshompi" target="_blank" rel="noopener noreferrer">itsshompi.github.io</a></span>
                </li>
                <li>
                  <span><label>Mail:</label> <a href="mailto:itsshompi@gmail.com">itsshompi@gmail.com</a></span>
                </li>
                <li>
                  <span><label>Twitter:</label> <a href="https://twitter.com/itsshompi" target="_blank" rel="noopener noreferrer">@itsshompi</a></span>
                </li>
                <li>
                  <span><label>Instagram:</label> <a href="https://www.instagram.com/itsshompi" target="_blank" rel="noopener noreferrer">@itsshompi</a></span>
                </li>
              </ul>
            </div>

            <div className="works">
              <h2> Trabajos/> </h2>
              <ul className="list">
                <li>Desarrollador Lider / Desarrollador Back-End</li>
                <li>Proyecto FONDECYT De Iniciación En Investigación 2017 Nro. 11170583. (03/2017 - Actualidad)</li>
                <li>Trabajo como líder de desarrollo con la metodología de SCRUM, a su vez trabajo en el 
                  desarrollo de nuestra Interfaz de programación de aplicaciones (API) que ayuda a obtener 
                  datos de las escuelas de Chile para diferentes años. 
                  Construido utilizando Go (Golang), MongoDB, Python. </li>
                  <li><img src={s3e2} width="100%" className="img-work"/></li>
              </ul>
              <ul className="list">
                <li>Desarrollador Back-End.</li>
                <li>Random Network LTDA - Temuco, Chile. (08/2014  - 11/2015)</li>
                <li>
                  Trabajé en un equipo de desarrollo compuesto por 4 personas en el desarrollo de diferentes
                  aplicaciones web utilizando Laravel Framework (PHP) y Ruby On Rails Framework. Ademas fuí lider del 
                  proyecto CloudEducation, el cual tenia como objetivo reducir el trabajo de profesores, otorgando 
                  planificaciones y mecanismos de gestión para el complejo educacional.
                </li>
                <li><img src={cloudeducation} width="100%" className="img-work"/></li>
              </ul>
              <h2> Freelance/> </h2>
              <ul className="list-2">
                <li><img src={las_terrazas} height="70px"/></li>
                <li>Aplicación web, móvil y sitio web.</li>
                <li>Restaurant las Terrazas (Tomé, Chile)</li>
                <li>Este proyecto fue realizado con PHP para la aplicación web y se realizó un WebView con Android 
                  para la aplicación móvil. El sitio web fue construido con HTML5 estilo OnePage. La aplicación 
                  consiste en poder mejorar los tiempos de la toma de pedidos, de tal forma que los pedidos eran 
                  recibidos por las tablets para posteriormente enviar la solicitud al servidor y este enviará los 
                  pedidos a las impresoras POS que se encontraban en la cocina. </li>
              </ul>
              <ul className="list-2">
                <li><img src={bautista} height="70px"/></li>
                <li>Aplicación de Escritorio.</li>
                <li>Colegio Bautista (Temuco, Chile)</li>
                <li>
                Este proyecto fue desarrollado con Javascript y Electrón para convertir la aplicación en una de escritorio. 
                La aplicación consiste en poder calcular las cuotas con intereses si es que corresponde, además de poder 
                agregar beneficios a las cuotas.
                </li>
              </ul>
              <ul className="list-2">
                <li><img src={ftemuco} height="70px"/></li>
                <li>Aplicación web</li>
                <li>Fusion Delivery (Temuco, Chile)</li>
                <li>
                Este proyecto fue realizado con PHP para la aplicación web. La aplicación consiste recepcionar 
                los pedidos de manera telefónica en el software, y poder enviarlos mediante impresoras POS a la 
                cocina. Además permite obtener estadísticas sobre los distintos pedidos en rangos de fechas.
                </li>
              </ul>
              <ul className="list-2">
                <li><img src={dental} height="70px"/></li>
                <li>Aplicación Web</li>
                <li>DentalApp, Servicios Médicos Dentales (Temuco, Chile)</li>
                <li>
                Este proyecto fue realizado con PHP y MySQL. La aplicación consiste en poder recepcionar la ficha 
                dental del paciente, ya sea datos generales, anamnesis general, odontograma visual, documentos.
                </li>
              </ul>
              <ul className="list-2">
                <li><img src={friocid} height="45px"/></li>
                <li>Sistema de cotización online</li>
                <li>FrioCid (Temuco, Chile)</li>
                <li>
                Este proyecto fue realizado con PHP y una integración con el CMS Prestashop para poder obtener los
                datos de los productos e imágenes. La aplicación consiste en poder tener un registro de usuarios los 
                cuales puedan realizar sus cotizaciones de todos los productos que existen en la tienda, enviando un 
                correo electrónico cuando la cotización sea aprobada por el administrador.
                </li>
              </ul>
              <ul className="list-2">
                <li><img src={ford} height="45px"/></li>
                <li>Aplicación Web</li>
                <li>FORD (Temuco, Chile)</li>
                <li>
                El proyecto fue realizado con javascript. La aplicación consiste en poder realizar un cálculo de la 
                potencia necesaria de Watts que el cliente requiere y poder ofrecer el más conveniente para el caso.
                </li>
              </ul>
              <ul className="list-2">
                <li><img src={agrotop} height="70px"/></li>
                <li>Aplicación Web</li>
                <li>AgroTop (Temuco, Chile)</li>
                <li>
                El proyecto fue realizado con Node.JS y MySQL. La aplicación consiste en poder generar el proceso de 
                envíos de productos, documentando cuando es que se recepcionan los documentos necesarios, y además 
                establecer fechas de estimación para el arribo de cargar enviadas en los buques.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
