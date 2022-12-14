import React from 'react'
import { Link } from 'react-router-dom'
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import { useLocation } from 'react-router-dom'

export default function Details() {
    const location = useLocation()
    const { state } = location
    console.log(state)


    return (
        <>
            <Cabecalho iconLogin={false} />
            <span> <Link to="/menu">Voltar a Capa</Link> </span>
            <div>
                <h2>Dados do Cliente</h2>
                <img alt={"imagem do cliente"} src={state.picture.large} />
                <br />
                <p>{state.name.title}</p>
                <p>{state.name.first} {state.name.last}</p>
                <p>{state.email}</p>
                <p>{state.phone}</p>
                <p>{state.location.city} - {state.location.country}</p>

            </div>
            <Rodape />
        </>
    )
}
