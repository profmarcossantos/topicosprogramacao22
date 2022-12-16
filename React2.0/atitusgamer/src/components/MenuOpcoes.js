import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function MenuOpcoes() {

    const navigate = useNavigate();
    const logoff = () => {
        sessionStorage.removeItem("login")
        navigate("/")
    }
    return (
        <div className='menu'>
            <Link to="/menu">
                <div className='itemMenu'>Capa</div>
            </Link>
            <Link to="/cadastro">
                <div className='itemMenu'>Cadastro</div>
            </Link>
            <div className='itemMenu' onClick={logoff}>Logoff</div>
        </div>
    )
}
