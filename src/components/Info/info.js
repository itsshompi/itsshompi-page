import React, { Component } from 'react';

//CSS
import './info.css';

//Images
import avatar from '../../images/me_04.png';

export default class Info extends Component {
  render() {
    return (
      <div className="container-info fadeInDown animated">
        <div className="inner-block">
          <div className="content-block">
            <img className="avatar" src={avatar} role="presentation" alt="Felipe Schneeberger"/>
            <div className="principal">
              <h1>Felipe Schneeberger</h1>
              <h2>Ingeniero Civil en Informática</h2>
              <h3>Mención Tecnologias de la Información</h3>

              <h4>
                <span>Desarrollador Backend</span>,<br/>
                apasionado por la <span>Inteligencia Artificial</span>,
                <br/> de Temuco, Chile.
              </h4>
              
              <p>
                Puedes contactarme en: 
                <br/>
                <span>itsshompi@gmail.com</span>
              </p>
            </div>
            <div className="footer">
              <p>Redes Sociales</p>
              <ul>
                <li><a href="https://github.com/itsshompi" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a></li>
                <li><a href="https://www.youtube.com/channel/UCpsVc3k595ADJaHoC1s6zWA" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube"></i></a></li>
                <li><a href="https://twitter.com/itsshompi" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a></li>
                <li><a href="https://www.instagram.com/itsshompi" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a></li>
                <li><a href="https://www.facebook.com/itsshompi" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a></li>
                <li><a href="https://twitch.tv/itsshompi" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitch"></i></a></li>
              </ul>
              <p>Creado con <i className="fa fa-heart"></i> en Temuco, Chile.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
