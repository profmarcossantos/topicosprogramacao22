import React from 'react'
import { Link } from 'react-router-dom'
import loginImage from '../assets/images/login.png'

export default function Cabecalho(props) {

    const { iconLogin, textoAlternativo } = props

    const getNamePlataform = () => {
        return "Briquilaus Corporation"
    }


    return (
        <div className='cabecalho'>
            {iconLogin === true ?
                <img src={loginImage} style={
                    {
                        width: 30,
                        height: 30,
                        marginLeft: 5,
                        marginTop: 4,
                        float: "left",
                        marginRight: 10

                    }}
                    alt="Imagem de Login"
                />
                : null
            }

            <h1 style={{
                textDecoration: "underline",
            }}>
                {textoAlternativo} {getNamePlataform()} !
            </h1>
            {iconLogin === false ?
                <Link to="/" style={{ float: "right" }}>Logoff</Link>
                : null
            }
        </div>
    )
}
