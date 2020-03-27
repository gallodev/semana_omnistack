import React from 'react';
import logoImg from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './style.css';


export default function NewIncident(){
    return(
        <div className="new-incident-container">
            <div className="content">
                <section>
                <img src={logoImg} alt="Be-the-hero"/>
                <h1>Cadastrar novo caso</h1>
                <p>Descreva o caso detalhadamente</p>
                <Link to="/" className="back-link">
                    <FiArrowLeft size={16} color="#e02041"/>
                        Voltar para home
                </Link>
                </section>
                <form>
                    <input type="text" placeholder="Titulo do caso"/>
                    <textarea placeholder="Descrição"/>
                    <input type="text" placeholder="Valor em reais"/>                    
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}