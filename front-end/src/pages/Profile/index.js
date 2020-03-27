import React, {useEffect , useState} from 'react';
import logoImg from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2} from 'react-icons/fi';
import './style.css';
import api from '../../services/api';


export default function Profile(){
    const [incidents,setIncidents] = useState([]);
    const ongName = localStorage.getItem("ongName");
    const ongId = localStorage.getItem("ongId");

    useEffect(() => {
        api.get('profile',{
            headers : {
                authorization : ongId
            }
        }).then(response=>{
            console.log(response);
            setIncidents(response.data);
        })        
    }, [ongId])

    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} alt=""/>
                <span>Bem vindo, {ongName}</span>
                <Link to="/incidents/new" className="button" >Cadastrar novo caso</Link>
                <button type="button">
                    <FiPower size={18} color="#e02041"/>
                </button>                
            </header>
            <h1>Casos cadastrados</h1>
            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                        <strong>Caso:</strong>
                        <p>{incident.title}</p>

                        <strong>Descrição:</strong>
                        <p>{incident.description}</p>

                        <strong>Valor</strong>
                        <p>{Intl.NumberFormat('pt-BR',{style: 'currency' , currency: "BRL"}).format(incident.value)}</p>

                        <button>
                            <FiTrash2 size={20} color="#a8a8v3"/>
                        </button>
                    </li>                          
                ))}
            </ul>
        </div>
        
    )
}