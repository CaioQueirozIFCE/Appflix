import React from 'react';
import logoTFlix from '../../assests/imagens/logoTFlix.png';
import './menu.css';
import ButtonLink from './components/ButtonLink';


function Menu(){
    return (
        <nav className="Menu">
            <a href="/">
                <img className="logo" src={logoTFlix} alt="TFlix logo"/>
            </a>
            <ButtonLink className="ButtonLink" href="/">
             Novo Vídeo
            </ButtonLink>
            <div className="ButtonLinkResponsive"></div>
        </nav>
        )
}

export default Menu;