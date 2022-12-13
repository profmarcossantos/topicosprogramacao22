import React, { useState } from 'react'
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import { useNavigate } from 'react-router-dom'

export default function Login() {

    const navigate = useNavigate();
    let mensagemLogin = "Informe os dados do usuários para acessar a Plataforma:"

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [msgError, setMsgError] = useState("")

    const validar = () => {

        if (userName === "admin" && password === "Atitus") {
            navigate("/menu")
        } else {
            setMsgError("Usuário ou senha inválidos!")
        }

    }

    return (
        <>
            <Cabecalho textoAlternativo="Login" iconLogin={true} />

            <div>
                <span className='informativo'>
                    {mensagemLogin}
                </span> <br />

                <span style={{ color: "red", fontSize: 10 }}>
                    {msgError}
                </span>

                <br />
                <input
                    placeholder="Username:"
                    type="text"
                    value={userName}
                    onChange={(p) => setUserName(p.target.value)}
                /> <br />
                <input
                    placeholder="Password:"
                    type="password"
                    value={password}
                    onChange={(p) => setPassword(p.target.value)}

                /> <br />
                <button onClick={validar}>ENTRAR</button>
            </div>

            <Rodape />
        </>
    )
}
