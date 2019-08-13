import React, { Component } from 'react';

//CSS
import './main.css';

export default class Freelance extends Component {
  render() {
    return (
      <section className="shompi_section">
        <div className="shompi_section_content">
          <div className="shompi_main_title">
            <span>My latest projects as a Freelance</span>
            <h3>Freelance Works</h3>
          </div>
          <div className="texts">
            <ul className="list">
              <li>04/2019 - 06/2019</li>
              <li>Aplicación Web</li>
              <li>AgroTop (Temuco, Chile)</li>
              <li>
              El proyecto fue realizado con Node.JS y MySQL. La aplicación consiste en poder generar el proceso de 
              envíos de productos, documentando cuando es que se recepcionan los documentos necesarios, y además 
              establecer fechas de estimación para el arribo de cargar enviadas en los buques.
              </li>
            </ul>
            <ul className="list">
              <li>04/2016 - 06/2016</li>
              <li>Aplicación Web</li>
              <li>FORD (Temuco, Chile)</li>
              <li>
              El proyecto fue realizado con javascript. La aplicación consiste en poder realizar un cálculo de la 
              potencia necesaria de Watts que el cliente requiere y poder ofrecer el más conveniente para el caso.
              </li>
            </ul>

            <ul className="list">
              <li>04/2016 - 06/2016</li>
              <li>Sistema de cotización online</li>
              <li>FrioCid (Temuco, Chile)</li>
              <li>
              Este proyecto fue realizado con PHP y una integración con el CMS Prestashop para poder obtener los
              datos de los productos e imágenes. La aplicación consiste en poder tener un registro de usuarios los 
              cuales puedan realizar sus cotizaciones de todos los productos que existen en la tienda, enviando un 
              correo electrónico cuando la cotización sea aprobada por el administrador.
              </li>
            </ul>
            <ul className="list">
              <li>04/2016 - 06/2016</li>
              <li>Aplicación de Escritorio.</li>
              <li>Colegio Bautista (Temuco, Chile)</li>
              <li>
              Este proyecto fue desarrollado con Javascript y Electrón para convertir la aplicación en una de escritorio. 
              La aplicación consiste en poder calcular las cuotas con intereses si es que corresponde, además de poder 
              agregar beneficios a las cuotas.
              </li>
            </ul>
            <ul className="list">
              <li>04/2016 - 06/2016</li>
              <li>Aplicación Web</li>
              <li>DentalApp, Servicios Médicos Dentales (Temuco, Chile)</li>
              <li>
              Este proyecto fue realizado con PHP y MySQL. La aplicación consiste en poder recepcionar la ficha 
              dental del paciente, ya sea datos generales, anamnesis general, odontograma visual, documentos.
              </li>
            </ul>
            <ul className="list">
              <li>04/2016 - 06/2016</li>
              <li>Aplicación web, móvil y sitio web.</li>
              <li>Restaurant las Terrazas (Tomé, Chile)</li>
              <li>Este proyecto fue realizado con PHP para la aplicación web y se realizó un WebView con Android 
                para la aplicación móvil. El sitio web fue construido con HTML5 estilo OnePage. La aplicación 
                consiste en poder mejorar los tiempos de la toma de pedidos, de tal forma que los pedidos eran 
                recibidos por las tablets para posteriormente enviar la solicitud al servidor y este enviará los 
                pedidos a las impresoras POS que se encontraban en la cocina. </li>
            </ul>
            <ul className="list">
              <li>04/2016 - 06/2016</li>
              <li>Aplicación web</li>
              <li>Fusion Delivery (Temuco, Chile)</li>
              <li>
              Este proyecto fue realizado con PHP para la aplicación web. La aplicación consiste recepcionar 
              los pedidos de manera telefónica en el software, y poder enviarlos mediante impresoras POS a la 
              cocina. Además permite obtener estadísticas sobre los distintos pedidos en rangos de fechas.
              </li>
            </ul>
            
          </div>
        </div>
      </section>
    );
  }
}


