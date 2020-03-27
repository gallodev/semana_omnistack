import React, {useState} from 'react';
import './style.css';
import logoImg from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';

export default function Register(){
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [whatsapp,setWhatsapp] = useState("");
    const [city,setCity] = useState("");
    const [uf,setUf] = useState("");    

    async function handleRegister(e){
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        };

        try{
            const resp = await api.post("ongs",data)

            alert(`Seu ID de acesso ${resp.data.id}`);
        }catch(err){
            alert("Erro no cadastro !");
        }
    }

    return(
        <div className="register-container">
            <div className="content">
                <section>
                <img src={logoImg} alt="Be-the-hero"/>
                <h1>Cadastro</h1>
                <p>Faça seu cadastro entre na plataforma e ajude pessoas registrar os casos da sua ong</p>
                <Link to="/" className="back-link">
                    <FiArrowLeft size={16} color="#e02041"/>
                        Não tenho cadastro                    
                </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={e=>setName(e.target.value)} 
                        placeholder="Nome da ONG"
                    />
                    <input 
                        type="email" 
                        value={email} 
                        onChange={e=>setEmail(e.target.value)} 
                        placeholder="E-mail"
                    />
                    <input 
                        type="text" 
                        placeholder="Whatsapp"
                        value={whatsapp}
                        onChange={e=>setWhatsapp(e.target.value)}
                    />
                    <div className="input-group">
                        <input 
                            type="text"
                            placeholder="Cidade"
                            value={city}
                            onChange={e=>setCity(e.target.value)}
                        />
                        <input
                            type="text" 
                            placeholder="UF" 
                            value={uf}
                            onChange={e=>setUf(e.target.value)}
                            style={{width:80}}
                        />
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}