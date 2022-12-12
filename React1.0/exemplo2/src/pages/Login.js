import React from 'react'
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {

    const navigate = useNavigate();
    let mensagemLogin = "Informe os dados do usuários para acessar a Plataforma:"

    return (
        <>
            <Cabecalho />

            <div>
                <span className='informativo'>
                    {mensagemLogin}
                </span> <br />

                <input placeholder="Username:" type="text" /> <br />
                <input placeholder="Password:" type="password" /> <br />
                <Link to={'/menu'} > Ir para o Menu </Link>
                <button onClick={() => navigate("/menu")}>ENTRAR</button>
            </div>

            <Rodape />
        </>
    )
}
